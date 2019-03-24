import l from '../../../common/logger';
import pool from '../../../common/mysql';

import crypto from 'crypto'

class ProfileService {

  //     l.info(`${this.constructor.name}.all()`);
  //const pool = await new MYSQLConnection.createPool(MYSQLConfig)
  //let result1 = await pool.query(`select * from groups`);
  //
  // return result1;

  async ProfileInfo(StaffID) {
    
   
    let output = {};
    let result;


    try {
      let result = await pool.query(`select * from Staff where StaffID = ${StaffID}`);
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

export default new ProfileService();