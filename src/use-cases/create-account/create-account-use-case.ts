import { v4 as uuidV4 } from 'uuid'

type User = {
  name: String
  id: String
}

class CreateAccountUseCase {

  async execute(name: String): Promise<User> {
    const id = uuidV4()

    return { name, id }
  }
}

export { CreateAccountUseCase }