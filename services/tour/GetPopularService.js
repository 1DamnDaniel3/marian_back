import { sequelize } from '../../db/index.js'

export class GetPopularService {
  async getPopularTours() {
    const [results] = await sequelize.query(`
      SELECT 
          t.*, 
          COUNT(f.user_id) AS favorites_count
      FROM tours t
      LEFT JOIN favorites f ON t.id = f.tour_id
      GROUP BY t.id
      ORDER BY favorites_count DESC
      LIMIT 6
    `)
    return results
  }
}

export const getPopularService = new GetPopularService;
