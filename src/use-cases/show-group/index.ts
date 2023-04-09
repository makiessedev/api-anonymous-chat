import { ShowGroupController } from "./show-group-controller";
import { ShowGroupUseCase } from "./show-group-use-case";

const showGroupUseCase = new ShowGroupUseCase()
const showGroupController = new ShowGroupController(showGroupUseCase);

export { showGroupController }