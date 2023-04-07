import { Router } from 'express'

import { user_routes } from './user.routes'
import { group_routes } from './group.routes'

const routes = Router()

routes.use(user_routes)
routes.use(group_routes)

export { routes }