import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface ColorAttributes {
  id: number;
  name: string;
  hex_code: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type ColorCreationAttributes = Optional<ColorAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class Color extends Model<ColorAttributes, ColorCreationAttributes> implements ColorAttributes {
  public id!: number;
  public name!: string;
  public hex_code!: string;
  public description?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Color.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hex_code: {
      type: DataTypes.STRING(7),
      allowNull: false,
      validate: {
        is: /^#[0-9A-Fa-f]{6}$/,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Color',
    tableName: 'colors',
    timestamps: true,
  }
);

export default Color;
