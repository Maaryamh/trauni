require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pino = __webpack_require__(19);

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const l = (0, _pino2.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

exports.default = l;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(6);

const sql = __webpack_require__(26);
var util = __webpack_require__(27);

//var mysql = require('mysql');

const pool = sql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "123",
    database: 'tra'
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }
    if (connection) connection.release();
    return;
});

pool.query = util.promisify(pool.query);

exports.default = pool;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("xss-filters");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express-validator/filter");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dotenv = __webpack_require__(10);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(6);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _server2.default().router(_routes2.default).listen(process.env.PORT);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(12);

var path = _interopRequireWildcard(_path);

var _bodyParser = __webpack_require__(13);

var bodyParser = _interopRequireWildcard(_bodyParser);

var _expressSession = __webpack_require__(14);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _http = __webpack_require__(15);

var http = _interopRequireWildcard(_http);

var _os = __webpack_require__(16);

var _os2 = _interopRequireDefault(_os);

var _helmet = __webpack_require__(17);

var _helmet2 = _interopRequireDefault(_helmet);

var _cookieParser = __webpack_require__(18);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

__webpack_require__(6);

var _cors = __webpack_require__(20);

var _cors2 = _interopRequireDefault(_cors);

var _expressSanitizer = __webpack_require__(21);

