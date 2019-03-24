import l from '../../../common/logger';
import pool from '../../../common/mysql';

import crypto from 'crypto'

class ProfileService {


  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  
  async ProfileInfo(AdminID) {

    
    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from Adminstrator where AdminID = ${AdminID}`);
      output.result = 'SUCCESS';
      output.data = result;

    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

   // output.result = 'ERROR';
    //output.data = {};

    return output;
  }
  


/*
  async editPassword(oldpassword, newpassword, newpassword2, userid, userlang) {

    let output = {};
    let result;


    const pool = await new MYSQLConnection.createPool(MYSQLConfig);

    try {
      result = await pool.query(`select * from TABLENAME  `);
      output.result = 'SUCCESS';
      output.data.alerts = result.recordset;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    output.result = 'ERROR';
    output.data = {};

    return output;

  }

*/
/*

  async editProfile(fullname, mobile, userid, userlang) {

    let output = {};
    let result;


    const pool = await new MYSQLConnection.createPool(MYSQLConfig);

    try {
      result = await pool.query(`select * from TABLENAME  `);
      output.result = 'SUCCESS';
      output.data.alerts = result.recordset;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    output.result = 'ERROR';
    output.data = {};

    return output;


  }






  async editEmail(newemail, password, userid, userlang) {

   
    let output = {};
    let result;


    const pool = await new MYSQLConnection.createPool(MYSQLConfig);

    try {
      result = await pool.query(`select * from TABLENAME  `);
      output.result = 'SUCCESS';
      output.data.alerts = result.recordset;
    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }

    output.result = 'ERROR';
    output.data = {};

    return output;



  }*/





}

export default new ProfileService();