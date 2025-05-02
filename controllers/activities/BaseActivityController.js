import { BaseController } from '../base.Controller.js'
import { Activities } from '../../db/index.js';


export class BaseActivityController extends BaseController { 
    constructor() {
        super(Activities, 'id')
    }

}

export const baseActivityController = new BaseActivityController; 