var _expressSanitizer2 = _interopRequireDefault(_expressSanitizer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);

    app.set('appPath', `${root}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use((0, _cookieParser2.default)(process.env.SESSION_SECRET));
    app.use(_express2.default.static(`${root}/public`));
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.use((0, _helmet2.default)());
    app.use((0, _expressSanitizer2.default)());

    var originsWhitelist = ['http://localhost:3000', 'http://localhost:3001'];

    var corsOptions = {
      origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
      },
      credentials: true
    };

    app.use((0, _cors2.default)(corsOptions));

    app.use((0, _expressSession2.default)({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      httpOnly: true,
      cookie: { secure: false }
    }));

    process.on('unhandledRejection', (reason, p) => {
      console.error(reason, 'Unhandled Rejection at Promise', p);
    });

    var route,
        routes = [];
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = parseInt(process.env.PORT)) {
    const welcome = p => () => _logger2.default.info(`up and running in ${"development" || 'development'} @: ${_os2.default.hostname()} on port: ${p}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
exports.default = ExpressServer;
/* WEBPACK VAR INJECTION */}.call(exports, "server/common"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-sanitizer");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

__webpack_require__(6);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _router = __webpack_require__(23);

var _router2 = _interopRequireDefault(_router);

var _router3 = __webpack_require__(28);

var _router4 = _interopRequireDefault(_router3);

var _router5 = __webpack_require__(31);

var _router6 = _interopRequireDefault(_router5);

var _router7 = __webpack_require__(34);

var _router8 = _interopRequireDefault(_router7);

var _router9 = __webpack_require__(37);

var _router10 = _interopRequireDefault(_router9);

var _router11 = __webpack_require__(40);

var _router12 = _interopRequireDefault(_router11);

var _router13 = __webpack_require__(43);

var _router14 = _interopRequireDefault(_router13);

var _router15 = __webpack_require__(46);

var _router16 = _interopRequireDefault(_router15);

var _router17 = __webpack_require__(49);

var _router18 = _interopRequireDefault(_router17);

var _router19 = __webpack_require__(52);

var _router20 = _interopRequireDefault(_router19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import StudentAccountRouter from './api/controllers/student/account/router';
//import StudentAuthenticationRouter from './api/controllers/student/authentication/router';
//import StudentAlertsRouter from './api/controllers/student/alerts/router';


//import FacultyAccountRouter from './api/controllers/faculty/account/router';
//import FacultyAuthenticationRouter from './api/controllers/faculty/authentication/router';

function routes(app) {

  //app.use('/uni/api/v1/faculty/account', isFaculty  , FacultyAccountRouter);
  app.use('/v1/adminstrator/profile', _router4.default);
  app.use('/v1/adminstrator/courses', _router2.default);
  app.use('/v1/student/courses', _router6.default);
  app.use('/v1/student/profile', _router8.default);
  app.use('/v1/student/book', _router10.default);
  app.use('/v1/student/grades', _router12.default);
  app.use('/v1/faculty/courses', _router14.default);
  app.use('/v1/faculty/book', _router16.default);
  app.use('/v1/faculty/grades', _router18.default);
  app.use('/v1/faculty/profile', _router20.default);

  //app.use('/uni/api/v1/faculty/auth' , FacultyAuthenticationRouter);

  //app.use('/uni/api/v1/student/account', isStudent , StudentAccountRouter);
  //app.use('/uni/api/v1/student/alerts', isStudent , StudentAlertsRouter);
  //app.use('/uni/api/v1/student/auth',  StudentAuthenticationRouter);


  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  // define as the last app.use callback
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
}

function isFaculty(req, res, next) {

  if (req.session.authenticated && req.session.usertype == 'admin') return next();

  let output = {};
  output.result = 'NOT_AUTHORIZED';
  output.data = {};
  res.send(output);
}

function isStudent(req, res, next) {

  if (req.session.authenticated && req.session.usertype == 'admin') return next();

  let output = {};
  output.result = 'NOT_AUTHORIZED';
  output.data = {};
  res.send(output);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(24);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().post('/roomData/:CourseID', _controller2.default.RoomData).post('/courseData/:CourseID', _controller2.default.CourseData);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);
*/
//.get('/courseData/:courseID', controller.CourseData);
//.get('/roomData/:courseID', controller.RoomData);


//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _courses = __webpack_require__(25);

var _courses2 = _interopRequireDefault(_courses);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)

      async CourseData(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let CourseID = req.body.CourseID;
            let CourseName = req.body.CourseName;
            let Credit = req.body.Credit;
            let DepartmentID = req.body.DepartmentID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.CourseData()is called`);

            let output = await _courses2.default.CourseData(CourseID, CourseName, Credit, DepartmentID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async RoomData(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let CourseID = req.body.CourseID;
            let RoomID = req.body.RoomID;
            let NumberOfSeats = req.body.NumberOfSeats;
            let DepartmentID = req.body.DepartmentID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.RoomData()is called`);

            let output = await _courses2.default.RoomData(CourseID, RoomID, NumberOfSeats, DepartmentID);

            if (output.result) res.json(output);else res.status(404).end();
      }

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CoursesService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async CourseData(CourseID, CourseName, Credit, DepartmentID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`INSERT INTO Course(CourseID, CourseName, Credit, DepartmentID) VALUES (${CourseID},"${CourseName}",${Credit},"${DepartmentID}")`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    return output;
  }

  async RoomData(CourseID, RoomID, NumberOfSeats, DepartmentID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`INSERT INTO Room(RoomID, NumberOfSeats, CourseID, DepartmentID) VALUES ("${RoomID}",${NumberOfSeats},${CourseID},"${DepartmentID}")`);
      //let result = await pool.query(`INSERT into Room where (courseID, RoomID, NumberOfSeats, DepartmentID) values  ([${courseID}], [${RoomID}],  [${NumberOfSeats}], [${DepartmentID}]) `);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    return output;
  }

}

exports.default = new CoursesService();

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(29);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getMyProfile/:AdminID', _controller2.default.ProfileInfo);

/*
  .post('/edit/password', [
    check('oldpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword2').not().isEmpty().isLength({min: 6}).trim().escape(),
  ], controller.editPassword)
*/
/*
  .post('/edit/profile', [
    check('fullname').not().isEmpty().trim().escape(),
    check('mobile').not().isEmpty().isMobilePhone('ar-AE').isLength({min: 5}).trim().escape()
  ], controller.editProfile)


  .post('/edit/email', [
    check('newemail').not().isEmpty().isEmail().trim().escape(),
    check('password').not().isEmpty().isEmail().trim().escape(),
  ], controller.editEmail);
*/

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _profile = __webpack_require__(30);

