import {Reviews, Tours, Users} from '../../db/index.js'

export class GetAllReviews{

    async getReviews(){

        return await Reviews.findAll({
            include: [{
                model: Users 
            },{ 
                model: Tours
              },
            ]
        })

    }
}

export const getAllReviews = new GetAllReviews;