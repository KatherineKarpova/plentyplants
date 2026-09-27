import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Food from './food.model';
import Nutrient from './nutrient.model';

export interface FoodNutrientAttributes {
  id: number;
  food_id: number;
  nutrient_id: number;
  estimated_amount?: number;
  source_note?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type FoodNutrientCreationAttributes = Optional<FoodNutrientAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class FoodNutrient extends Model<FoodNutrientAttributes, FoodNutrientCreationAttributes> implements FoodNutrientAttributes {
  public id!: number;
  public food_id!: number;
  public nutrient_id!: number;
  public estimated_amount?: number;
  public source_note?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FoodNutrient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Food,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    nutrient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Nutrient,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    estimated_amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    source_note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'FoodNutrient',
    tableName: 'food_nutrients',
    timestamps: true,
  }
);

export default FoodNutrient;
