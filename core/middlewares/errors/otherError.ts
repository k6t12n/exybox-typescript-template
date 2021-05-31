import {Router, Request, Response, NextFunction} from 'express';

const router = Router()

router.use((err: any, req: Request, res: Response, next: NextFunction) => {

    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: process.env.NODE_ENV === 'development' ? err.message : ''
    });

})

export default router

