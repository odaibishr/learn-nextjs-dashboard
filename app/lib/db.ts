import postgres from 'postgres';

const globalForPostgres = global as unknown as {
  postgresSqlClient: postgres.Sql | undefined;
};

export const sql =
  globalForPostgres.postgresSqlClient ??
  postgres(process.env.POSTGRES_URL!, {
    ssl: 'require',
    prepare: false,
    max: 5,
    idle_timeout: 10,
    connect_timeout: 15,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPostgres.postgresSqlClient = sql;
}
