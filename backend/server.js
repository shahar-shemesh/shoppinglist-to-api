const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());


const config = {
    user: 'shoppinglistadmin',
    password: 'qwerty!1',
    server: 'shoppinglist-server.database.windows.net',
    port: 1433, 
    database: 'shoppinglistDB', 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}


console.log("Starting...");
connectAndQuery();

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);
        var resultSet = await poolConnection.request().query(`SELECT * FROM dbo.categories`);

        poolConnection.close();

    } catch (err) {
        console.error(err.message);
    }
}


app.get('/', (req, res) => {
    return res.json("From nodeJS backend side");
});


app.get('/categories', async (req, res) => {
    var poolConnection = await sql.connect(config);

    console.log("Reading rows from the Table...");
    var resultSet = await poolConnection.request().query('SELECT * FROM dbo.categories');
    poolConnection.close();

    return res.json(resultSet.recordset);
});


app.listen(8081, () => {
    console.log('listening');
});