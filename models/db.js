var mongoose = require('mongoose');

const dbpath = "mongodb://<dbuser>:<dbpassword>@ds331558.mlab.com:31558/employeedb";

/**
 * mongodb://<dbuser>:<dbpassword>@ds331558.mlab.com:31558/employeedb
 */

mongoose.connect(dbpath, {useMongoClient: true}, (err) => {
    if(!err) { console.log('MongoDB Conection Succeeded.') }
    else { console.log('Error in DB conncetion :' + err) }
});
mongoose.set('useCreateindex', true);

require('./employee.model');