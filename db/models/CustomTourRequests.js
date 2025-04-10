import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const CustomTourRequests = sequelize.define('CustomTourRequests', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    comfort_level_id: DataTypes.INTEGER,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    persons_count: DataTypes.INTEGER,
    additional_wishes: DataTypes.TEXT,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'custom_tour_requests',
    timestamps: false
});


