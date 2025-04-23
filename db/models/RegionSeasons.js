import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const RegionSeasons = sequelize.define('RegionSeasons', {
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'regions',
            key: 'id'
        }
    },
    season_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'season_periods',
            key: 'id'
        }
    }
}, {
    tableName: 'region_seasons',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['region_id', 'season_id']
        }
    ]
});
