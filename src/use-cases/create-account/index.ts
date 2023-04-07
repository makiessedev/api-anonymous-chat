import { CreateAccountContoller } from "./create-account-controller";
import { CreateAccountUseCase } from "./create-account-use-case";

const createAccountUseCase = new CreateAccountUseCase()
const createAccountContoller = new CreateAccountContoller(createAccountUseCase)

export { createAccountContoller }