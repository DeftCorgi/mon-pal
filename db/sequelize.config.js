import { Sequelize } from "sequelize";

const dbPath = "./db/mhw.db";

const sequelizeConfig = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: (log) => {
    console.log(log); // Log the Sequelize query and other information
  },
});

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelizeConfig;
