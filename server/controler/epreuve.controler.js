var config = require('../config'); // get our config file
const Epreuve = require('../model/epreuve.model');



const getEpreuves = async(req, res)=>{
    try{
        const epreuves = await Epreuve.find()
        res.json(epreuves)
    }catch(err){
        res.send("ERROR:" + err);
    }
       
     }
  
const getEpreuve=((req, res,next)=>{
     
      console.log(req.params.id);
        Epreuve.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
               epreuve:result
            })
        })
        .catch(err=>{
            console.log("errrrrror");
            res.status(500).json({
                error:err
            })
             
})
})

const setEpreuve = (async(req,res,next)=>{
    try{
        const id = req.params.id;
        const epreuve = req.body;
        const result= await Epreuve.findByIdAndUpdate(id,epreuve);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
    
    
})

const deletEpreuve = (async(req,res,next)=>{

      console.log(req.params.code_epreuve);
     const codeep = req.params.code_epreuve;
     const resp = await Epreuve.deleteOne({code_epreuve:codeep});
       console.log (req.params.code_epreuve);
       res.send(resp);
})
const epreuvesss =(async(req, res)=>{
   
                 
    const epreuvess = await Epreuve.find({
        
        code_epreuve: {$regex:req.params.code_epreuve}
    })
    if(!epreuvess){
      return  await res.json({status: false, msg: 'inéxistantsnnn'});
        }else{
          //return await res.json(students);
          await res.send(epreuvess);
        }
                
      })

const addEpreuve = (async(req, res,next)=>{
      //create a new student
      const epreuve = new Epreuve({
        code_epreuve:req.body.code_epreuve,
        code_module_e:req.body.code_module_e,
        date_epreuve:req.body.date_epreuve,
        année_epreuve:req.body.année_epreuve,
        nature_epreuve:req.body.nature_epreuve,
          });
   try{
     const savedEpreuve = await epreuve.save();
     res.send({epreuve:epreuve._id});
     res.send(savedEpreuve);
}catch (err){
res.status(400).send(err);
return next(err)
}
});

module.exports = {
    getEpreuves,
    getEpreuve,
    setEpreuve,
    deletEpreuve,
    addEpreuve,
    epreuvesss  
   }

   