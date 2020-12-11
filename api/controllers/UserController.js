/**
 * UserControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
  

  /**
   * `UserControllerController.create()`
   */
  create: async function (req, res) {
    try {
      let param=req.allParams()
      if(!param.firstName){
        return res.badRequest("firstName required")
      }
      const userObject=await User.create ({
        firstName:param.firstName,
        lastName:param.lastName,
        dob:param.dob,
        gender:param.gender,
        age:param.age,
        email:param.email,
        password:param.password
      })
     
     
      return res.ok(userObject)
    } catch (error) {
      return res.serverError(error)
    }
  },

  /**
   * `UserControllerController.find()`
   */
  find: async function (req, res) {
    try{
    const user = await User.find({}).where({email:param.email})
   
    return res.ok(user);
    }
    catch (err){
    return res.serverError(err);
    }
    }
   ,
   find: async function (req, res) {
    try{
      let param=req.allParams()
      const user = await User.find().where({id:param.id}).populate('tasks')
   
   
    return res.ok(user);
    }
    catch (err){
    return res.serverError(err);
    }
    },


  /**
   * `UserControllerController.update()`
   */
 

  /**
   * `UserControllerController.delete()`
   */
  delete: async function (req, res) {
   try {
     const deletedUser = await User.destroy({id:param.id})
     return res.ok(deletedUser)
   } catch (error) {
     return res.serverError(error)
   }
  }

};

