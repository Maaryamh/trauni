import CoursesService from '../../../services/adminstrator/courses.service';
const {
      validationResult
} = require('express-validator/check');
const xssFilters = require('xss-filters');
import l from '../../../../common/logger';

export class Controller {

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

            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.CourseData()is called`);


            let output = await CoursesService.CourseData(CourseID, CourseName, Credit, DepartmentID);


            if (output.result) res.json(output);
            else res.status(404).end();

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

            


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CoursesService.RoomData()is called`);


            let output = await CoursesService.RoomData(CourseID, RoomID, NumberOfSeats, DepartmentID);


            if (output.result) res.json(output);
            else res.status(404).end();

      }
      




}
export default new Controller();