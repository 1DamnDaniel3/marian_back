# marian_back

THE DEVELOPMENT MODE RUN WITH "npm run dev"

IN db/config SHOULD BE FILE database.js wigh next info:
```
export default {
    username: 'postgres',
    password: 'YOUR_PASSWORD',
    database: 'YOUR_DB_NAME',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false, 
};
```
IN .env SHOULD BE NEXT CONSTS: 
```
JWT_SECRET=MasterMarian
JWT_EXPIRES_IN= 1h
JWT_SECRET_REFRESH=MasterMarian
PORT=3001
```