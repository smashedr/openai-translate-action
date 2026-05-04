import * as core from '@actions/core'
import axios from 'axios'
import { existsSync, readFileSync } from 'node:fs'
import OpenAI from 'openai'

// import { OpenAI } from './openai.js'

// Inputs
const inputs = {
  text: core.getInput('text'),
  file: core.getInput('file'),
  languages: core.getInput('languages', { required: true }),
  model: core.getInput('model', { required: true }),
  instructions: core.getInput('instructions'),
  token: core.getInput('token'),
  summary: core.getBooleanInput('summary'),
} as const

// type Inputs = typeof inputs

const PROMPT = {
  model: inputs.model,
  // instructions: 'Translate the following to [LANGUAGE]. Output only the translation.',
  instructions: '',
  input: '',
}

async function main() /* NOSONAR */ {
  const version: string = process.env.GITHUB_ACTION_REF
    ? `\u001b[35;1m${process.env.GITHUB_ACTION_REF}`
    : '\u001b[33;1mSource'
  core.info(`🏳️ Starting OpenAI Translate Action - ${version}`)

  // // Debug
  // core.startGroup('Debug: github.context')
  // console.log(github.context)
  // core.endGroup() // Debug github.context
  // core.startGroup('Debug: process.env')
  // console.log(process.env)
  // core.endGroup() // Debug process.env

  // // Debug Path
  // const __filename = fileURLToPath(import.meta.url)
  // core.debug(`__filename: ${__filename}`)
  // const __dirname = path.dirname(__filename)
  // core.debug(`__dirname: ${__dirname}`)
  // const src = path.resolve(__dirname, '../src')
  // core.debug(`src: ${src}`)

  console.log('inputs:', inputs)

  // Setup
  if (!inputs.text && !inputs.file) {
    return core.setFailed('You must provide an input text string or file path.')
  }

  const languages = inputs.languages
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  console.log('languages:', languages)

  if (inputs.text) {
    console.log('inputs.text:', inputs.text)
    PROMPT.input = inputs.text
  } else if (inputs.file) {
    if (!existsSync(inputs.file)) {
      return core.setFailed(`Input file does not exist: ${inputs.file}`)
    }
    const file = readFileSync(inputs.file)
    const text = file.toString()
    console.log('file text:', text)
    PROMPT.input = text
  }
  // console.log('PROMPT:', PROMPT)

  // // Process
  // const api = new OpenAI(inputs.token)
  if (inputs.token) process.env.OPENAI_API_KEY = inputs.token
  console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY)
  if (!process.env.OPENAI_API_KEY) return core.setFailed('Missing OpenAI API Key')
  const client = new OpenAI()

  const items: Record<string, string> = {}
  const results: string[] = []

  for (const language of languages) {
    console.log('language:', language)
    const prompt = getPrompt(language)
    console.log('prompt:', prompt)

    // const response = await api.getResponse(prompt)
    // console.log('response:', response)
    // const text = response.output[0].content[0].text
    // console.log('text:', text)

    const response = await client.responses.create(prompt)
    console.log('response:', response)

    results.push(response.output_text)
    items[language] = response.output_text
  }

  console.log('items:', items)
  console.log('results:', results)

  // // Summary
  // if (inputs.summary) {
  //   core.info('📝 Writing Job Summary')
  //   try {
  //     await addSummary(inputs, upload, publish, status)
  //   } catch (e) {
  //     console.log(e)
  //     if (e instanceof Error) core.warning(`Error writing Job Summary ${e.message}`)
  //   }
  // }

  // Set Outputs
  core.info('📩 Setting Outputs')
  core.setOutput('items', items)
  core.setOutput('results', results)
  for (const [key, value] of Object.entries(items)) {
    console.log(`key: ${key}:`, value)
    core.info(`Set Output: ${key}`)
    core.setOutput(key, value)
  }

  core.info(`✅ \u001b[32;1mFinished Success`)
}

function getPrompt(language: string) {
  PROMPT.instructions = `Translate to ${language}. Preserve all formatting and output only the translation.`
  if (inputs.instructions) {
    PROMPT.instructions += ` ${inputs.instructions}`
  }
  return PROMPT
}

// const getData = (language: string) => ({
//   model: inputs.model,
//   instructions: `Translate the following to ${language}. Output only the translation.`,
//   input: 'This is already set.',
// })

// async function addSummary(inputs: Inputs, upload: any, publish: any, status: any) {
//   const itemUrl = `https://chromewebstore.google.com/detail/${inputs.extID}`
//   const packageUrl = `https://chrome.google.com/webstore/devconsole/${inputs.pubID}/${inputs.extID}/edit/package`
//   const downloadUrl = `https://chrome.google.com/webstore/download/${inputs.extID}/revision/__DRAFT/package/main/crx/3`
//
//   core.summary.addRaw('## OpenAI Translate Action\n\n')
//   core.summary.addRaw(
//     `Publishing Extension [${inputs.extID}](${itemUrl}) to the [Developer Console](${packageUrl}).\n\n`,
//   )
//
//   if (upload) {
//     core.summary.addRaw(`\n\n:globe_with_meridians: Successfully Uploaded Extension.\n\n`)
//     core.summary.addCodeBlock(JSON.stringify(upload, null, 2), 'json')
//   }
//   if (publish) {
//     core.summary.addRaw(`\n\n:rocket: Successfully Submitted Extension.\n\n`)
//     core.summary.addCodeBlock(JSON.stringify(publish, null, 2), 'json')
//   }
//   if (status) {
//     core.summary.addRaw(`\n\n:question: Extension Status.\n\n`)
//     core.summary.addCodeBlock(JSON.stringify(status, null, 2), 'json')
//   }
//
//   core.summary.addRaw('\n<details><summary>Details</summary>')
//   core.summary.addTable([
//     [
//       { data: 'Item', header: true },
//       { data: 'Value', header: true },
//     ],
//     [{ data: 'Extension ID' }, { data: inputs.extID }],
//     [{ data: 'Publisher ID' }, { data: inputs.pubID }],
//     [{ data: 'ZIP File' }, { data: inputs.zipFile }],
//     [{ data: 'Store Item' }, { data: itemUrl }],
//     [{ data: 'Dashboard' }, { data: packageUrl }],
//     [{ data: 'Download' }, { data: downloadUrl }],
//   ])
//   core.summary.addRaw('</details>\n')
//
//   const text = 'View Documentation, Report Issues or Request Features'
//   const link = 'https://github.com/smashedr/openai-translate-action'
//   core.summary.addRaw(`\n[${text}](${link}?tab=readme-ov-file#readme)\n\n---`)
//   await core.summary.write()
// }

try {
  await main()
} catch (e) {
  if (axios.isAxiosError(e)) {
    console.log('isAxiosError:', e.message)
    const data = e.response?.data
    console.log('data:', data)
    const message = data?.error?.message
    console.log('message:', message)
    core.setFailed(message || e.message || 'Unknown Axios Error')
  } else if (e instanceof Error) {
    console.log('Error:', e)
    core.setFailed(e.message)
  } else {
    console.log('Unknown Error:', e)
    core.setFailed('Unknown Error')
  }
}
