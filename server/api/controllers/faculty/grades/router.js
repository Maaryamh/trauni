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
  .post('/gradeData/:CourseID', controller.GradeData);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);

  */
  
  //.get('/:id', controller.byId);
  //.post('/', controller.create)
