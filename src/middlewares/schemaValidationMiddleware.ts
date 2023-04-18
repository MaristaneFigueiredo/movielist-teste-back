/* import genericErrors from "../errors/genericErros.js"
import {Request, Response, NextFunction} from "express"
 */ 
import genericErrors from "../errors/genericErros"
import {Request, Response, NextFunction} from "express"
 


function validationSchema(schema){    
    
    return (req: Request, res:Response, next:NextFunction) => {
        const {error} = schema.validate(req.body, {abortEarly:false})
        
        if (error) {
            const errorsMsg = error.details.map((detail) => detail.message)        
            throw genericErrors.conflitctError(errorsMsg)
        }

        next()


    }
}

export default validationSchema