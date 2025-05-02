import { BaseController } from '../base.Controller.js'
import { Users } from '../../db/index.js'


export class BaseUserController extends BaseController { 
    constructor() {
        super(Users, 'id')
    }
}

