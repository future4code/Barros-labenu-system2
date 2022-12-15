import { BaseDatabase } from "./BaseDatabase";
import Student from "./Student";

export class StudentsDatabase extends BaseDatabase {
    TABLE_NAME = "LabeSystem_Students"

    public async create(student: Student) {
        await super.create(student)
    }

    public getAll(column: string, like: string, value: string) {
        return super.getAll(column, like, value)
    }

    public async updateInfo(id: number, column: string, newValue: string) {
        await super.updateInfo(id, column, newValue)
    }
}