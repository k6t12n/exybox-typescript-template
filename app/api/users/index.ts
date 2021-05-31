import {Router, NextFunction, Request, Response} from "express";

import UserModel from '~/app/api/users/models/User.model'

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {

    try {
        return res.json({
            status: 200,
            data: await UserModel.findAll()
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Internal server error.'
        })
    }

})

router.get('/:user_id', async (req: Request, res: Response, next: NextFunction) => {

    return res.json({
        status: 200,
        user_id: await UserModel.findOne({where: {user_id: req.params.user_id}})
    })

})

export default router
