import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Landmarks = sequelize.define('Landmarks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'regions',
            key: 'id'
        },

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'landmarks',
    timestamps: false
});