var _profile2 = _interopRequireDefault(_profile);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)

      async ProfileInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let AdminID = req.params.AdminID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`ProfileService.ProfileInfo()is called`);

            let output = await _profile2.default.ProfileInfo(AdminID);

            if (output.result) res.json(output);else res.status(404).end();
      }
      /*
      async ProfileInfo(req, res) {
              const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }
              let userid = req.session.userid;
            let userlang = req.headers.lang;
             const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`
             })
            logger.info(`ProfileService.ProfileInfo()is called`);
              let output = await ProfileService.ProfileInfo(userid, userlang);
             if (output.result) res.json(output);
            else res.status(404).end();
       }*/

      /*
            async editPassword(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let oldpassword = req.sanitize(xssFilters.inHTMLData(req.body.oldpassword));
                  let newpassword = req.sanitize(xssFilters.inHTMLData(req.body.newpassword));
                  let newpassword2 = req.sanitize(xssFilters.inHTMLData(req.body.newpassword2));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AccountService.editPassword()is called`);
      
      
                  let output = await AccountService.editPassword(oldpassword, newpassword, newpassword2, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
            */
      /*
            async editProfile(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let fullname = req.sanitize(xssFilters.inHTMLData(req.body.fullname));
                  let mobile = req.sanitize(xssFilters.inHTMLData(req.body.mobile));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        fullname: `${fullname}`,
                        mobile: `${mobile}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`ProfileService.editProfile()is called`);
      
      
                  let output = await ProfileService.editProfile(fullname, mobile, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
            
      
      
      
            async editEmail(req, res) {
      
      
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let newemail = req.sanitize(xssFilters.inHTMLData(req.body.newemail));
                  let password = req.sanitize(xssFilters.inHTMLData(req.body.password));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        newemail: `${newemail}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
      
                  })
                  logger.info(`ProfileService.editEmail()is called`);
      
      
                  let output = await ProfileService.editEmail(newemail, password, userid, userlang);
      
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

var _crypto = __webpack_require__(7);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;


  async ProfileInfo(AdminID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Adminstrator where AdminID = ${AdminID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  /*
    async editPassword(oldpassword, newpassword, newpassword2, userid, userlang) {
  
      let output = {};
      let result;
  
  
      const pool = await new MYSQLConnection.createPool(MYSQLConfig);
  
      try {
        result = await pool.query(`select * from TABLENAME  `);
        output.result = 'SUCCESS';
        output.data.alerts = result.recordset;
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
      output.result = 'ERROR';
      output.data = {};
  
      return output;
  
    }
  
  */
  /*
  
    async editProfile(fullname, mobile, userid, userlang) {
  
      let output = {};
      let result;
  
  
      const pool = await new MYSQLConnection.createPool(MYSQLConfig);
  
      try {
        result = await pool.query(`select * from TABLENAME  `);
        output.result = 'SUCCESS';
        output.data.alerts = result.recordset;
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
      output.result = 'ERROR';
      output.data = {};
  
      return output;
  
  
    }
  
  
  
  
  
  
    async editEmail(newemail, password, userid, userlang) {
  
     
      let output = {};
      let result;
  
  
      const pool = await new MYSQLConnection.createPool(MYSQLConfig);
  
      try {
        result = await pool.query(`select * from TABLENAME  `);
        output.result = 'SUCCESS';
        output.data.alerts = result.recordset;
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
      output.result = 'ERROR';
      output.data = {};
  
      return output;
  
  
  
    }*/

}

