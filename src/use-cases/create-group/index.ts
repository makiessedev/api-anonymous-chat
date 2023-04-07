import { CreateGroupController } from './create-group-controller'
import { CreateGroupUseCase } from './create-group-use-case'

const createGroupUseCase = new CreateGroupUseCase()
const createGroupController = new CreateGroupController(createGroupUseCase)

export { createGroupController }