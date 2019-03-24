import * as express from 'express';
import controller from './controller';
const {
  check
} = require('express-validator/check');
const {
  sanitizeBody
} = require('express-validator/filter');
/*
export default express
  .Router()
  .get('/', controller.getAll)
  */

  export default express
  .Router()
  .get('/getBookInfo/:courseID', controller.BookInfo);
  //.get('/getBookInfo', controller.BookInfo);

/*
  .delete('/acknowledge' , controller.acknowledgeAll )


  .delete('/acknowledge/:id',  [
    check('id').isNumeric().trim().escape(),
  ] , controller.acknowledgeById);

  */
  
  //.get('/:id', controller.byId);
  //.post('/', controller.create)
