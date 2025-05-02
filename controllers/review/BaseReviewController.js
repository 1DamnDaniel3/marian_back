import { BaseController } from '../base.Controller.js'
import { Reviews } from '../../db/index.js'
import { getAllReviews } from '../../services/index.js'


export class BaseReviewController extends BaseController { 
    constructor() {
        super(Reviews, 'id')
    }

    async getAll(req, res){

        try{

            const reviews = await getAllReviews.getReviews();
            if(!reviews){
                return res.status(404).json({message: "Cannot find reviews"})
            }
            return res.status(200).json({reviews})

        }catch(error){
            res.status(500).json({message: "Internal server error", error: error.message})
        }


    }
}

export const baseReviewController = new BaseReviewController;