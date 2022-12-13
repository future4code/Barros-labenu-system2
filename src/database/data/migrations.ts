import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = async () => await connection.raw(`
    CREATE TABLE IF NOT EXISTS LabeSystem_Class (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(80) UNIQUE NOT NULL,
        type ENUM("integral", "night"),
        module ENUM('0', '1', '2', '3', '4', '5', '6', '7')
    );    

    CREATE TABLE IF NOT EXISTS LabeSystem_Students (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(180) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        birth_date DATE,
        class_id INT,
        FOREIGN KEY (class_id) REFERENCES LabeSystem_Class (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Instructors (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(180) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        birth_date DATE,
        class_id INT,
        FOREIGN KEY (class_id) REFERENCES LabeSystem_Class (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Hobbies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        hobby_name VARCHAR(180),
        user_id VARCHAR(80),
        FOREIGN KEY (user_id) REFERENCES LabeSystem_Students (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Expertise (
        id INT AUTO_INCREMENT PRIMARY KEY,
        expertise_name ENUM("React", "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend"),
        instructor_id VARCHAR(80),
        FOREIGN KEY (instructor_id) REFERENCES LabeSystem_Instructors (id)
    );
`).then(() => console.log('Tabelas criadas.')).catch(printError)

const insertData = async () => await connection.raw(`
    INSERT INTO LabeSystem_Class VALUES (1, 'Barros', 'night', '6');
    INSERT INTO LabeSystem_Students VALUES ('45236145', 'Francine Hahn', 'fran_hahn@hotmail.com', '1991-06-04', 1);
    INSERT INTO LabeSystem_Instructors VALUES ('4563211123', 'Junior Prado', 'junior.prado@labenu.com', '1990-03-10', 1);
    INSERT INTO LabeSystem_Hobbies VALUES (1, 'Ler', '45236145');
    INSERT INTO LabeSystem_Hobbies VALUES (2, 'Ver série', '45236145');
    INSERT INTO LabeSystem_Hobbies VALUES (3, 'Viajar', '45236145');
    INSERT INTO LabeSystem_Expertise VALUES (1, 'Typescript', '4563211123');
    INSERT INTO LabeSystem_Expertise VALUES (2, 'Backend', '4563211123');
`).then(() => console.log('Dados inseridos.')).catch(printError)

const finish = async () => await connection.destroy()

createTable().then(insertData).finally(finish)