import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Contacts = sequelize.define('Contacts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    question: DataTypes.TEXT,
}, {
    tableName: 'contacts',
    timestamps: false
});