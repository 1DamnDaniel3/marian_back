import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Favorites = sequelize.define('Favorites', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tour_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'favorites',
    timestamps: false
});

