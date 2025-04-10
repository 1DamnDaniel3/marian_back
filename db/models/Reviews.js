import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Reviews = sequelize.define('Reviews', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    tour_id: DataTypes.INTEGER,
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    comment: DataTypes.TEXT,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reviews',
    timestamps: false
});

