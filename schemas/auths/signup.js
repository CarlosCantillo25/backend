import joi from "joi";

const userSignUp = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments:2
        })
        .message('formato de email incorrecto'),
    password: joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
    photo: joi.string()
        .required()
        .uri(),

})

export default userSignUp;