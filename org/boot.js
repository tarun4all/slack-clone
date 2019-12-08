const fs = require('fs');

const secureGlobal = (name, obj) => {
    Object.defineProperty(global, name, {
      value: obj,
      writable: false
    });
}

const startBoot = () => {
    //utils js
    let utilitiesList = fs.readdirSync(__dirname + '/utilities'), utilities = new Object;
        
    utilitiesList.forEach((util) => {
        let package = require(`${__dirname}/utilities/${util}`);
        utilities[package.name] = package.val;
    });
    secureGlobal('util', utilities);

    //middlewares js
    let middlewaresList = fs.readdirSync(__dirname + '/middleware'), middlewares = new Object;
        
    middlewaresList.forEach((util) => {
        let package = require(`${__dirname}/middleware/${util}`);
        middlewares[package.name] = package.val;
    });
    secureGlobal('middleware', middlewares);

    //initialise db
    const db = require('./db/boot').configureDB();
    secureGlobal('db', db);
}

module.exports = startBoot;