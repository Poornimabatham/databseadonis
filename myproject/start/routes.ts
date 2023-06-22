/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import Database from '@ioc:Adonis/Lucid/Database'
Route.get('/', async () => {
  
  // INSERT QUERY
// await Database
// .insertQuery() // 👈 gives an instance of insert query builder
// .table('employee')
// .insert({ fname: 'virk',lname:'kaushak',password:76767, email: 'virk@adonisjs.com',phone:768768 })

// FOR DATABASE  QUERIES
// const query = Database.connection()
// console.log(query);


// USING WHERE CLAUSE
// const query2 =  Database.from('employee')
// .where((query)=>{
//   query
  // .where('fname','virk').where('empid','55').where('lname','kaushal')
    // .where('fname','virk')


// })
// .orWhere((query) => {
//   query
//     .where('email', 'vk@adonisjs.com')

// })
// return query2








  // const employee =  Database.connection()
  //   const query = employee.table("employee")
  //   console.log(employee)
  //   return query



  // DELETE QUERY
  //  const del  = Database

  // .from('employee')
  // .select("*")
  // .delete()
  // console.log("heellow totltpotpo4p")
  // console.log(del)



  
  await Database
  .from('employee')
  .where('empid', 68)
  .update({fname:'hgkjh',lname:'kiys',password:98877860,email:'oi@gmail.com',phone:7676878})

})


