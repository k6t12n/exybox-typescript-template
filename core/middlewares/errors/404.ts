import {Router, Request, Response, NextFunction} from 'express';
import createError from 'http-errors'

const router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
    
    res.status(404).json({
        status: 404
    });

});

export default router
