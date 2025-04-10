import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Activities = sequelize.define('Activities', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
}, {
    tableName: 'activities',
    timestamps: false
});