exports.default = new ProfileService();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(32);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getCourseInfo/:CourseID', _controller2.default.CourseInfo).get('/getExamInfo/:StudentID', _controller2.default.ExamInfo).post('/dropCourses/:StudentID', _controller2.default.Dropcourse).post('/addCourses/:StudentID', _controller2.default.Addcourse).get('/getRoomInfo/:CourseID', _controller2.default.RoomInfo);

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _courses = __webpack_require__(33);

var _courses2 = _interopRequireDefault(_courses);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)

      async CourseInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let courseID = req.params.courseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.CourseInfo()is called`);

            let output = await _courses2.default.CourseInfo(courseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async RoomInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let courseID = req.params.courseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.RoomInfo()is called`);

            let output = await _courses2.default.RoomInfo(courseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async ExamInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let courseID = req.params.courseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.ExamInfo()is called`);

            let output = await _courses2.default.ExamInfo(courseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async Dropcourse(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let StudentID = req.body.StudentID;
            let year = req.body.year;
            let term = req.body.term;
            let CourseID = req.body.CourseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.Dropcourse()is called`);

            let output = await _courses2.default.Dropcourse(StudentID, year, term, CourseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async Addcourse(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let StudentID = req.body.StudentID;
            let year = req.body.year;
            let term = req.body.term;
            let CourseID = req.body.CourseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CoursesService.Addcourse()is called`);

            let output = await _courses2.default.Addcourse(StudentID, year, term, CourseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CoursesService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async RoomInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Room`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  async ExamInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Exam`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  async Dropcourse(StudentID, year, term, CourseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`Delete from Semesters where StudentID = ${StudentID} AND CourseID = ${CourseID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  async Addcourse(StudentID, year, term, CourseID) {

    let output = {};
    let result;
    try {
      let result = await _mysql2.default.query(`insert into Semesters (StudentID, year, term, CourseID) VALUES (${StudentID},${year},"${term}",${CourseID})`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  async CourseInfo(StudentID) {

    let output = {};
    let result;

    try {

      let result = await _mysql2.default.query(`select * from Course WHERE courseID = ${StudentID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new CoursesService();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(35);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getMyProfile/:StudentID', _controller2.default.ProfileInfo);

//.get('/getMyProfile/:id' , controller.ProfileInfo
//debug('id', req.params.uid); 
//debug('id', req.query.uid);
// s = res.send(req.params.id);
//s = await pool.query(`select * from student`);


/*
.Router()
.get('/getMyProfile/:id' , controller.ProfileInfo);
/*
 /*
.post('/edit/profile', [
  check('fullname').not().isEmpty().trim().escape(),
  check('mobile').not().isEmpty().isMobilePhone('ar-AE').isLength({min: 5}).trim().escape(),
  check('bio').not().isEmpty().isNumeric().trim().escape(),
],  controller.editProfile)
 .post('/edit/password', [
  check('oldpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
  check('newpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
  check('newpassword2').not().isEmpty().isLength({min: 6}).trim().escape(),
],  controller.editPassword)
 .post('/edit/email', [
  check('newemail').not().isEmpty().isEmail().trim().escape(),
  check('password').not().isEmpty().isLength({min: 6}).trim().escape(),
],  controller.editEmail);
 */
//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _profile = __webpack_require__(36);

var _profile2 = _interopRequireDefault(_profile);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)


      async ProfileInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let StudentID = req.params.StudentID;
            let courseID = req.body.courseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`ProfileService.ProfileInfo()is called`);

            let output = await _profile2.default.ProfileInfo(StudentID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async editProfile(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let fullname = req.sanitize(xssFilters.inHTMLData(req.body.fullname));
                  let mobile = req.sanitize(xssFilters.inHTMLData(req.body.mobile));
                  let bio = req.sanitize(xssFilters.inHTMLData(req.body.bio));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        fullname: `${fullname}`,
                        mobile: `${mobile}`,
                        bio: `${bio}`,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`AccountService.editProfile()is called`);
      
      
                  let output = await AccountService.editProfile(fullname, mobile, bio, userid, workgroupid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
            async editPassword(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let oldpassword = req.sanitize(xssFilters.inHTMLData(req.body.oldpassword));
                  let newpassword = req.sanitize(xssFilters.inHTMLData(req.body.newpassword));
                  let newpassword2 = req.sanitize(xssFilters.inHTMLData(req.body.newpassword2));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`AccountService.editPassword()is called`);
      
                  let output = await AccountService.editPassword(oldpassword, newpassword, newpassword2, userid, workgroupid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
            async editEmail(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let newemail = req.sanitize(xssFilters.inHTMLData(req.body.newemail));
                  let password = req.sanitize(xssFilters.inHTMLData(req.body.password));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        newemail: `${newemail}`,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`AccountService.editEmail()is called`);
      
      
                  let output = await AccountService.editEmail(newemail, password, userid, workgroupid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

var _crypto = __webpack_require__(7);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;


  async ProfileInfo(StudentID) {

    let output = {};
    let result;
    //var StudentID = req.params.StudentID;
    //let output = await ProfileService.ProfileInfo(StudentID);
    //res.send(req.params.id);
    try {
      let result = await _mysql2.default.query(`select * from student WHERE StudentID = ${StudentID} `);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    return output;
  }

  /*
    async editProfile(fullname, mobile, bio, userid, workgroupid, userlang) {
  
      let output = {};
      let result;
  
  
      try {
        let result = await pool.query(`select * from student`);
        output.result = 'SUCCESS';
        output.data = result;
  
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
     // output.result = 'ERROR';
      //output.data = {};
  
      return output;
  
  
    }
  
  
  
    async editPassword(oldpassword, newpassword, newpassword2, userid, workgroupid, userlang) {
  
  
      let output = {};
      let result;
  
  
      try {
        let result = await pool.query(`select * from student`);
        output.result = 'SUCCESS';
        output.data = result;
  
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
     // output.result = 'ERROR';
      //output.data = {};
  
      return output;
  
    }
  
  
    async editEmail(newemail, password, userid, workgroupid, userlang) {
  
  
     
      let output = {};
      let result;
  
  
      try {
        let result = await pool.query(`select * from student`);
        output.result = 'SUCCESS';
        output.data = result;
  
      } catch (err) {
        console.log(err);
        output.result = 'ERROR';
        output.data = {};
  
        return output;
      }
  
     // output.result = 'ERROR';
      //output.data = {};
  
      return output;
  
    }
    */

}

exports.default = new ProfileService();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(38);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);
/*
export default express
  .Router()
  .get('/', controller.getAll)
  */

exports.default = express.Router().get('/getBookInfo/:courseID', _controller2.default.BookInfo);
//.get('/getBookInfo', controller.BookInfo);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);

  */

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _book = __webpack_require__(39);

var _book2 = _interopRequireDefault(_book);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)

      async BookInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let courseID = req.params.courseID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`BookService.BookInfo()is called`);

            let output = await _book2.default.BookInfo(courseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async getAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
      
                  })
                  logger.info(`BookService.getAll()is called`);
      
                  let output = await BookService.getAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
            async acknowledgeAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`BookService.acknowledgeAll()is called`);
      
                  let output = await BookService.acknowledgeAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
            async acknowledgeById(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let messageid = req.sanitize(xssFilters.inHTMLData(req.params.id));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        messageid: `${messageid}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`BookService.acknowledgeById()is called`);
      
                  let output = await BookService.acknowledgeById(messageid, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;


  async BookInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Books WHERE courseID = ${courseID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new BookService();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(41);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getGradeinfo/:StudentID', _controller2.default.GradeInfo);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);

  */

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _grades = __webpack_require__(42);

var _grades2 = _interopRequireDefault(_grades);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)

      async GradeInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let StudentID = req.params.StudentID;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`GradesService.GradeInfo()is called`);

            let output = await _grades2.default.GradeInfo(StudentID);

            if (output.result) res.json(output);else res.status(404).end();
      }
      /*
      async GradeInfo(req, res) {
             const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }
             let userid = req.session.userid;
            let userlang = req.headers.lang;
              const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`
             })
            logger.info(`GradesService.GradeInfo()is called`);
             let output = await GradesService.GradeInfo(userid, userlang);
              if (output.result) res.json(output);
            else res.status(404).end();
       }
      */

      /*
            async acknowledgeAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AlertsService.acknowledgeAll()is called`);
      
                  let output = await AlertsService.acknowledgeAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
            async acknowledgeById(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let messageid = req.sanitize(xssFilters.inHTMLData(req.params.id));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        messageid: `${messageid}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AlertsService.acknowledgeById()is called`);
      
                  let output = await AlertsService.acknowledgeById(messageid, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GradesService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async GradeInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Exam WHERE StudentID = ${StudentID}  `);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new GradesService();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(44);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getCourseInfo/:CourseID', _controller2.default.CourseInfo).get('/getExamInfo/:CourseID', _controller2.default.ExamInfo).get('/getRoomInfo/:CourseID', _controller2.default.RoomInfo);

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _courses = __webpack_require__(45);

var _courses2 = _interopRequireDefault(_courses);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)


      async RoomInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let userid = req.session.userid;
            let userlang = req.headers.lang;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`

            });
            logger.info(`CourseService.RoomInfo()is called`);

            let output = await _courses2.default.RoomInfo(userid, userlang);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async ExamInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let userid = req.session.userid;
            let userlang = req.headers.lang;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`

            });
            logger.info(`CourseService.ExamInfo()is called`);

            let output = await _courses2.default.ExamInfo(userid, userlang);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async CourseInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let CourseID = req.params.CourseID;

            //let courseID = req.body.courseID;


            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`CourseService.CourseInfo()is called`);

            let output = await _courses2.default.CourseInfo(CourseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async editPassword(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let oldpassword = req.sanitize(xssFilters.inHTMLData(req.body.oldpassword));
                  let newpassword = req.sanitize(xssFilters.inHTMLData(req.body.newpassword));
                  let newpassword2 = req.sanitize(xssFilters.inHTMLData(req.body.newpassword2));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AccountService.editPassword()is called`);
      
      
                  let output = await AccountService.editPassword(oldpassword, newpassword, newpassword2, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
            */

      async editProfile(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let fullname = req.sanitize(xssFilters.inHTMLData(req.body.fullname));
            let mobile = req.sanitize(xssFilters.inHTMLData(req.body.mobile));
            let userid = req.session.userid;
            let userlang = req.headers.lang;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  fullname: `${fullname}`,
                  mobile: `${mobile}`,
                  userid: `${userid}`,
                  userlang: `${userlang}`
            });
            logger.info(`AccountService.editProfile()is called`);

            let output = await AccountService.editProfile(fullname, mobile, userid, userlang);

            if (output.result) res.json(output);else res.status(404).end();
      }

      async editEmail(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let newemail = req.sanitize(xssFilters.inHTMLData(req.body.newemail));
            let password = req.sanitize(xssFilters.inHTMLData(req.body.password));
            let userid = req.session.userid;
            let userlang = req.headers.lang;

            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  newemail: `${newemail}`,
                  userid: `${userid}`,
                  userlang: `${userlang}`

            });
            logger.info(`AccountService.editEmail()is called`);

            let output = await AccountService.editEmail(newemail, password, userid, userlang);

            if (output.result) res.json(output);else res.status(404).end();
      }

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CoursesService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async CourseInfo(CourseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Course where CourseID = ${CourseID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

  async ExamInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Exam`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }
  async RoomInfo(courseID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Room`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new CoursesService();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(47);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().post('/bookData/:CourseID', _controller2.default.BookData);

/*
.get('/', controller.getAll)
  .delete('/acknowledge' , controller.acknowledgeAll )
  .delete('/acknowledge/:id',  [
  check('id').isNumeric().trim().escape(),
] , controller.acknowledgeById);
*/

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _book = __webpack_require__(48);

var _book2 = _interopRequireDefault(_book);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)
      async BookData(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let BookID = req.body.BookID;
            let BookName = req.body.BookName;
            let CourseID = req.body.CourseID;

            //let courseID = req.body.courseID;


            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`BookService.BookData()is called`);

            let output = await _book2.default.BookData(BookID, BookName, CourseID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async getAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
      
                  })
                  logger.info(`BookService.getAll()is called`);
      
                  let output = await BookService.getAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
            async acknowledgeAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`BookService.acknowledgeAll()is called`);
      
                  let output = await BookService.acknowledgeAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
            async acknowledgeById(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let messageid = req.sanitize(xssFilters.inHTMLData(req.params.id));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        messageid: `${messageid}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`BookService.acknowledgeById()is called`);
      
                  let output = await BookService.acknowledgeById(messageid, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookService {

  async BookData(BookID, BookName, CourseID) {

    //l.info(`${this.constructor.name}.all()`);
    //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
    //let result1 = await pool.query(`select * from groups`);

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`insert into Books (BookID, BookName, CourseID) values (${BookID}, "${BookName}", ${CourseID})`);
      output.result = 'SUCCESS';
      //(BookID, BookName, CourseID)VALUES (1,'Healthy!',A1)
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new BookService();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(50);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().post('/gradeData/:CourseID', _controller2.default.GradeData);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);

  */

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _grades = __webpack_require__(51);

var _grades2 = _interopRequireDefault(_grades);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)


      async GradeData(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let Name = req.body.Name;
            let CourseID = req.body.CourseID;
            let Grade = req.body.Grade;
            let StudentID = req.body.StudentID;
            let ExamDate = req.body.ExamDate;
            //let courseID = req.body.courseID;


            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`GradesService.GradeData()is called`);

            let output = await _grades2.default.GradeData(Name, CourseID, Grade, StudentID, ExamDate);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async getAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
      
                  })
                  logger.info(`AlertsService.getAll()is called`);
      
                  let output = await AlertsService.getAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
            async acknowledgeAll(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AlertsService.acknowledgeAll()is called`);
      
                  let output = await AlertsService.acknowledgeAll(userid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      
      
            async acknowledgeById(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
      
                  let messageid = req.sanitize(xssFilters.inHTMLData(req.params.id));
                  let userid = req.session.userid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        messageid: `${messageid}`,
                        userid: `${userid}`,
                        userlang: `${userlang}`
                  })
                  logger.info(`AlertsService.acknowledgeById()is called`);
      
                  let output = await AlertsService.acknowledgeById(messageid, userid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GradesService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async GradeData(Name, CourseID, Grade, StudentID, ExamDate) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`insert into Exam (Name, CourseID, Grade, StudentID, ExamDate) VALUES ("${Name}",${CourseID},${Grade},${StudentID},"${ExamDate}")`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }

}

exports.default = new GradesService();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(53);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const {
  check
} = __webpack_require__(1);
const {
  sanitizeBody
} = __webpack_require__(5);

exports.default = express.Router().get('/getMyProfile/:StaffID', _controller2.default.ProfileInfo);

/*
.post('/edit/profile', [
  check('fullname').not().isEmpty().trim().escape(),
  check('mobile').not().isEmpty().isMobilePhone('ar-AE').isLength({min: 5}).trim().escape(),
  check('bio').not().isEmpty().isNumeric().trim().escape(),
],  controller.editProfile)
 .post('/edit/password', [
  check('oldpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
  check('newpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
  check('newpassword2').not().isEmpty().isLength({min: 6}).trim().escape(),
],  controller.editPassword)
 .post('/edit/email', [
  check('newemail').not().isEmpty().isEmail().trim().escape(),
  check('password').not().isEmpty().isLength({min: 6}).trim().escape(),
],  controller.editEmail);
*/

//.get('/:id', controller.byId);
//.post('/', controller.create)

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.Controller = undefined;

var _profile = __webpack_require__(54);

var _profile2 = _interopRequireDefault(_profile);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
      validationResult
} = __webpack_require__(1);
const xssFilters = __webpack_require__(4);
class Controller {

