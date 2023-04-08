import { prisma } from '../../utils/prisma.ts'

type MessageInput = {
  sender: string
  content: string
  group: string
}

class SendMessageUseCase {

  async execute({sender, content, group}: MessageInput): Promise<any> {
    const message = await prisma.message.create({
      data: {
        sender,
        type: "txt",
        content,
        created_at: new Date(),
        group_id: group
      }
    })

    return message
  }
}

export { SendMessageUseCase }