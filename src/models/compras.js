import { DataTypes } from 'sequelize';
import sequelize from '../config/index';
import Clientes from './clientes';

const Compras = sequelize.define(
    'compras',
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        produto: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        data: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        idCliente: {
            field: 'id_cliente',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
);

Compras.belongsTo(Clientes, { foreignKey: 'idCliente', targetKey: 'id' });

export default Compras;
