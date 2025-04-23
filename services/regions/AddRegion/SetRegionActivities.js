import { where } from "sequelize";
import { sequelize, RegionActivities } from "../../../db/index.js";

export class SetRegionActivities {
  async create(region_id, activity_ids = []) {

    for (const activityID of activity_ids) {
      await RegionActivities.create({ region_id, activity_id: activityID })
    }

  }
}

export const setRegionActivities = new SetRegionActivities();