const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bjinglloozgwsw6xk2qc-mysql.services.clever-cloud.com',
    user: 'uleilwpzxg03vbiv',
    password: '64Kyo9MODitodMztTUWJ',
    database: 'bjinglloozgwsw6xk2qc',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);

    // Inserción de datos
    const name = 'John Doe';
    const query = 'INSERT INTO datos (name) VALUES (?)';

    connection.query(query, [name], (error, results, fields) => {
        if (error) {
            console.error('Error inserting data: ' + error.stack);
            return;
        }

        console.log('New record created successfully');
    });

    connection.end();
});
