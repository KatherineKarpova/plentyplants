import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Color from './color.model';

export interface FoodAttributes {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
  is_prebiotic: boolean;
  color_id: number;
  estimated_portion_hint?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type FoodCreationAttributes = Optional<FoodAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class Food extends Model<FoodAttributes, FoodCreationAttributes> implements FoodAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public image_url?: string;
  public is_prebiotic!: boolean;
  public color_id!: number;
  public estimated_portion_hint?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Food.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_prebiotic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Color,
        key: 'id',
      },
      onDelete: 'SET NULL',
    },
    estimated_portion_hint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Food',
    tableName: 'foods',
    timestamps: true,
  }
);

export default Food;
