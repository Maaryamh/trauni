import ProfileService from '../../../services/faculty/profile.service';
const {
      validationResult
} = require('express-validator/check');
const xssFilters = require('xss-filters');
import l from '../../../../common/logger';

export class Controller {

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


            const logger = l.child({
                  url: req.protocol + '://' + req.get('host') + req.originalUrl,
                  userAgent: req.headers['user-agent'],
                  IPAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
            })
            logger.info(`ProfileService.ProfileInfo()is called`);


            let output = await ProfileService.ProfileInfo(StaffID);


            if (output.result) res.json(output);
            else res.status(404).end();

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
export default new Controller();