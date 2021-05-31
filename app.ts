import express from 'express';
import path from 'path';
import url from 'url';
import createError from 'http-errors';
import moment from 'moment'

import 'reflect-metadata';
import 'sequelize';
import sequelizeCore from '~/core/db/sequelize'

import csrfError from '~/core/middlewares/errors/csrfError';
import notfoundError from '~/core/middlewares/errors/404';
import otherError from '~/core/middlewares/errors/otherError';

import initialMiddleware from '~/core/middlewares/initial';
import sessionMiddleware from '~/core/middlewares/session';
import csrfProtection from '~/core/middlewares/csrfProtection';
import loggingMiddleware from '~/core/middlewares/logging';

const app: express.Application = express();

app.use(loggingMiddleware);

(async () => {
    await sequelizeCore
        .authenticate()
        .then(() => {
            console.log('Sequelize connected to db.');
        })
        .catch(err => {
            console.log('Error, Sequelize cannot connect to db, err: ', err);
            
        })
        ;
})();

app.locals.moment = moment

// view engine setup
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use(initialMiddleware);

app.use(sessionMiddleware);

app.use(csrfProtection);

import webRoutes from '~/routes/web';
app.use('/', webRoutes);

import adminRoutes from '~/routes/admin';
app.use('/admin', adminRoutes);

import apiRoutes from '~/routes/api';
app.use('/api', apiRoutes);

app.use(notfoundError);

app.use(csrfError);
 
app.use(otherError);

export default app;
