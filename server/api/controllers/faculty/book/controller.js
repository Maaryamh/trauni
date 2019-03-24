import BookService from '../../../services/faculty/book.service';
const {
      validationResult
} = require('express-validator/check');
const xssFilters = require('xss-filters');
import l from '../../../../common/logger';

export class Controller {

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`BookService.BookData()is called`);


            let output = await BookService.BookData(BookID, BookName,CourseID);


            if (output.result) res.json(output);
            else res.status(404).end();

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
export default new Controller();