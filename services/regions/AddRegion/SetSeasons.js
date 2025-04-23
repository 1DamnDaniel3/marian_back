import { SeasonPeriods } from "../../../db/index.js";

export class SetSeasons {
    async createIfNotExists(seasons = []) {
        const result = []

        for(const {start_month, end_month} of seasons){
           const [season, created] = await SeasonPeriods.findOrCreate({
            where: {start_month, end_month},
           });
           result.push(season)
        }
        return result;
    }   
}

export const setSeasons = new SetSeasons;
