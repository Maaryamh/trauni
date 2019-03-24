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
  .get('/getMyProfile/:AdminID', controller.ProfileInfo);
  
/*
  .post('/edit/password', [
    check('oldpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword').not().isEmpty().isLength({min: 6}).trim().escape(),
    check('newpassword2').not().isEmpty().isLength({min: 6}).trim().escape(),
  ], controller.editPassword)
*/
/*
  .post('/edit/profile', [
    check('fullname').not().isEmpty().trim().escape(),
    check('mobile').not().isEmpty().isMobilePhone('ar-AE').isLength({min: 5}).trim().escape()
  ], controller.editProfile)


  .post('/edit/email', [
    check('newemail').not().isEmpty().isEmail().trim().escape(),
    check('password').not().isEmpty().isEmail().trim().escape(),
  ], controller.editEmail);
*/

//.get('/:id', controller.byId);
//.post('/', controller.create)