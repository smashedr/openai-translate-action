// noinspection JSUnusedGlobalSymbols

import axios, { AxiosInstance } from 'axios'

export class OpenAI {
  client: AxiosInstance

  constructor(token: string) {
    this.client = axios.create({
      baseURL: 'https://api.openai.com/v1',
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async getResponse(data: any) {
    const response = await this.client.post('/responses', data)
    console.log('response:', response)
    console.log('response.status:', response.status)
    return response.data
  }
}
