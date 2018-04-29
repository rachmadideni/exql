const {
	DEV_DB,
	PROD_DB,
	MYSQL_USER,
	MYSQL_PASSWORD
} = process.env;

module.exports = {
	development:{
		username:MYSQL_USER,
		password:MYSQL_PASSWORD,
		database:DEV_DB,
		dialect:'mysql'
	},
	production:{
		username:MYSQL_USER,
		password:MYSQL_PASSWORD,
		database:PROD_DB,
		dialect:'mysql'
	}
};