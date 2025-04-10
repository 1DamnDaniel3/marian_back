import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const CustomTourActivities = sequelize.define('CustomTourActivities', {
    request_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    activity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'custom_tour_activities',
    timestamps: false
});

