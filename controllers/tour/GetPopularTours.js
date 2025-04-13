import { GetPopularService, getPopularService } from "../../services/index.js";

export class GetPopularTours {
    async getPopular(req, res){
        try {
            const popularTours = await getPopularService.getPopularTours();
            return res.status(200).json(popularTours)
        } 
        catch (error) {
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
    
} 

export const getPopularTours = new GetPopularTours;