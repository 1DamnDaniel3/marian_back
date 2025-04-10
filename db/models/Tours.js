import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Tours = sequelize.define('Tours', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2),
    region_id: DataTypes.INTEGER,
    is_ready: DataTypes.BOOLEAN,
    comfort_level_id: DataTypes.INTEGER
}, {
    tableName: 'tours',
    timestamps: false
});


