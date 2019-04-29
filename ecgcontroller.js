var ecg = require('./ecgModuel');


var getfunction =  function (req, res) {
    console.log('entered')
    ecg.find(function (err, ecg) {
        if (err) {

            res.status(500);
            res.send("Internal server error");

        }
        else {
            res.send(ecg)
            
        }
    });
};
module.exports = {
    get: getfunction
};