      // to get params  req.sanitize(xssFilters.inHTMLData(req.params.id
      // to get post  req.sanitize(xssFilters.inHTMLData(req.body.id
      // to redirect .location(`/api/v1/examples/${r.id}`)


      async ProfileInfo(req, res) {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                  let output = {};
                  output.result = 'INVALID_INPUT';
                  output.data = errors.array();
                  return res.json(output);
            }

            let StaffID = req.params.StaffID;
            //let courseID = req.body.courseID;


            const logger = _logger2.default.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            });
            logger.info(`ProfileService.ProfileInfo()is called`);

            let output = await _profile2.default.ProfileInfo(StaffID);

            if (output.result) res.json(output);else res.status(404).end();
      }

      /*
            async editProfile(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let fullname = req.sanitize(xssFilters.inHTMLData(req.body.fullname));
                  let mobile = req.sanitize(xssFilters.inHTMLData(req.body.mobile));
                  let bio = req.sanitize(xssFilters.inHTMLData(req.body.bio));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        fullname: `${fullname}`,
                        mobile: `${mobile}`,
                        bio: `${bio}`,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`ProfileService.editProfile()is called`);
      
      
                  let output = await ProfileService.editProfile(fullname, mobile, bio, userid, workgroupid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
            */

      /*
            async editPassword(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let oldpassword = req.sanitize(xssFilters.inHTMLData(req.body.oldpassword));
                  let newpassword = req.sanitize(xssFilters.inHTMLData(req.body.newpassword));
                  let newpassword2 = req.sanitize(xssFilters.inHTMLData(req.body.newpassword2));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`AccountService.editPassword()is called`);
      
                  let output = await AccountService.editPassword(oldpassword, newpassword, newpassword2, userid, workgroupid, userlang);
      
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
            */

      /*
            async editEmail(req, res) {
      
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                        let output = {};
                        output.result = 'INVALID_INPUT';
                        output.data = errors.array();
                        return res.json(output);
                  }
      
                  let newemail = req.sanitize(xssFilters.inHTMLData(req.body.newemail));
                  let password = req.sanitize(xssFilters.inHTMLData(req.body.password));
                  let userid = req.session.userid;
                  let workgroupid = req.session.workgroupid;
                  let userlang = req.headers.lang;
      
                  const logger = l.child({
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        userAgent: req.headers['user-agent'],
                        IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                        newemail: `${newemail}`,
                        userid: `${userid}`,
                        workgroupid: `${workgroupid}`,
                        userlang: `${userlang}`,
                  })
                  logger.info(`ProfileService.editEmail()is called`);
      
      
                  let output = await ProfileService.editEmail(newemail, password, userid, workgroupid, userlang);
      
                  if (output.result) res.json(output);
                  else res.status(404).end();
      
            }
      
      */

}
exports.Controller = Controller;
exports.default = new Controller();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _mysql = __webpack_require__(3);

var _mysql2 = _interopRequireDefault(_mysql);

var _crypto = __webpack_require__(7);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async ProfileInfo(StaffID) {

    let output = {};
    let result;

    try {
      let result = await _mysql2.default.query(`select * from Staff where StaffID = ${StaffID}`);
      output.result = 'SUCCESS';
      output.data = result;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    // output.result = 'ERROR';
    //output.data = {};

    return output;
  }
}

exports.default = new ProfileService();

/***/ })
/******/ ]);
//# sourceMappingURL=main.map