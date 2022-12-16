import { Request, Response } from "express";
import { StudentsDatabase } from "../database/class/StudentsDatabase";
import { connection } from "../database/data/connection";

export const updateStudentClass = async (req: Request, res: Response): Promise<void> => {
    const studentId = req.params.studentId as string
    const classId = req.body.newClassId as string
    let errorCode = 400

    try {
        const studentDatabase = new StudentsDatabase()
        
        if (!studentId || studentId === ":studentId") {
            errorCode = 422
            throw new Error("Informe o ID do estudante.");
        }

        const studentsList = await studentDatabase.getAll()
        const findStudent = studentsList.find(student => student.id === studentId)

        if (!findStudent) {
            errorCode = 404
            throw new Error("ID de estudante não encontrado.");
        }

        if (!classId) {
            errorCode = 422
            throw new Error("Informe o ID da nova turma.");
        }

        // inserir busca pela turma

        const className = await connection.select("LabeSystem_Class.name")
        .from("LabeSystem_Class")
        .where("id", findStudent.class_id)

        await studentDatabase.updateInfo(studentId, "class_id", classId)

        const studentUpdated = studentsList.find(student => student.id === studentId)

        const newClassName = await connection.select("LabeSystem_Class.name")
        .from("LabeSystem_Class")
        .where("id", studentUpdated.class_id)

        res.status(200).send(`Estudante ID: ${studentId} alterado de TURMA ${className} para TURMA ${newClassName}.`)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}