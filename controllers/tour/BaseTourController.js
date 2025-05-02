import { BaseController } from '../base.Controller.js'
import { Regions } from '../../db/index.js'
import { Tours } from '../../db/index.js'


export class BaseTourController extends BaseController {
    constructor() {
        super(Tours, 'tour_id')
    }

    // Переопределяем метод getAll
    async getAll(req, res) {
        try {
            const items = await this.model.findAll({
                include: [
                    {
                        model: Regions,
                        attributes: ['name'], 
                    },
                ],
            })
            res.json(items)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export const baseTourController = new BaseTourController; 