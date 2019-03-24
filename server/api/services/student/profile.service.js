import l from '../../../common/logger';
import pool from '../../../common/mysql';
import crypto from 'crypto'

class ProfileService {


  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;



  async ProfileInfo(StudentID) {
    

    let output = {};
    let result;
    //var StudentID = req.params.StudentID;
    //let output = await ProfileService.ProfileInfo(StudentID);
    //res.send(req.params.id);
    try {
      let result = await pool.query(`select * from student WHERE StudentID = ${StudentID} `);
      output.result = 'SUCCESS';
      output.data = result;

    } catch (err) {
      console.log(err);
      output.result = 'ERROR';
      output.data = {};

      return output;
    }


    return output;


  }

/*
  async editProfile(fullname, mobile, bio, userid, workgroupid, userlang) {

    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from student`);
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



  async editPassword(oldpassword, newpassword, newpassword2, userid, workgroupid, userlang) {


    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from student`);
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


  async editEmail(newemail, password, userid, workgroupid, userlang) {


   
    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from student`);
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
  */







}

export default new ProfileService();