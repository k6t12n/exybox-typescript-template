import {DefaultScope, Scopes, Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt} from "sequelize-typescript";

import sequelizeCore from '~/core/db/sequelize'

@Table({
    tableName: 'users'
})
export default class User extends Model<User> {

    @PrimaryKey
    @Column
    user_id!: number;

    @Column
    name!: string;

    @Column
    age!: number;
  
    @CreatedAt
    @Column
    created_at!: Date;
  
    @UpdatedAt
    @Column
    updated_at!: Date;

    @DeletedAt
    @Column
    deleted_at!: Date;
  
}

sequelizeCore.addModels([User])
