module.exports = (sequelize,DataTypes) => {
	const User = sequelize.define('User',{
		userid:{
			type: DataTypes.INTEGER(11),
			autoIncrement:true,
			primaryKey:true
		},
		usernm:{
			type:DataTypes.STRING,
			unique:true,
			allowNull:true
		},
		passwd:{
			type:DataTypes.STRING,
			allowNull:true
		},
		aktif:{
			type:DataTypes.ENUM('Y','N'),
			defaultValue:'N',
			allowNull:true
		}
	});
	return User;
}