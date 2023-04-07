import { Router } from 'express'
import { createGroupController } from '../use-cases/create-group/'

const group_routes = Router()

group_routes.post('/group', (req, res) => createGroupController.handle(req, res))

export { group_routes }