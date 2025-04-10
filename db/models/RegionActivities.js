import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const RegionActivities = sequelize.define('RegionActivities', {
    region_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    activity_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'region_activities',
    timestamps: false
});


