import { Router } from 'express'
import { createGroupController } from '../use-cases/create-group/'
import { showGroupController } from '../use-cases/show-group/'

const group_routes = Router()

group_routes.post('/group', (req, res) => createGroupController.handle(req, res))
group_routes.get('/group/:id', (req, res) => showGroupController.handle(req, res))

export { group_routes }