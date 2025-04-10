import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const TourActivities = sequelize.define('TourActivities', {
    tour_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    activity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'tour_activities',
    timestamps: false
});

