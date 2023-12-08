import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'trabalho_db2',
    'postgres',
    'unochapeco',
    {
        host: 'localhost',
        dialect: "postgres"
    }
);

export default sequelize;
