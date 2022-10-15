var config = require('../config'); // get our config file
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const { isError } = require('joi');



const users = async(req, res)=>{
    try{
        const userss = await User.find()
        res.json(userss)
    }catch(err){
        res.send("ERROR:" + err);
    }
       
     }
    /* const users = async(req, res)=>{
  await User.find((err,users)=>{
      if(!err) res.send(users);
      else console.log('errrrrrrrroooooorrrrrr:');
    })
            }  */ 
         

const getUser =((req, res,next)=>{
     
      console.log(req.params.id);
        User.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
               user:result
            })
        })
        .catch(err=>{
            console.log("errrrrror");
            res.status(500).json({
                error:err
            })
             
})
})

const setUser = (async(req,res,next)=>{
    try{
        const id = req.params.id;
        const user = req.body;
        const result= await User.findByIdAndUpdate(id,user);
        res.send(result);
    }catch(error){
        console.log(error.message);
        console.log('merci');
    }
    
    
})

const deletUser = (async(req,res,next)=>{

   try{
        const id = req.params.id;
        const result= await User.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
})


const registerr = (async(req, res)=>{
    
     //cheking if the user is already exist in the database
     const emailExist = await User.findOne({email:req.body.email});
     if(emailExist) return res.status(400).send('already exist');

     //hash the password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password,salt);

     //create a new user
      const user = new User({
       name:req.body.name,
       email:req.body.email,
       password:hashedPassword
   });
   try{
     const savedUser = await user.save();
     res.send({user:user._id});
     res.send(savedUser);
}catch (err){
res.status(400).send(err);
}
});


//////////////////////////login//////////////////////////////
const loginn = (async(req, res)=>{
    const user = await User.findOne({
        email: req.body.email
    }).exec();
     if (!user) {
        //res.json({success: false, message: 'Authentication failed. User not found.' });
        return res.send({status: false, msg: 'Email invalid'});
       
    } else  {
        
    // check if password matches
   // if (user.password != req.body.password) 
   if(!await bcrypt.compare(req.body.password,user.password)){
   // res.json({success: false, message: 'Authentication failed. Wrong password.' });
   return res.send({status: false, msg: 'Password invalid'});
    } else {
    // if user is found and password is right
    // create a token
      const token = jwt.sign({_id:user._id},config.secret,{expiresIn:'24h'});
    // return the information including token as JSON
    res.json({success: true,message: 'Enjoy your token!',token: token});

}
}
});

module.exports = {
    users,
    getUser,
    setUser,
    deletUser,
    registerr,
    loginn
   }

   