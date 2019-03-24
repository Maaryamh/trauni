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
  .get('/getMyProfile/:StudentID', controller.ProfileInfo);

  //.get('/getMyProfile/:id' , controller.ProfileInfo
    //debug('id', req.params.uid); 
    //debug('id', req.query.uid);
    // s = res.send(req.params.id);
     //s = await pool.query(`select * from student`);
  
  

  /*
  .Router()
  .get('/getMyProfile/:id' , controller.ProfileInfo);
  /*

  /*
  .post('/edit/profile', [
    check('fullname').not().isEmpty().trim().escape(),
    check('mobile').not().isEmpty().isMobilePhone('ar-AE').isLength({min: 5}).trim().escape(),
    check('bio').not().isEmpty().isNumeric().trim().escape(),
  ],  controller.editProfile)

  .post('/edit/password', [
    check('oldpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword2').not().isEmpty().isLength({min: 6}).trim().escape(),
  ],  controller.editPassword)

  .post('/edit/email', [
    check('newemail').not().isEmpty().isEmail().trim().escape(),
    check('password').not().isEmpty().isLength({min: 6}).trim().escape(),
  ],  controller.editEmail);

  */
  //.get('/:id', controller.byId);
  //.post('/', controller.create)


