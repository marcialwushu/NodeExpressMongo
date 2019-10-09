const mongoose = require('mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds331558.mlab.com:31558/employeedb', {userNewUrlParse: true}, (err) => {
    if(!err) { console.log('MongoDB Conection Succeeded.') }
    else { console.log('Error in DB conncetion :' + err) }
});

require('./employee.model');