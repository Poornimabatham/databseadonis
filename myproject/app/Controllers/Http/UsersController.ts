import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Validator from  'App/Validators/Validator'
import User2 from 'App/Models/User2';
export default class UsersController {
  public async index({response}: HttpContextContract) {
    console.log(Validator.n);
    const p = await User2.all()
    
    return  response.ok(p)
  }

  public async create({}: HttpContextContract) {
    
    
    
  }

  public async store({}: HttpContextContract) {
    // const User = new  User2()
    // User.empid = 88
    // User.fname ="rahul"
    // User.lname ="jain"
    // User.password = 7987
    // User.email= "somya21@gmail.com"
    // User.phone=87979898
    // await User.save()
  }

  public async show({}: HttpContextContract) {
    // return "ah fo ia"
    // console.log(validator.n);

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
