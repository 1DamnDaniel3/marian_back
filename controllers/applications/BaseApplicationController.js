import { BaseController } from '../base.Controller.js'
import { Applications } from '../../db/index.js'


export class BaseApplicationController extends BaseController { 
    constructor() {
        super(Applications, 'id')
    }
}
export const baseApplicationController = new BaseApplicationController;

