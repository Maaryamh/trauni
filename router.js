import * as express from 'express';
import controller from './controller';
const {
  check
} = require('express-validator/check');
const {
  sanitizeBody
} = require('express-validator/filter');

export default express
  .Router()
  .post('/roomData/:CourseID', controller.RoomData)
  .post('/courseData/:CourseID', controller.CourseData);

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
