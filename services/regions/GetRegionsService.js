import { sequelize, Landmarks, Activities, SeasonPeriods } from "../../db/index.js";


export class GetRegionsService {
    async getRegions(model){
              const regions = await model.findAll({
            include: [{
                model: Landmarks,
            },{
                model: Activities,
            },{
                model: SeasonPeriods,
            }]
        })

        return regions;
    }
}

export const getRegionsService = new GetRegionsService;