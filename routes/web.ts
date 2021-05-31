import {Router, Request, Response, NextFunction} from 'express';
import createError from 'http-errors'

const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    return res.render('web/index');

});

export default router
