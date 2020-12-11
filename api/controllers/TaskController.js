/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */





module.exports = {
  

  /**
   * `TaskController.create()`
   */
  create: async function (req, res) {
   try {
     let param=req.allParams();
     console.log(param)
     if(!param.id){
       return res.badRequest("user id is required")
     }
     const taskObject=await Task.create ({
       
       title:param.title,
       description:param.description,
       taskStatus:param.taskStatus,
       userRef:param.id
       
     })
    //  const createdTask=await Task.create(taskObject)
     return res.ok(taskObject)
   } catch (error) {
     return res.serverError(error)
   }
  },

  /**
   * `TaskController.update()`
   */
  update: async function (req, res) {
  try {
    let param=req.allParams()
    let attribute={}
    if(param.title){
      attribute.title=param.title
    }
    if(param.description){
      attribute.description=param.description
    }
    if(param.taskStatus){
      attribute.taskStatus=param.taskStatus
    }
    const updatedTask = await Task.update({id:param.id},attribute)
    return res.ok(updatedTask)
  } catch (error) {
    return res.serverError(error)
  }
  },

  /**
   * `TaskController.find()`
   */
  

  /**
   * `TaskController.delete()`
   */
  delete: async function (req, res) {
   try {
     
     const deleted=await Task.destroy({id:param.id})
     console.log(deleted)
    return res.ok(deleted)
   } catch (error) {
    return res.serverError(error)
     
   }
  }

};

