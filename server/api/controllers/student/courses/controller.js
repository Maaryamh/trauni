import CoursesService from '../../../services/student/courses.service';
const {
      validationResult
} = require('express-validator/check');
const xssFilters = require('xss-filters');
import l from '../../../../common/logger';

export class Controller {

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.CourseInfo()is called`);


            let output = await CoursesService.CourseInfo(courseID);


            if (output.result) res.json(output);
            else res.status(404).end();

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.RoomInfo()is called`);


            let output = await CoursesService.RoomInfo(courseID);


            if (output.result) res.json(output);
            else res.status(404).end();

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.ExamInfo()is called`);


            let output = await CoursesService.ExamInfo(courseID);


            if (output.result) res.json(output);
            else res.status(404).end();

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.Dropcourse()is called`);


            let output = await CoursesService.Dropcourse(StudentID, year, term, CourseID);


            if (output.result) res.json(output);
            else res.status(404).end();

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
            


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.Addcourse()is called`);


            let output = await CoursesService.Addcourse(StudentID, year, term, CourseID);


            if (output.result) res.json(output);
            else res.status(404).end();

      }




}
export default new Controller();