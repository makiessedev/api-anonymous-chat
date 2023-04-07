import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateAccountUseCase } from './create-account-use-case'

class CreateAccountContoller {

  constructor(private createAccountUseCase: CreateAccountUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const creatAccountBody = z.object({
      name: z.string()
    })

    const { name } = creatAccountBody.parse(request.body)

    const user = await this.createAccountUseCase.execute(name)

    return response.json(user)
  }
}

export { CreateAccountContoller }