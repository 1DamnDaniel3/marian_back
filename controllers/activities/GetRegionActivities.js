import { getRegionActivitiesService } from "../../services/index.js";

export class RegionActivities{

    async getRegAct(req, res){
        try{

            const {region_id} = req.body;

            const regionActivities = await getRegionActivitiesService.getRegion(region_id)

            if(!regionActivities){
                return res.status(404).json({message: "No such region in DB"})
            }

            return res.status(200).json({regionActivities})

        }catch(error){
            return res.status(500).json({message: error.message})
        }
    }

}

export const regionActivities = new RegionActivities;