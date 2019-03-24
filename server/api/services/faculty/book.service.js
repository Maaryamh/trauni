import l from '../../../common/logger';
import pool from '../../../common/mysql';


class BookService {


       

  async BookData(BookID, BookName,CourseID) {

    //l.info(`${this.constructor.name}.all()`);
    //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
    //let result1 = await pool.query(`select * from groups`);
  
    let output = {};
    let result;


    try {
      let result = await pool.query(`insert into Books (BookID, BookName, CourseID) values (${BookID}, "${BookName}", ${CourseID})`);
      output.result = 'SUCCESS';
      //(BookID, BookName, CourseID)VALUES (1,'Healthy!',A1)
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

export default new BookService();