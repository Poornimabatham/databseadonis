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
  
  
await Database
.insertQuery() // 👈 gives an instance of insert query builder
.table('employee')
.insert({ fname: 'virk',lname:'kaushak',password:76767, email: 'virk@adonisjs.com',phone:768768 })



const users = await Database
.query()  // 👈 gives an instance of select query builder
.from('employee')
.select('*')
return users
  // return { hello: 'wo' }
})
