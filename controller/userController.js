const connection = require('../model/connection')

let bool = true;
let resultLength = 0;
let success = false;
let loginEmailCheck = true;
let loginPass = true;
module.exports = {

    // Register Student
    getSignup: (req, res) => {
        // res.render("signup", {})
        res.render("signup", {
            boolValue: bool,
            resultLength: resultLength,
            success: success
        })
    },
    postSignup: (req, res) => {
        // console.log(req.statusCode)
        let email = req.body.email
        let pass = req.body.password
        let cpass = req.body.confirm_password
        var check = "SELECT * FROM users WHERE email = '" + email + "'";
        connection.query(check, (err, result, field) => {
            // console.log(result);
            if (result.length == 0) {
                if (pass == cpass) {
                    var sql = "INSERT INTO users (email, password) VALUES ('" + email + "', '" + pass + "')";
                    // if (count == 0) {
                    connection.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log("1 record inserted");
                    });
                    // }
                    // count = 0;
                    bool = true;
                    resultLength = 0;
                    success = true;
                    res.redirect("/");
                    // res.render("signup", {
                    //     boolValue: true,
                    //     resultLength: 0,
                    //     success: true
                    // })
                } else {
                    bool = false;
                    resultLength = 0;
                    success = false;
                    res.redirect("/");
                    // res.render("signup", {
                    //     boolValue: false,
                    //     resultLength: 0,
                    //     success: false
                    // })
                }
            } else {
                bool = true;
                resultLength = result.length;
                success = false;
                res.redirect("/");
                // res.render("signup", {
                //     resultLength: result.length,
                //     boolValue: true,
                //     success: false
                // })
            }
        })
    },

    // Login Student
    getLogin: (req, res) => {
        res.render("login", { loginEmailCheck: loginEmailCheck, loginPass: loginPass })
    },
    postLogin: (req, res) => {
        let email = req.body.email
        let pass = req.body.password
        let findUser = "SELECT * FROM users WHERE email = '" + email + "'"
        connection.query(findUser, function(err, result, field) {

            // console.log(result[0].password)
            if (result.length == 0) {
                loginEmailCheck = false
                res.redirect("/login")
                    // console.log("email not found")
            } else {
                if (pass == result[0].password) {
                    res.redirect("/dashboard")
                        // loginSuccess = true
                } else {
                    loginEmailCheck = true
                    loginPass = false
                    res.redirect("/login")
                }
            }
        });
    },
    dashboard: (req, res) => {
        res.render("users/dashboard")
    }
}