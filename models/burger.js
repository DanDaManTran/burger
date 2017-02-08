//requiring the different creating for database query
const ORM = require("../config/orm.js");

const burger = function (func, res, para){
	switch (func){
		case "all":
			ORM.selectAll(res);
			break;
		case "insert":
			ORM.insertOne(res, para);
			break;
		case "update":
			ORM.updateOne(res, para);
			break;
	}
};

module.exports = burger;
