import { SendMessageUseCase } from './send-message-use-case'
import { SendMessageController } from './send-message-controller'

const sendMessageUseCase = new SendMessageUseCase()
const sendMessageController = new SendMessageController(sendMessageUseCase)

export { sendMessageController }