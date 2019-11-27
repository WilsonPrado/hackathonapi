'use strict';

let db = [];


module.exports.save = (data) => {
    db.push(data);
}

module.exports.get = () => {
    db.get(data);
}