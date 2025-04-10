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
JWT_SECRET=your_jwt_secret_key
JWT_SECRET_REFRESH=your_jwt_refresh_secret_key
PORT=3001
```