module.exports = function(app){
    const user = require('../controllers/otp.js');

    // Check Otp
    app.post('/api/otp',user.check);

}