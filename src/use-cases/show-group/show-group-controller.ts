import { Request, Response } from 'express'
import { z } from 'zod'

import { ShowGroupUseCase } from './show-group-use-case'


class ShowGroupController {

  constructor(private showGroupUseCase: ShowGroupUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const groupBody = z.object({
      id: z.string().uuid()
    })

    const { id } = groupBody.parse(request.params)

    const groupMessages = await this.showGroupUseCase.execute(id)

    return response.json(groupMessages)
  }
}

export { ShowGroupController }