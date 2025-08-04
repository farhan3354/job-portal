// const joi = require("joi");

// const registermiddleware = (req, res, next) => {
//   const schema = joi.object({
//     name: joi.string().max(12).min(5).required(),
//     email: joi.string().email().required(),
//     phone: joi.string().length(11).required(),
//     password: joi.string().max(22).min(8).required(),
//   });

//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ mes: "Bad request", error });
//   }

//   next();
// };

// const loginauth = (req, res, next) => {
//   const schema = joi.object({
//     email: joi.string().email().required(),
//     password: joi.string().max(22).min(8).required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ mes: "Bad request", error });
//   }
//   next();
// };

// module.exports = {
//   registermiddleware,
//   loginauth,
// };
