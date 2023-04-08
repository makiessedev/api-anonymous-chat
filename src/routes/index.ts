import { Router } from 'express'

import { user_routes } from './user.routes'
import { group_routes } from './group.routes'
import { message_routes } from './message.routes'

const routes = Router()

routes.use(user_routes)
routes.use(group_routes)
routes.use(message_routes)

export { routes }