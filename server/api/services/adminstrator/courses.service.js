import l from '../../../common/logger';
import pool from '../../../common/mysql';


class CoursesService {


  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async CourseData(CourseID, CourseName, Credit, DepartmentID) {

    let output = {};
    let result;

    try {
      let result = await pool.query(`INSERT INTO Course(CourseID, CourseName, Credit, DepartmentID) VALUES (${CourseID},"${CourseName}",${Credit},"${DepartmentID}")`);
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

  async RoomData(CourseID, RoomID, NumberOfSeats, DepartmentID) {

    let output = {};
    let result;

    try {
      let result = await pool.query(`INSERT INTO Room(RoomID, NumberOfSeats, CourseID, DepartmentID) VALUES ("${RoomID}",${NumberOfSeats},${CourseID},"${DepartmentID}")`);
      //let result = await pool.query(`INSERT into Room where (courseID, RoomID, NumberOfSeats, DepartmentID) values  ([${courseID}], [${RoomID}],  [${NumberOfSeats}], [${DepartmentID}]) `);
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


}

export default new CoursesService();