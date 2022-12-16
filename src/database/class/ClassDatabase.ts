import { BaseDatabase } from "./BaseDatabase";

export class ClassDatabase extends BaseDatabase{

    TABLE_NAME = "LabeSystem_Class"  

    public async createClass(newItem: any) {
       await super.create(newItem)
    }

    public async getAllClass(column: any, notLike: any, value: any){
        return await super.getAll(column, notLike, value)
    }
}