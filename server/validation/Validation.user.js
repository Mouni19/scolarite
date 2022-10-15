const Joi = require('@hapi/joi');
const { date } = require('joi');
//import Joi from 'joi';
//validation

const registerValidation = data => {

    const schema = Joi.object ({
        name: Joi.string()
          .min(6)
          .required(),
        email:Joi.string()
          .min(6)
          .required()
          .email(),
          password:Joi.string()
          .min(6)
          .required(),
    });
    try {
     schema.validateAsync(data,schema);
    //Joi.validateAsync(data,schema)
    }catch (err) {
      return(err);
  //return Joi.validate(data, schema);
   // return schema.validateAsync(data);
    //return value;
      };
    }

    //login
    const loginValidation = data => {

      const schema = Joi.object ({
          email:Joi.string()
            .min(6)
            .required()
            .email(),
          password:Joi.string()
            .min(6)
            .required(),
      });
      try {
       schema.validateAsync(data);
      //Joi.validateAsync(data,schema)
      }catch (err) {
        return(err);
      //return Joi.validate(data, schema);
      //return schema.validateAsync(data);
      //return value;
        };
      }

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;



