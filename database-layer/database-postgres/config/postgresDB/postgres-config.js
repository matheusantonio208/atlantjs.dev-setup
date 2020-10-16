require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRESDB_HOST,
  port: '5432',
  username: process.env.POSTGRESDB_USER,
  password: process.env.POSTGRESDB_PASS,
  database: process.env.POSTGRESDB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
