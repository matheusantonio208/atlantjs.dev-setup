/* ============================================================================= *
 * Folder for files that retain business rules, separated by modules / entities. *
 *                                                                               *
 * The names of the files follow the following model:                            *
 * [name-entity]-controller.js - Business Rules                                  *
 * [name-entity]-repository.js - Interaction with the database                   *
 * ============================================================================= */

class ExampleController {
  async index(req, res) {
    try {
      return res.status(201).json({ success_msg: "Success!" });
    } catch (error) {
      return res.status(401).json({ error_msg: "Error!" });
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