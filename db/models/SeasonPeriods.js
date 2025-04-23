import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const SeasonPeriods = sequelize.define('SeasonPeriods', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 12
        }
    },
    end_month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 12
        }
    }
}, {
    tableName: 'season_periods',
    timestamps: false
});
