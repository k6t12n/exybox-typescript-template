import {Router, Request, Response, NextFunction} from 'express';
import url from 'url';
import csrf from 'csurf';
import session from 'express-session'
import ConnectSessionSequelize from 'connect-session-sequelize'

import {SECRET_KEY} from '~/core/constants/index'
import sequelizeCore from '~/core/db/sequelize'

const router = Router();

const SequelizeStore = ConnectSessionSequelize(session.Store)
router.use(session({
    secret: SECRET_KEY,
    store: new SequelizeStore({
        db: sequelizeCore
    }),
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production'
    }
}))

export default router;
