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
  .get('/getCourseInfo/:CourseID', controller.CourseInfo)
  .get('/getExamInfo/:StudentID', controller.ExamInfo)
  .post('/dropCourses/:StudentID', controller.Dropcourse)
  .post('/addCourses/:StudentID', controller.Addcourse)
  .get('/getRoomInfo/:CourseID', controller.RoomInfo);


  
  
  //.get('/:id', controller.byId);
  //.post('/', controller.create)
