import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateGroupUseCase } from './create-group-use-case'

class CreateGroupController {

  constructor(private createGroupUseCase: CreateGroupUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const createGroupBody = z.object({
      name: z.string(),
      description: z.string(),
      brand: z.string().optional()
    })

    const { description, name, brand } = createGroupBody.parse(request.body)

    const group = await this.createGroupUseCase.execute({ name, description, brand })

    return response.json(group)
  }
}

export { CreateGroupController }