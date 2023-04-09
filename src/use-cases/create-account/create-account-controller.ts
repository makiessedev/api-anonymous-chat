import { Request, Response } from 'express'
import { z, ZodError } from 'zod'

import { CreateAccountUseCase } from './create-account-use-case'

class CreateAccountContoller {

  constructor(private createAccountUseCase: CreateAccountUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const creatAccountBody = z.object({
        name: z.string().nonempty()
      })
  
      const { name } = creatAccountBody.parse(request.body)
  
      const user = await this.createAccountUseCase.execute(name)

      return response.status(201).json(user)
    } catch(error) {
      return response.status(400).json(error)
    }
  }
}

export { CreateAccountContoller }