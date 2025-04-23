import { sequelize, RegionSeasons } from "../../../db/index.js";

export class SetRegionSeasons {

    async create(region_id, seasonIDS = []) {

        for (const seasonID of seasonIDS) {

            await RegionSeasons.create({region_id, season_id: seasonID})

        }

    }

}

export const setRegionSeasons = new SetRegionSeasons;