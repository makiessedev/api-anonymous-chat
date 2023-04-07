import { prisma } from '../../utils/prisma'

type GroupInput = {
  name: string
  description: string
  brand?: string
}

class CreateGroupUseCase {

  async execute({ description, name, brand }: GroupInput): Promise<any> {

    const group = await prisma.group.create({
      data: {
        name,
        description,
        brand,
        created_at: new Date()
      }
    })

    return group
  }

}

export { CreateGroupUseCase }