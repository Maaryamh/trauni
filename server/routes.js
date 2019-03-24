import './common/env';
import l from './common/logger';


//import FacultyAccountRouter from './api/controllers/faculty/account/router';
//import FacultyAuthenticationRouter from './api/controllers/faculty/authentication/router';

import AdminstratorCourserRouter from './api/controllers/adminstrator/courses/router';
import AdminstratorProfileRouter from './api/controllers/adminstrator/profile/router';
import StudentCoursesRouter from './api/controllers/student/courses/router';
import StudentProfileRouter from './api/controllers/student/profile/router';
import StudentBookRouter from './api/controllers/student/book/router';
import StudentGradesRouter from './api/controllers/student/grades/router';
import FacultyCoursesRouter from './api/controllers/faculty/courses/router';
import FacultyBookRouter from './api/controllers/faculty/book/router';
import FacultyGradesRouter from './api/controllers/faculty/grades/router';
import FacultyProfileRouter from './api/controllers/faculty/profile/router';

//import StudentAccountRouter from './api/controllers/student/account/router';
//import StudentAuthenticationRouter from './api/controllers/student/authentication/router';
//import StudentAlertsRouter from './api/controllers/student/alerts/router';


export default function routes(app) {

  //app.use('/uni/api/v1/faculty/account', isFaculty  , FacultyAccountRouter);
  app.use('/v1/adminstrator/profile' , AdminstratorProfileRouter);
  app.use('/v1/adminstrator/courses' , AdminstratorCourserRouter);
  app.use('/v1/student/courses' , StudentCoursesRouter);
  app.use('/v1/student/profile' , StudentProfileRouter);
  app.use('/v1/student/book' , StudentBookRouter);
  app.use('/v1/student/grades' , StudentGradesRouter);
  app.use('/v1/faculty/courses' , FacultyCoursesRouter);
  app.use('/v1/faculty/book' , FacultyBookRouter);
  app.use('/v1/faculty/grades' , FacultyGradesRouter);
  app.use('/v1/faculty/profile' , FacultyProfileRouter);



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

  if (req.session.authenticated && req.session.usertype == 'admin')
      return next();

  let output = {};
  output.result = 'NOT_AUTHORIZED';
  output.data = {};
  res.send(output);
}


function isStudent(req, res, next) {

  if (req.session.authenticated && req.session.usertype == 'admin')
      return next();

  let output = {};
  output.result = 'NOT_AUTHORIZED';
  output.data = {};
  res.send(output);
}



