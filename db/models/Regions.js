import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Regions = sequelize.define('Regions', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
}, {
    tableName: 'regions',
    timestamps: false
});
