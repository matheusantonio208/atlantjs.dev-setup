require('dotenv/config');
const {
  POSTGRESDB_HOST,
  POSTGRESDB_USER,
  POSTGRESDB_PASS,
  POSTGRESDB_NAME,
  POSTGRESDB_PORT
} = process.env;

module.exports = {
  dialect: 'postgres',
  host: POSTGRESDB_HOST,
  port: POSTGRESDB_PORT,
  username: POSTGRESDB_USER,
  password: POSTGRESDB_PASS,
  database: POSTGRESDB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
