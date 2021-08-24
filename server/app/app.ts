import express, { Request, Response } from "express";
import { Application } from 'express'

class App {
    public app: Application
    public host: string
    public port: number

    constructor(appInit: { host: string; port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.host = appInit.host
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.assets()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    public listen() {
        this.app.listen(this.port, this.host, () => {
            console.log(`App listening on the http://${this.host}:${this.port}`)
        })
    }
}

export default App