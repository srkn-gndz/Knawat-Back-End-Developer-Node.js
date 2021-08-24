
import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from './api.controller.interface'
import ApiService from './api.service'

class ApiController implements IControllerBase {
    public path = '/'
    public router = express.Router()
    public apiService: ApiService = new ApiService();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
        this.router.post('/api/v1/user', this.user)
    }

    index = (req: Request, res: Response) => {
        res.send('Hello world!')
    }

    user =  (req: Request, res: Response) => {
        try {
            this.apiService.user(req as any)
            .then( response => {
                res.send(response)
            })
        } catch (error) {
            res.send(
                {
                    status: 'error',
                    data: {
                        error: error
                    }
                }
            )
        }
    }
}

export default ApiController