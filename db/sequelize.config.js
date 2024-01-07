import { Sequelize } from "sequelize";

const dbPath = "./db/mhw.db";

const sequelizeConfig = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

export default sequelizeConfig;
