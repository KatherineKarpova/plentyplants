import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize'; // import Sequelize instance here

class User extends Model {
  public id!: number;
  public emailHash!: string;
  public passwordHash!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emailHash: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // ensure that email hashes are unique
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // sequelize instance
    modelName: 'User',
    tableName: 'users', // name of the table
    timestamps: true,
  }
);

export default User;
