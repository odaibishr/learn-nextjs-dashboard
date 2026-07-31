const postgres = require('postgres');
const sql = postgres('postgres://postgres:CauVfMd1gtkQV8r7@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require');
sql`SELECT 1`.then(console.log).catch(console.error).finally(() => process.exit(0));
