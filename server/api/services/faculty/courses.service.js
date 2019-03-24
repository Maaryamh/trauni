import l from '../../../common/logger';
import pool from '../../../common/mysql';


class CoursesService {


  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async CourseInfo(CourseID) {

    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from Course where CourseID = ${CourseID}`);
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

  async ExamInfo(courseID) {

    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from Exam`);
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
  async RoomInfo(courseID) {

    
    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from Room`);
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


}

export default new CoursesService();