import { BaseController } from '../base.Controller.js'
import { Contacts } from '../../db/index.js'


export class BaseContactsController extends BaseController { 
    constructor() {
        super(Contacts, 'id')
    }
}

export const baseContactsController = new BaseContactsController;

