import {Router, Request, Response, NextFunction} from 'express';
import url from 'url';
import csrf from 'csurf';

const router = Router();

const csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);
router.use((req: Request, res: Response, next: NextFunction) => {

    res.locals.custom_csrf = req.csrfToken();

    next();

});

export default router;
