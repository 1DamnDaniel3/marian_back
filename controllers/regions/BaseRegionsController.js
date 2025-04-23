import { BaseController } from '../base.Controller.js'
import { getRegionsService } from '../../services/index.js'
import { Regions } from '../../db/index.js';


export class BaseRegionsController extends BaseController { 
    constructor() {
        super(Regions, 'region_id')
    }

    async getAll(req, res){
        try{
            const regions = await getRegionsService.getRegions(Regions);
            res.status(200).json({regions})
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }

}

export const baseRegionsController = new BaseRegionsController; 