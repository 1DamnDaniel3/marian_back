import { BaseController } from '../base.Controller.js'
import { setSeasons, setActivities, setLandmarks, setRegionActivities, setRegionSeasons, SetSeasons } from '../../services/index.js';
import { RegionActivities, Regions } from '../../db/index.js';




export class AddRegionsController extends BaseController {
    constructor() {
        super(Regions, 'region_id')
    }

    async create(req, res) {
        try {
            const {
                name,
                img_url,
                seasons = [],
                activity_names = [],
                landmarks = []
            } = req.body;
            
            const activity_ids = [];
            const season_ids = [];
            //set region
            const region = await Regions.create({name, img_url});
            //set seasons
            const season = await setSeasons.createIfNotExists(seasons)
            // set region_seasons
            for(const seasonID of season){
                season_ids.push(seasonID.id)
            }
            const region_seasons = await setRegionSeasons.create(region.id, season_ids)

            //set activities
            const activities = await setActivities.setActivities(activity_names)
            //set region_activities
            for( const actId of activities){
                activity_ids.push(actId.id)
            }

            const region_activities = await setRegionActivities.create(region.id, activity_ids)

            //set region_landmarks
            const region_landmarks = await setLandmarks.setLandmarks(region.id, landmarks) 



            res.status(201).json({ message: 'Регион успешно добавлен', region, season, activities, region_landmarks })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}

export const addRegionsController = new AddRegionsController; 