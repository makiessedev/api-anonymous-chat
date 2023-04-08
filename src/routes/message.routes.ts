import { Router } from 'express'

import { sendMessageController } from '../use-cases/send-message/'

const message_routes = Router()

message_routes.post('/message', (req, res) => sendMessageController.handle(req, res))

export { message_routes }