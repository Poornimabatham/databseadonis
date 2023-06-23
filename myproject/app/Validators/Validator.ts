import { schema } from '@ioc:Adonis/Core/Validator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Basevalidator from  './Basevalidator'

export default class Validator extends Basevalidator  {
  constructor(public ctx: HttpContextContract) {
    super();
  }

    
  
    static n = schema.create({

    empid: schema.number(),
  fname: schema.string(),
  lname: schema.string(),
  password:schema.number(),
  email:schema.string.optional(),
  phone:schema.number(),
  })

  
  
  






}
