import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import session from 'express-session';
import * as http from 'http';
import os from 'os';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import l from './logger';
import './env';
import cors from "cors";
import expressSanitizer from 'express-sanitizer';

const app = new Express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.use(helmet());
    app.use(expressSanitizer());


    var originsWhitelist = [
      'http://localhost:3000',
      'http://localhost:3001'
    ];

    var corsOptions = {
      origin: function(origin, callback){
            var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
            callback(null, isWhitelisted);
      },
      credentials:true
    }


    app.use(cors(corsOptions));


    app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      httpOnly: true,
      cookie: { secure: false }
    }));


    process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p); });

    var route, routes = [];



  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = parseInt(process.env.PORT) ) {
    const welcome = p => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
