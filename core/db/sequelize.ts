import fs from 'fs';
import path from 'path';
import {Sequelize} from 'sequelize-typescript';

import {DB_HOST, DB_USER, DB_PASS, DB_NAME} from '~/core/constants'

const sequelizeCore = new Sequelize(
    {
        dialect: 'mysql',
        host: DB_HOST,
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME
    }
);

export default sequelizeCore
