import { BaseController } from '../base.Controller.js'
import { Tours } from '../../db/index.js'


export class BaseTourController extends BaseController { 
    constructor() {
        super(Tours, 'tour_id')
    }
}

export const baseTourController = new BaseTourController; 