import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'bd2-site_compras',
    'postgres',
    'murilo',
    {
        host: 'localhost',
        dialect: "postgres"
    }
);

export default sequelize;
