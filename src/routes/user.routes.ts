import { Router } from 'express'

import { createAccountContoller } from '../use-cases/create-account'

const user_routes = Router()

user_routes.post('/account', (req, res) => createAccountContoller.handle(req, res))

export { user_routes }