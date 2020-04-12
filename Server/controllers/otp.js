var moment = require('moment');

// Check Otp.
exports.check = (req, res) => {
    var data = req.body;

    try {
        let otp = data.otp
        let currentDay = moment().format('E')
        let currentHour = moment().format('HH')
        let checkOTP = 0 + currentDay + currentHour
        console.log(otp,'-----',checkOTP)
            if(checkOTP === otp) {
                return res.json('true')
            }
            res.json('false')
            
        }
        catch (error) {
            console.error("Error : ", error);
            res.status(500).send({
                "message":"error occurred .\nError:"+error
            });
        };
};
