import CourseService from '../../../services/faculty/courses.service';
const {
      validationResult
} = require('express-validator/check');
const xssFilters = require('xss-filters');
import l from '../../../../common/logger';

export class Controller {

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

            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`

            })
            logger.info(`CourseService.RoomInfo()is called`);


            let output = await CourseService.RoomInfo(userid, userlang);

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


            let userid = req.session.userid;
            let userlang = req.headers.lang;

            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  userid: `${userid}`,
                  userlang: `${userlang}`

            })
            logger.info(`CourseService.ExamInfo()is called`);


            let output = await CourseService.ExamInfo(userid, userlang);

            if (output.result) res.json(output);
            else res.status(404).end();

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`CourseService.CourseInfo()is called`);


            let output = await CourseService.CourseInfo(CourseID);


            if (output.result) res.json(output);
            else res.status(404).end();


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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                  fullname: `${fullname}`,
                  mobile: `${mobile}`,
                  userid: `${userid}`,
                  userlang: `${userlang}`
            })
            logger.info(`AccountService.editProfile()is called`);


            let output = await AccountService.editProfile(fullname, mobile, userid, userlang);

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
            logger.info(`AccountService.editEmail()is called`);


            let output = await AccountService.editEmail(newemail, password, userid, userlang);



            if (output.result) res.json(output);
            else res.status(404).end();

      }





}
export default new Controller();