import App from './app'

import * as bodyParser from 'body-parser'

import cors from 'cors';

import ApiController from './api.controller'

import ApiService from './api.service'

import loggerMiddleware from './api.logger.middleware'

const options: cors.CorsOptions = {
    origin: '*'
};

const app = new App({
    host: '0.0.0.0',
    port: 8080,
    controllers: [
        new ApiController(),
    ],
    middleWares: [
        cors(options),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()