import { Request, Response } from "express"
import { ClassDatabase } from "../database/class/ClassDatabase"

export const createClass = async (req: Request, res: Response)=>{
    let errorCode = 400
    let {name, module} = req.body

    try {

        if(!name){
            errorCode = 422
            throw new Error("Provide the class name.")            
        } if(module && name && (typeof(name) !== "string" || typeof(module) !== "string")){
            errorCode = 422
            throw new Error("The class name and class module requires string value.")  
        } if(module &&
            module !== "0" &&
            module !== "1" &&
            module !== "2" &&
            module !== "3" &&
            module !== "4" &&
            module !== "5" &&
            module !== "6"
        ){
            errorCode = 422
            throw new Error(`Module ${module} does not exist. The possibles modules are: 0, 1, 2, 3, 4, 5 e 6.`)            
        }

        let classDB = new ClassDatabase()

        let allClass = await classDB.searchFor("name", "like", name)

        if(allClass.length > 0){
            errorCode = 400 
            throw new Error("This class name already exists.")
        }

        const id = Date.now().toString()

        classDB.createClass({id, name, module})

        res.status(201).end()

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}