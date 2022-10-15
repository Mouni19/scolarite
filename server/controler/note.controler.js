const excelToJson = require('convert-excel-to-json');
const { response } = require('express');
var config = require('../config'); 
const Note = require('../model/note.model')

 const getNotes = async(req, res)=>{
        try{
            const notess = await Note.find()
            res.json(notess)
        }catch(err){
            res.send("ERROR:" + err);
        }
}
const getNote =(async(req, res)=>{
           await Note.findById(req.params.id)
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

const setNote = (async(req,res,next)=>{
    try{
        const id = req.params.id;
        const note = req.body;
        const result= await Note.findByIdAndUpdate(id,note);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
    
    
})

const deletNotes =(async(req,res)=>{
    console.log(req.params.code_epreuve);
    const code = req.params.code_epreuve;
const resp = await Note.delete({code_epreuve:code});
 // console.log (req.params.matricule);
  res.send(resp);
})
const notesss =(async(req, res)=>{
       
      const notes = await Note.find({
                   
          code_epreuve: {$regex:req.params.code_epreuve}
      })
      if(!notes){
        return  await res.json({status: false, msg: 'inéxistantsnnn'});
          }else{
            //return await res.json(students);
            await res.send(notes);
          }
                  
        })
        // console.log('lalaalalalala:'+req.params.nom);
         
const addNotesFromExcel =(async(req,resul)=>{
              //const data2 = req.body;
                           
          try {
                      const result = await note.insertMany(req.body).json;
                     // const savedSt= await s.save();     
                      resul.send(result);
                    }catch(e){
            //return next(e)
           }
                
        })
        const addNote = (async(req, res, next)=>{
            //create a new student
            const note = new Note({
            code_epreuve:req.body.code_epreuve,
             nom_etudiant:req.body.nom_etudiant,
             prenom_etudiant:req.body.prenom_etudiant,
             valeure:req.body.valeure,
                          });
         try{
           const savedStudent = await student.save();
           res.send({student:student._id});
           res.send(savedStudent);
      }catch (err){
            return next(err)
      }
      });
        

module.exports = {
    notesss,
    getNote,
    getStudentByMatricule,
    getNotes,
    setNote,
    deletNotes,
    addStudent,
    addNotesFromExcel
   };

   //  getStudent,
 