const connection = require('../model/connection')

module.exports = {
    dashboard: (req, res) => {
        let sql = "SELECT * FROM users"
        connection.query(sql, (err, result) => {
            // console.log(result.length)
            res.render('admin/dashboard', { result: result })
        })
    },
    exam: (req, res) => {
        res.render('admin/exam')
    }
}