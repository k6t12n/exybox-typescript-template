import express, {Router, Request, Response, NextFunction} from 'express';
import path from 'path';
import url from 'url';
import sassMiddleware from 'node-sass-middleware';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';


const router = Router();

router.use(helmet())

router.use(express.json())
router.use(express.urlencoded({ extended: false }))
router.use(cookieParser())

// pass current url to views
router.use((req: Request, res: Response, next: NextFunction) => {

    res.locals.APP_NAME = process.env.APP_NAME
	
    var full_url = (req.app.get('env')==='production'?'https':'http') + '://' + req.get('host');

    res.locals.current_url = (path : string) => {
		return url.resolve(full_url, path);
	}

    next();
    
});

export default router;
