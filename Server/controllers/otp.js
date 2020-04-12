var moment = require('moment');

// Check Otp.
exports.check = (req, res) => {
    var data = req.body;

    try {
        let otp = data.otp
        console.log('hiii',data ,'+',otp)
            // usersRef.doc(userRef.id).get().then((user) => {
                // console.log(user)
                // if (user.exists) {
                //     console.log("User Saved with ID: ", userRef.id);
                //     res.json(user.data());
                // } else {
                //     res.status(404).send({
                //         message: "User not found with Id: " + req.params.uid
                //     });
                // }
            // })
        }
        catch (error) {
            console.error("Error : ", error);
            res.status(500).send({
                "message":"error occurred .\nError:"+error
            });
        };
};
