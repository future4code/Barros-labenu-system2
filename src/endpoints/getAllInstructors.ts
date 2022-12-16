import { Request, Response } from "express"
import InstructorDatabase from "../database/class/InstructorDatabase"


export async function getAllInstructors (req: Request, res: Response) {
    let errorCode = 400
    
    try {
        const instructors = new InstructorDatabase()
        const result = await instructors.selectAllInstructors()

        let instructorsArray = []
        for(let i = 0; result.length > i; i++) {
            const expertiseArray = await instructors.getExpertise(result[i].id)
            const expertise = []
            for (let item of expertiseArray) {
                expertise.push(item.expertise_name)
            }

            instructorsArray.push({...result[i], expertise})
        }

        res.status(200).send(instructorsArray)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}