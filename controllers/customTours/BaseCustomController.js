import { BaseController } from '../base.Controller.js'
import { CustomTourRequests } from '../../db/index.js'


export class BaseCustomController extends BaseController {
    constructor() {
        super(CustomTourRequests, 'id')
    }


    
}

export const baseCustomController = new BaseCustomController; 