import { BaseController } from '../base.Controller.js'
import { TourActivities } from '../../db/index.js'


export class BaseTourActivitiesController extends BaseController { 
    constructor() {
        super(TourActivities, 'id');
    }

    async create(req, res) {
        try {
            const connections = req.body; 

            if (!Array.isArray(connections)) {
                return res.status(400).json({ 
                    message: 'Нужен массив объектов {tour_id, activity_id}' 
                });
            }

            const createdItems = await this.model.bulkCreate(connections);
            
            res.status(201).json(createdItems); // Возвращаем созданные связи
            
        } catch (error) {
            res.status(500).json({ 
                message: 'Ошибка при создании связей: ' + error.message 
            });
        }
    }

    async update(req, res) {
        const transaction = await this.model.sequelize.transaction();
        try {
            const { tour_id } = req.params;
            const newConnections = req.body;

    
            // Автоматически подставляем tour_id из URL, если не указан в теле
            const normalizedConnections = newConnections.map(item => ({
                tour_id: item.tour_id || tour_id,
                activity_id: item.activity_id
            }));
    
            // Проверка на соответствие tour_id (теперь необязательна)
            const invalidItems = normalizedConnections.filter(item => item.tour_id != tour_id);
            if (invalidItems.length > 0) {
                await transaction.rollback();
                return res.status(400).json({
                    message: 'Обнаружены связи для другого тура'
                });
            }
    
            // Удаляем старые связи
            await this.model.destroy({
                where: { tour_id: tour_id },
                transaction
            });
    
            // Создаём новые
            const createdItems = await this.model.bulkCreate(normalizedConnections, {
                transaction,
                returning: true
            });
    
            await transaction.commit();
            res.status(200).json(createdItems);
    
        } catch (error) {
            await transaction.rollback();
            res.status(500).json({ 
                message: 'Ошибка при обновлении связей: ' + error.message 
            });
        }
    }
}

export const baseTourActivitiesController = new BaseTourActivitiesController();