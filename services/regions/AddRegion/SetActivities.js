import { Activities } from "../../../db/index.js";
import { Op, fn, col, where } from "sequelize";

export class SetActivities {
  async setActivities(activities = []) {
    const result = []

    for (const activityName of activities) {

      const clearName = activityName.trim().toLowerCase();

      const [activity, created] = await Activities.findOrCreate({
        where: {
          [Op.and]: where(fn("LOWER", col("name")), clearName),
        },
        defaults: {
          name: activityName.trim()
        }
      })

      result.push(activity)
    }

    return result;
  }
}

export const setActivities = new SetActivities;
