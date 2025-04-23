import { Landmarks } from "../../../db/index.js";
import { Op, fn, col, where } from "sequelize";

export class SetLandmarks {
  async setLandmarks(region_id, landmarks = []) {

    const result = [];


    for (const {name: landmarkName, description} of landmarks){

      
      const clearName = landmarkName.trim().toLowerCase();
      
      const [landmark, created] = await Landmarks.findOrCreate({
        where: {
          region_id: region_id,
          [Op.and]: where(fn("LOWER", col("name")), clearName),
        },
        defaults: {
          region_id,
          name: clearName,
          description,
        },
      });

      result.push({
        name: landmark.name,
        description: landmark.description,
        created,
      });
    }

    return result;


  }
}

export const setLandmarks = new SetLandmarks();
