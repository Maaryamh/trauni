import l from '../../../common/logger';
import pool from '../../../common/mysql';


class GradesService {


  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async GradeData(Name,CourseID,Grade, StudentID,ExamDate) {

    let output = {};
    let result;


    try {
      let result = await pool.query(`insert into Exam (Name, CourseID, Grade, StudentID, ExamDate) VALUES ("${Name}",${CourseID},${Grade},${StudentID},"${ExamDate}")`);
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

export default new GradesService();