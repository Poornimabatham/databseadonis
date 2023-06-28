import User2 from 'App/Models/User2';

export default  class ServiceNameService{
  
   
   static async Services1(p){

   console.log(p)
    const post: User2 = await User2.create(p)
    await post.save()

  

 
    }
}