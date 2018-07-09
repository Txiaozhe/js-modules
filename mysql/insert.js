const mysql = require('./index');

mysql.query('INSERT INTO ?? ( ?? ) VALUES (?) ON DUPLICATE KEY UPDATE name = ?', [
    'user', [
        'id', 'name', 'pass'
    ], [
        2, 'uuu1', ''
    ], ...[111, 'uuu1', '3']
], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});

// let DUPLICATE_UPDATE_SQL = 'edwdwedwe1,fwrfe,erfre'
// if (DUPLICATE_UPDATE_SQL[DUPLICATE_UPDATE_SQL.length - 1] === ',') {
//     DUPLICATE_UPDATE_SQL = DUPLICATE_UPDATE_SQL.slice(0, DUPLICATE_UPDATE_SQL.length - 1)
// }
// console.log(DUPLICATE_UPDATE_SQL)