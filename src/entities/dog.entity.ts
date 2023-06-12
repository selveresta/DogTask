import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName:"dogs"})
export class Dog extends Model<Dog> {

  @Column({type:DataType.STRING, allowNull:false})
  name: string;

  @Column({type:DataType.STRING, allowNull:false})
  color: string;

  @Column({type:DataType.INTEGER, allowNull:false})
  tailLength: number;

  @Column({type:DataType.INTEGER, allowNull:false})
  weight: number;
}