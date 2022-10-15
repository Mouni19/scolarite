var config = require('../config'); // get our config file
const Moddulle = require('../model/moddulle.model')


const getModdulles = async(req, res)=>{
    try{
        const moddulles = await Moddulle.find()
        res.json(moddulles)
    }catch(err){
        res.send("ERROR:" + err);
    }
       
     }
 
const getModdulle=((req, res,next)=>{
     
      console.log(req.params.id);
        Moddulle.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
               moddulle:result
            })
        })
        .catch(err=>{
            console.log("errrrrror");
            res.status(500).json({
                error:err
            })
             
})
})

const setModdulle = (async(req,res,next)=>{
    try{
        const id = req.params.id;
        const moddulle = req.body;
        const result= await Moddulle.findByIdAndUpdate(id,moddulle);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
    
    
})

const deletModdulle=(async(req,res)=>{
   // console.log(req.params.code_moddulle);
    const codemo = req.params.code_moddulle;
const resp = await Moddulle.deleteOne({code_moddulle:codemo});
  console.log (req.params.code_moddulle);
  res.send(resp);
})
const moddullesss =(async(req, res)=>{
   
                 
    const moddulless = await Moddulle.find({
        
        designation_moddulle: {$regex:req.params.designationM}
    })
    if(!moddulless){
      return  await res.json({status: false, msg: 'inéxistantsnnn'});
        }else{
          //return await res.json(students);
          await res.send(moddulless);
        }
                
      })


const addModdulle = (async(req, res)=>{
           const moddulle = new Moddulle({
        code_moddulle:req.body.code_moddulle,
        designation_moddulle:req.body.designation_moddulle,
        coefficient:req.body.coefficient,
        nombre_epreuves:req.body.nombre_epreuves,
        année:req.body.année,
        list_epreuves: req.body.list_epreuves,
        epreuve_details:req.body.epreuve_details
         });
   try{
     const savedmoddulle = await moddulle.save();
     res.send({moddulle:moddulle._id});
     res.send(savedmoddulle);
}catch (err){
res.status(400).send(err);
}
});

module.exports = {
    getModdulle,
    getModdulles,
    setModdulle,
    deletModdulle,
    addModdulle,
    moddullesss
   }

   