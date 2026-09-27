import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface NutrientAttributes {
  id: number;
  name: string;
  category: string;
  unit: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type NutrientCreationAttributes = Optional<NutrientAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class Nutrient extends Model<NutrientAttributes, NutrientCreationAttributes> implements NutrientAttributes {
  public id!: number;
  public name!: string;
  public category!: string;
  public unit!: string;
  public description?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Nutrient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'vitamin',
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'mg',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Nutrient',
    tableName: 'nutrients',
    timestamps: true,
  }
);

export default Nutrient;
