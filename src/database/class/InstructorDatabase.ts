import { BaseDatabase } from "./BaseDatabase"


export default class InstructorDatabase extends BaseDatabase {
    TABLE_NAME = "LabeSystem_Instructors"

    public async createInstructor(id: string, name: string, email: string, birth_date: Date, class_id: string) {
        await super.create({id, name, email, birth_date, class_id})
    }

    public async createExpertise(instructor_id: string, expertise: string[]) {
        for (let i = 0; expertise.length > i; i++) {
            let expertise_id = await BaseDatabase.connection("LabeSystem_Expertise").select("id").where("expertise_name", expertise[i])
            expertise_id = expertise_id[0].id

            const id = Date.now().toString()
            await BaseDatabase.connection("LabeSystem_Instructors_Expertise").insert({id, instructor_id, expertise_id})
        }
    }

    public async getByEmail(email: string) {
        const result = await super.getAll("email", "like", email)
        return result
    }
}