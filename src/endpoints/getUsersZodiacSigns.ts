import { Request, Response } from "express";
import { BaseDatabase } from "../database/class/BaseDatabase";
import ZodiacSigns from "../database/class/ZodiacSigns";

export const getUsersZodiacSigns = async (req: Request, res: Response) => {
    
    let errorCode = 400

    try {       
        let ariesInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '03'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '04'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let ariesStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '03'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '04'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let aries = {students: ariesStudents[0], intructors: ariesInstructors[0]}

        let taurusInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '04'
            AND Day(birth_date) BETWEEN '21' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '05'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let taurusStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '04'
            AND Day(birth_date) BETWEEN '21' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '05'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let taurus = {students: taurusStudents[0], intructors: taurusInstructors[0]}

        let geminiInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '05'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '06'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let geminiStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '05'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '06'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let gemini = {students: geminiStudents[0], intructors: geminiInstructors[0]}

        let cancerInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '06'
            AND Day(birth_date) BETWEEN '21' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '07'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let cancerStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '06'
            AND Day(birth_date) BETWEEN '21' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '07'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let cancer = {students: cancerStudents[0], intructors: cancerInstructors[0]}

        let leoInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '07'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '08'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let leoStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '07'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '08'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let leo = {students: leoStudents[0], intructors: leoInstructors[0]}

        let virgoInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '08'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '09'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let virgoStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '08'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '09'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let virgo = {students: virgoStudents[0], intructors: virgoInstructors[0]}

        let libraInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '09'
            AND Day(birth_date) BETWEEN '23' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '10'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let libraStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '09'
            AND Day(birth_date) BETWEEN '23' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '10'
            AND Day(birth_date) BETWEEN '01' AND '22';
        `)

        let libra = {students: libraStudents[0], intructors: libraInstructors[0]}

        let scorpioInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '10'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '11'
            AND Day(birth_date) BETWEEN '01' AND '21';
        `)

        let scorpioStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '10'
            AND Day(birth_date) BETWEEN '23' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '11'
            AND Day(birth_date) BETWEEN '01' AND '21';
        `)

        let scorpio = {students: scorpioStudents[0], intructors: scorpioInstructors[0]}

        let sagittariuInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '11'
            AND Day(birth_date) BETWEEN '22' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '12'
            AND Day(birth_date) BETWEEN '01' AND '21';
        `)

        let sagittariuStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '11'
            AND Day(birth_date) BETWEEN '22' AND '30'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '12'
            AND Day(birth_date) BETWEEN '01' AND '21';
        `)

        let sagittariu = {students: sagittariuStudents[0], intructors: sagittariuInstructors[0]}

        let capricornInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '12'
            AND Day(birth_date) BETWEEN '22' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '01'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let capricornStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '12'
            AND Day(birth_date) BETWEEN '22' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '01'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let capricorn = {students: capricornStudents[0], intructors: capricornInstructors[0]}

        let aquariusInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '01'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '02'
            AND Day(birth_date) BETWEEN '01' AND '18';
        `)

        let aquariusStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '01'
            AND Day(birth_date) BETWEEN '21' AND '31'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '02'
            AND Day(birth_date) BETWEEN '01' AND '18';
        `)

        let aquarius = {students: aquariusStudents[0], intructors: aquariusInstructors[0]}

        let piscesInstructors = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '02'
            AND Day(birth_date) BETWEEN '19' AND '29'
            UNION
            SELECT name, birth_date FROM LabeSystem_Instructors WHERE Month(birth_date) = '03'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let piscesStudents = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '02'
            AND Day(birth_date) BETWEEN '19' AND '29'
            UNION
            SELECT name, birth_date FROM LabeSystem_Students WHERE Month(birth_date) = '03'
            AND Day(birth_date) BETWEEN '01' AND '20';
        `)

        let pisces = {students: piscesStudents[0], intructors: piscesInstructors[0]}

        let zodiacSigns = new ZodiacSigns(
            aries,
            taurus,
            gemini,
            cancer,
            leo,
            virgo,
            libra,
            scorpio,
            sagittariu,
            capricorn,
            aquarius,
            pisces
        )
        
        res.status(200).send(zodiacSigns)              
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}

        /*  let instructorsDB = new InstructorDatabase()
        let studentsDB = new StudentsDatabase()

        let allInstructors = await instructorsDB.selectAllInstructors()
        let allStudents = await studentsDB.getAll() 

        for(let i = 0; i < allInstructors.length; i++){
            allInstructors[i].birth_date = "2022" + "-" + ((allInstructors[i].birth_date.getMonth() + 1)) + "-" + ((allInstructors[i].birth_date.getDate()))
        }

        for(let i = 0; i < allStudents.length; i++){
            allStudents[i].birth_date = new Date("2000" + allStudents[i].birth_date.toString().split("").splice(4, 6).join(""))
        } 
        
        let result = await BaseDatabase.connection.raw(`
            SELECT name, birth_date FROM LabeSystem_Students WHERE LEFT (birth_date, 10)  BETWEEN '2000-01-01' AND '2000-12-31';
        `) */