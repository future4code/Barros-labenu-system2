import { Request, Response } from "express"
import { BaseDatabase } from "../database/class/BaseDatabase"
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
        }

        let allClass = await BaseDatabase.connection("LabeSystem_Class").select("*").whereLike("name", name)

        if(allClass.length > 0){
            errorCode = 400 
            throw new Error("This class name already exists.")
        }

        let classDB = new ClassDatabase()

        const id = Date.now().toString()

        classDB.createClass({id, name, module})

        res.status(201).end()

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}