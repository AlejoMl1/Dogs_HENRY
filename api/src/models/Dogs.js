const { DataTypes } = require("sequelize");

module.exports = function (sequelize){
  return sequelize.define("dogs", {
    id: { 
        type: DataTypes.UUID, 
        // defaultValue: DataTypes.UUIDV4, 
        allowNull:false,
        primaryKey: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false, unique: true
     },
    height: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    weight: { 
        type: DataTypes.INTEGER, 
        allowNull: false
     },
    life_span: { 
        type: DataTypes.INTEGER 
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
     {
      timestamps: false,
      freezeTableName: true
    }
  )};
