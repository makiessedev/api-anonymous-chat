import { Request, Response } from 'express'
import { z } from 'zod'

import { SendMessageUseCase } from './send-message-use-case'

class SendMessageController {

  constructor(private sendMessageUseCase: SendMessageUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const sendMessageBody = z.object({
      sender: z.string(),
      content: z.string(),
      group: z.string()
    })

    const { sender, content, group } = sendMessageBody.parse(request.body)

    const message = this.sendMessageUseCase.execute({sender, content, group})

    return response.json(message)
  }
}

export { SendMessageController }
