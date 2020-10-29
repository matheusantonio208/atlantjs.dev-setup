/* ============================================================================= *
 * Folder for files that retain business rules, separated by context in a        *
 * agregador folder.                                                             *
 *                                                                               *
 * The names of the files follow the following model:                            *
 * [name-entity]-controller.js - Layer of Business Rules                         *
 * [name-entity]-repository.js - Layer of interaction with the database          *
 * [name-entity]-object.js - Layer of entity object                              *
 *                                                                               *
 * OBS: This is the only file that is allowed to make relative reference         *
 * ============================================================================= */

import ExampleRepository from './example-repository';
import { exampleValueObject } from './example-object';

class ExampleController {
  async index(req, res) {
    try {
      const exampleObject = exampleValueObject(req.body);
      const objectFind = await ExampleRepository.getOneExample(exampleObject);

      return res.status(201).json({ success_msg: `Success! Your object is ${objectFind}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}`});
    }
  }

/* ============================== *
 * async show (req, res) {...}    *
 * async store (req, res) {...}   *
 * async update (req, res) {...}  *
 * async delete (req, res) {...}  *
 * ============================== */
 }

 export default new ExampleController();