import { Regions, Activities } from "../../../db/index.js";

export class GetRegionActivitiesService {
    async getRegion(region_id) {
        const region = await Regions.findByPk(region_id, {
            include: [
                {
                    model: Activities,
                    through: { attributes: [] }, 
                },
            ],
        });

        if (!region) {
            throw new Error('Регион не найден');
        }

        return region.Activities;
    }
}

export const getRegionActivitiesService = new GetRegionActivitiesService;