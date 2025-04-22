//Database
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgresql://postgres.lavnlfrfqtfdpmltnzbg:Isaq1234#@aws-0-sa-east-1.pooler.supabase.com:6543/postgres",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
let contador = 0;
//Chalk
const chalk = require("chalk");
const say = console.log;

//STUDYBOX
const Studybox = sequelize.define("Professor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//Sincronizar todas as tabelas com o banco de dados
sequelize
  .sync()
  .then(() => say(chalk.yellow("Todas as tabelas foram criadas com sucesso")))
  .catch((error) => console.error("Erro ao criar tabelas:", error));

//Exportação
module.exports = {
  Studybox,
};
