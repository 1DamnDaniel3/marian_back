import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Applications = sequelize.define('Applications', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    tour_id: DataTypes.INTEGER,
    travel_date: DataTypes.DATEONLY,
    persons_count: DataTypes.INTEGER,
    wishes: DataTypes.TEXT,
    payment_method: DataTypes.STRING,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'applications',
    timestamps: false
});


