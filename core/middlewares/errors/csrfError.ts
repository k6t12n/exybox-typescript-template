import {Router, Request, Response, NextFunction} from 'express';

const router = Router()

router.use((err: any, req: Request, res: Response, next: NextFunction) => {

    if (err.code === 'EBADCSRFTOKEN') {
        return res.status(403).end()
    }

    next(err)

})

export default router

