import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const ComfortLevels = sequelize.define('ComfortLevels', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['эконом', 'комфорт', 'премиум']]
        }
    }
}, {
    tableName: 'comfort_levels',
    timestamps: false
});

