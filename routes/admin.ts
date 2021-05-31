import express from 'express'
import createError from 'http-errors'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    return res.json({
        status: 200,
        message: 'private routes'
    })

});

export default router
