import { BaseController } from '../base.Controller.js'
import { Users } from '../../db/index.js'


export class BaseUserController extends BaseController { // inherit from the base controller to make effective routes
    constructor() {
        super(Users, 'user_id')
    }
}

