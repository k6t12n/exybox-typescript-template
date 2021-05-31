import express from 'express'
import createError from 'http-errors'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    return res.json({
        status: 200,
        message: 'api routes'
    })

});

import usersController from '~/app/api/users/index'
router.use('/users', usersController)

export default router
