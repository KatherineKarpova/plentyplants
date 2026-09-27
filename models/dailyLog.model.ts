import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import User from './user.model';
import Food from './food.model';

export interface DailyLogAttributes {
  id: number;
  user_id: number;
  food_id: number;
  logged_at: Date;
  meal_type: string;
  notes?: string;
  color_score?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type DailyLogCreationAttributes = Optional<DailyLogAttributes, 'id' | 'createdAt' | 'updatedAt'>;

class DailyLog extends Model<DailyLogAttributes, DailyLogCreationAttributes> implements DailyLogAttributes {
  public id!: number;
  public user_id!: number;
  public food_id!: number;
  public logged_at!: Date;
  public meal_type!: string;
  public notes?: string;
  public color_score?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DailyLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',
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
    logged_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'snack',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    color_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'DailyLog',
    tableName: 'daily_logs',
    timestamps: true,
  }
);

export default DailyLog;
