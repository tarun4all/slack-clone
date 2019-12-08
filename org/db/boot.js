const connect = require('./connect');
const fs = require('fs');

const configureDB = async () => {
    try {
        let connection = await connect();
        if(connection) console.log(util.color.yellow('DB connection done.'));

        let list = fs.readdirSync(__dirname + '/model'), db = new Object;
        
        list.forEach((model) => {
            let table = require(`${__dirname}/model/${model}`);
            db[table.name] = table.val;
        });

        // db.company.insertMany({name: 'Tarun Bansal', subdomain: 'tarun'}).then(async (companyData) => {
        //     const mongoose = require("mongoose");
        //     const Schema  = mongoose.Schema;
        //     await db.user.insertMany({name: 'Tarun', email: 'tarun@gmail.com', phone: '9650849625', age: 25, gender: 'M', company_id: companyData[0]._id});
        // });

        return db;
    } catch(err) {
        console.log(err);
        return {};
    }
}

module.exports = {
    configureDB
}