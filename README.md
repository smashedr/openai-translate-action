[![GitHub Tag Major](https://img.shields.io/github/v/tag/smashedr/openai-translate-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/openai-translate-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/smashedr/openai-translate-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/openai-translate-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/smashedr/openai-translate-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/smashedr/openai-translate-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/smashedr/openai-translate-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/smashedr/openai-translate-action/blob/master/src)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fopenai-translate-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/actionlint-action/blob/master/action.yml)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/smashedr/openai-translate-action/release.yaml?logo=norton&logoColor=white&label=release)](https://github.com/smashedr/openai-translate-action/actions/workflows/release.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/smashedr/openai-translate-action/lint.yaml?logo=norton&logoColor=white&label=lint)](https://github.com/smashedr/openai-translate-action/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/smashedr/openai-translate-action?logo=github&label=updated)](https://github.com/smashedr/openai-translate-action)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/smashedr/openai-translate-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/smashedr/openai-translate-action)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/smashedr/openai-translate-action?logo=buffer&label=repo%20size)](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/smashedr/openai-translate-action?logo=devbox)](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/smashedr/openai-translate-action?logo=southwestairlines)](https://github.com/smashedr/openai-translate-action/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues/smashedr/openai-translate-action?logo=codeforces&logoColor=white)](https://github.com/smashedr/openai-translate-action/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/smashedr/openai-translate-action?logo=livechat&logoColor=white)](https://github.com/smashedr/openai-translate-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/smashedr/openai-translate-action?style=flat&logo=forgejo&logoColor=white)](https://github.com/smashedr/openai-translate-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/smashedr/openai-translate-action?style=flat&logo=gleam&logoColor=white)](https://github.com/smashedr/openai-translate-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=apachespark&logoColor=white&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# OpenAI Translate Action

<a title="OpenAI Translate Action" href="https://actions.cssnr.com/" target="_blank">
<img alt="OpenAI Translate Action" align="right" width="128" height="auto" src="https://raw.githubusercontent.com/smashedr/openai-translate-action/refs/heads/master/.github/assets/logo.svg"></a>

- [Features](#Features)
- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

OpenAI Translate Action. Translate a text or file to any arbitrary languages.

```yaml
- name: 'OpenAI Translate'
  uses: smashedr/openai-translate-action@master
  #env:
  #  OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
  with:
    text: 'This is a test message.'
    #file: text.md  # or a file
    languages: 'Spanish,French'
    token: ${{ secrets.OPENAI_API_KEY }}
```

## Features

- Translate a Text or File
- Translate to Multiple Languages
- Individual Outputs
- Coming Soon

> If you want to see one of these features, or another one,
> please [submit a feature request](https://github.com/smashedr/openai-translate-action/issues/new?template=1-feature.yaml).

## Inputs

| Input                         |  Req.   |    Default     | Input&nbsp;Description     |
| :---------------------------- | :-----: | :------------: | :------------------------- |
| [text](#text)                 |    -    |       -        | Text to Translate          |
| [file](#file)                 |    -    |       -        | File to Translate          |
| [languages](#languages)       | **Yes** |       -        | Languages to Translate Too |
| [instructions](#instructions) |    -    |       -        | Extra Instructions         |
| [model](#model)               |    -    | `gpt-4.1-mini` | Model to Use               |
| **token**                     | **Yes** |       -        | OpenAI API Token           |
| **summary**                   |    -    |     `true`     | Add Summary to Job         |

Note: The token can be provided with the `OPENAI_API_KEY` environment variable or the `token` input.

You can create an OpenAI API Key here: https://platform.openai.com/api-keys

#### text

Text string to translate.

#### file

File to read text to translate.

#### languages

Languages to translate too. This can be a comma seperated string or a new-line delimited list.
These are arbitrary languages strings. If you need to explain these use [instructions](#instructions).

### instructions

Extra instruction for translation.

### model

Recommended to use `4.1` (not `5`). Default is `gpt-4.1-mini`.

| Model          | Cost Per 1M Tokens      | Short&nbsp;Description&nbsp;of&nbsp;the&nbsp;Model               |
| :------------- | :---------------------- | :--------------------------------------------------------------- |
| `gpt-4.1-nano` | ~$0.10 in / ~$0.40 out  | **Cheapest**. Fast for testing or low-quality translations.      |
| `gpt-4.1-mini` | ~$0.40 in / ~$1.60 out  | **Best Balance**. Good for most real-world translation tasks.    |
| `gpt-4.1`      | ~$5.00 in / ~$15.00 out | **Highest Quality**. Best for accurate and complex translations. |

More Details: <https://developers.openai.com/api/docs/models/all>

## Examples

With text and csv languages using input token.

```yaml
- name: 'OpenAI Translate'
  uses: smashedr/openai-translate-action@master
  with:
    text: 'This is a test message.'
    languages: 'Spanish,French,German'
    token: ${{ secrets.OPENAI_API_KEY }}
```

With file and new-line delimited languages using environment token.

```yaml
- name: 'OpenAI Translate'
  uses: smashedr/openai-translate-action@master
  env:
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
  with:
    file: text.md
    languages: |
      Spanish
      French
      German
```

For more examples, you can check out other projects using this action:  
https://github.com/smashedr/openai-translate-action/network/dependents

## Outputs

| Output        | Description              |
| :------------ | :----------------------- |
| items         | Results Object           |
| results       | Results Array            |
| _language_    | Arbitrary Output         |
| input_tokens  | Total Input Tokens Used  |
| output_tokens | Total Output Tokens Used |
| total_tokens  | Total Output Tokens Used |

**items** - Mapping of `{"Language": "Result"}`

**results** - Array of `["Result 1", "Result 2"]`

**language** - Named output based in input language (see example below)

This lets you reuse the generated `token` or validate the response data.

```yaml
- name: 'OpenAI Translate'
  id: translate
  uses: smashedr/openai-translate-action@master
  with:
    text: 'This is a test message.'
    languages: 'Spanish,French'
    token: ${{ secrets.OPENAI_API_KEY }}

- name: 'Echo Outputs'
  env:
    items: ${{ steps.test.outputs.items }}
    results: ${{ steps.test.outputs.results }}
    spanish: ${{ steps.test.outputs.Spanish }}
    french: ${{ steps.test.outputs.French }}
  run: |
    echo "input_tokens: ${input_tokens}"
    echo "output_tokens: ${output_tokens}"
    echo "total_tokens: ${total_tokens}"
    echo "items: ${items}"
    echo "results: ${results}"
    echo "spanish: ${spanish}"
    echo "french: ${french}"
```

Note: Multi-line outputs get evaluated using `${{ }}` in a `run` block.

## Tags

The following rolling [tags](https://github.com/smashedr/openai-translate-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                                     | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/smashedr/openai-translate-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/smashedr/openai-translate-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/smashedr/openai-translate-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/smashedr/openai-translate-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/smashedr/openai-translate-action?style=for-the-badge&label=%20&color=red)](https://github.com/smashedr/openai-translate-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/smashedr/openai-translate-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

If you run into any issues or need help getting started, please do one of the following:

- [Report an Issue](https://github.com/smashedr/openai-translate-action/issues)
- [Q&A Discussion](https://github.com/smashedr/openai-translate-action/discussions/categories/q-a)
- [Request a Feature](https://github.com/smashedr/openai-translate-action/issues/new?template=1-feature.yaml)
- [Chat with us on Discord](https://discord.gg/wXy6m2X8wY)

[![Features](https://img.shields.io/badge/features-brightgreen?style=for-the-badge&logo=rocket&logoColor=white)](https://github.com/smashedr/openai-translate-action/issues/new?template=1-feature.yaml)
[![Issues](https://img.shields.io/badge/issues-red?style=for-the-badge&logo=southwestairlines&logoColor=white)](https://github.com/smashedr/openai-translate-action/issues)
[![Discussions](https://img.shields.io/badge/discussions-blue?style=for-the-badge&logo=livechat&logoColor=white)](https://github.com/smashedr/openai-translate-action/discussions)
[![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wXy6m2X8wY)

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Openai Publish Action](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme)
- [Rhysd Actionlint Action](https://github.com/cssnr/actionlint-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Homebrew Action](https://github.com/cssnr/homebrew-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Create Pull Action](https://github.com/cssnr/create-pull-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)

<a href="https://github.com/smashedr/openai-translate-action">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=smashedr/openai-translate-action&type=date&legend=bottom-right&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=smashedr/openai-translate-action&type=date&legend=bottom-right" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=smashedr/openai-translate-action&type=date&legend=bottom-right" />
 </picture>
</a>
