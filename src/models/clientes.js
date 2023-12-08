import DataTypes from 'sequelize';
import sequelize from '../config/index';

const Clientes = sequelize.define(
  'clientes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING(450),
      allowNull: true,
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    email: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Clientes;