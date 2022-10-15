const excelToJson = require('convert-excel-to-json');
const { response } = require('express');
var config = require('../config'); 
const Student = require('../model/student.model')



     const getStudents = async(req, res)=>{
        try{
            const studentss = await Student.find()
            res.json(studentss)
        }catch(err){
            res.send("ERROR:" + err);
        }
}
const getStudent =(async(req, res)=>{
           await Student.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
               student:result
            })
        })
        .catch(err=>{
            console.log("errrrrror");
            res.status(500).json({
                error:err
            })
             
})
})

const setStudent = (async(req,res,next)=>{
    try{
        const id = req.params.id;
        const student = req.body;
        const result= await Student.findByIdAndUpdate(id,student);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
    
    
})

const deletStudent =(async(req,res)=>{
    console.log(req.params.matricule);
    const mat = req.params.matricule;
const resp = await Student.deleteOne({matricule:mat});
 // console.log (req.params.matricule);
  res.send(resp);
})
const studentsss =(async(req, res)=>{
       
      const students = await Student.find({
                   
          nom: {$regex:req.params.nom}
      })
      if(!students){
        return  await res.json({status: false, msg: 'inéxistantsnnn'});
          }else{
            //return await res.json(students);
            await res.send(students);
          }
                  
        })
        // console.log('lalaalalalala:'+req.params.nom);
               
          

const getStudentByMatricule =((req, res,next)=>{
     
    console.log(req.params.id);
      Student.findById(req.params.id)
      .then(result=>{
          res.status(200).json({
             student:result
          })
      })
      .catch(err=>{
          console.log("errrrrror");
          res.status(500).json({
              error:err
          })
           
})
})


const addStudent = (async(req, res, next)=>{
      //create a new student
      const student = new Student({
      matricule:req.body.matricule,
       nom:req.body.nom,
       prenom:req.body.prenom,
       dateNaissance:req.body.dateNaissance,
       lieuNaissance :req.body.lieuNaissance,
    nationality :req.body.nationality,
     firstInscription:req.body.firstInscription,
      bac:req.body.bac,
       gendre:req.body.gendre,
        type:req.body.type,
         anneeEtude:req.body.anneeEtude,
         anneeScolaire:req.body.anneeScolaire
         
         });
   try{
     const savedStudent = await student.save();
     res.send({student:student._id});
     res.send(savedStudent);
}catch (err){
      return next(err)
}
});

const addStudentFromExcel =(async(req,resul)=>{
              //const data2 = req.body;
                           
          try {
                      const result = await Student.insertMany(req.body).json;
                     // const savedSt= await s.save();     
                      resul.send(result);
                    }catch(e){
            //return next(e)
           }
                
        })
        

module.exports = {
          studentsss,
          getStudent,
    getStudentByMatricule,
    getStudents,
    setStudent,
    deletStudent,
    addStudent,
    addStudentFromExcel
   };

   //  getStudent,
 