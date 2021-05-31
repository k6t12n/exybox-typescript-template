import express, {Router, Request, Response, NextFunction} from 'express';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

const router = Router();

// sass for web/public
router.use(sassMiddleware({
    src: path.join(__dirname, 'resources/scss/web'),
    dest: path.join(__dirname, 'storage/web'),
    includePaths: [path.join(__dirname), 'node_modules'],
    debug: (process.env.NODE_ENV === 'production') ? false : true,
    indentedSyntax: false, // true = .sass and false = .scss
    outputStyle: 'compressed',
    prefix: '/web/resources'
}));

// sass for admin
router.use(sassMiddleware({
	src: path.join(__dirname, 'resources/scss/admin'),
	dest: path.join(__dirname, 'storage/admin'),
	includePaths: [path.join(__dirname), 'node_modules'],
    debug: (process.env.NODE_ENV === 'production') ? false : true,
    indentedSyntax: false, // true = .sass and false = .scss
    outputStyle: 'compressed',
    prefix: '/admin/resources'
}));


export default router;
