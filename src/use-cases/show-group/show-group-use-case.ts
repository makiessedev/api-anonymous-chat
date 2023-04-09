import { prisma } from '../../utils/prisma'

class ShowGroupUseCase {

  async execute(id: string): Promise<any> {

    const groupMessages = await prisma.group.findMany({
      where: {
        id: {
          equals: id
        }
      },
      orderBy: {
        created_at: "desc"
      },
      include: {
        Message: true
      }
    })

    return groupMessages
  }
}

export { ShowGroupUseCase }