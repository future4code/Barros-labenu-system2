import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = async () => await connection.raw(`
    CREATE TABLE IF NOT EXISTS LabeSystem_Class (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(80) UNIQUE NOT NULL,
        module ENUM('0', '1', '2', '3', '4', '5', '6') DEFAULT '0'
    );    

    CREATE TABLE IF NOT EXISTS LabeSystem_Students (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(180) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        birth_date DATE NOT NULL,
        class_id VARCHAR(80) NOT NULL,
        FOREIGN KEY (class_id) REFERENCES LabeSystem_Class (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Instructors (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(180) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        birth_date DATE NOT NULL,
        class_id VARCHAR(80) NOT NULL,
        FOREIGN KEY (class_id) REFERENCES LabeSystem_Class (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Hobbies (
        id VARCHAR(80) PRIMARY KEY,
        hobby_name VARCHAR(180) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Expertise (
        id VARCHAR(80) PRIMARY KEY,
        expertise_name ENUM("React", "Redux", "CSS", "Testes Unitários", "TypeScript", "Programação Orientada a Objetos", "Backend") UNIQUE NOT NULL 
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Students_Hobbies (
        id VARCHAR(80) PRIMARY KEY, 
        student_id VARCHAR(80) NOT NULL,
        hobby_id VARCHAR(80) NOT NULL,
        FOREIGN KEY (student_id) REFERENCES LabeSystem_Students (id),
        FOREIGN KEY (hobby_id) REFERENCES LabeSystem_Hobbies (id)
    );

    CREATE TABLE IF NOT EXISTS LabeSystem_Instructors_Expertise (
        id VARCHAR(80) PRIMARY KEY,
        instructor_id VARCHAR(80) NOT NULL,
        expertise_id VARCHAR(80) NOT NULL,
        FOREIGN KEY (instructor_id) REFERENCES LabeSystem_Instructors (id),
        FOREIGN KEY (expertise_id) REFERENCES LabeSystem_Expertise (id)
    );


`).then(() => console.log('Tabelas criadas.')).catch(printError)

const insertData = async () => await connection.raw(`
    INSERT INTO LabeSystem_Class VALUES (1671118682648, 'Barros', '6');
    INSERT INTO LabeSystem_Class VALUES (1671118682649, 'Jemison', '6');
    INSERT INTO LabeSystem_Class VALUES (1671118682650, 'Lamarr', '6');
    INSERT INTO LabeSystem_Class VALUES (1671118682651, 'Davis', '2');
    INSERT INTO LabeSystem_Class VALUES (1671118682652, 'Hooks', '4');
    INSERT INTO LabeSystem_Class VALUES (1671118682653, 'Gonzaga', '0');
    INSERT INTO LabeSystem_Class VALUES (1671118682654, 'Penha', '3');
    INSERT INTO LabeSystem_Class VALUES (1671118682655, 'Amaral', '0');

    INSERT INTO LabeSystem_Students VALUES ('1671118685482', 'Francine Hahn', 'fran_hahn@hotmail.com', '1991-06-04', 1671118682648);
    INSERT INTO LabeSystem_Students VALUES ('1671118685874', 'Giovana Inez Vieira', 'gioivieira@gmail.com', '1999-04-01', 1671118682648);
    INSERT INTO LabeSystem_Students VALUES ('1671118687457', 'Maria Fernandez de Moura Ferro', 'mariafmferro@gmail.com', '1995-10-07', 1671118682648);
    INSERT INTO LabeSystem_Students VALUES ('1671118684578', 'Marcos Silva Rodrigues', 'marcosr@yahoo.com.br', '1988-11-10', 1671118682653);
    INSERT INTO LabeSystem_Students VALUES ('1671118683154', 'Regina Santos Ferreira', 'reginasferreira@gmail.com', '1978-07-07', 1671118682650);
    INSERT INTO LabeSystem_Students VALUES ('1671118688934', 'João Ricardo Guerra', 'joaoguerra@outlook.com', '1988-12-15', 1671118682654);
    INSERT INTO LabeSystem_Students VALUES ('1671118684575', 'Fernanda Cristina Pereira', 'fernandacpereira@hotmail.com', '2001-07-09', 1671118682649);

    INSERT INTO LabeSystem_Instructors VALUES ('1671118685489', 'Junior Prado', 'junior.prado@labenu.com', '1990-03-10', 1671118682648);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118685899', 'Fayra Miranda', 'fayra.miranda@labenu.com', '1994-02-10', 1671118682648);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118689985', 'Maju Baraldi', 'maju.baraldi@labenu.com', '1997-05-11', 1671118682650);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118688745', 'Israel Cordeiro', 'israel.cordeiro@labenu.com', '1995-05-07', 1671118682649);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118686575', 'Andrea Soares', 'andrea.soares@labenu.com', '1990-05-15', 1671118682653);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118683345', 'Pedro Santos', 'pedro.santos@labenu.com', '1980-03-17', 1671118682654);
    INSERT INTO LabeSystem_Instructors VALUES ('1671118686854', 'Gabriel Ferreira', 'gabriel.ferreira@labenu.com', '1995-12-01', 1671118682651);

    INSERT INTO LabeSystem_Hobbies VALUES (1671118682578, 'Ler');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118682232, 'Ver série');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118686568, 'Viajar');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118681127, 'Pescar');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118681348, 'Desenhar');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118688775, 'Cantar');
    INSERT INTO LabeSystem_Hobbies VALUES (1671118689987, 'Ouvir música');

    INSERT INTO LabeSystem_Expertise VALUES (1671118778555, 'Typescript');
    INSERT INTO LabeSystem_Expertise VALUES (1671118878599, 'Backend');
    INSERT INTO LabeSystem_Expertise VALUES (1671118872021, 'React');
    INSERT INTO LabeSystem_Expertise VALUES (1671118874157, 'Redux');
    INSERT INTO LabeSystem_Expertise VALUES (1671118871003, 'Programação Orientada a Objetos');
    INSERT INTO LabeSystem_Expertise VALUES (1671118878897, 'Testes Unitários');

    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118687788, 1671118685482, 1671118682578);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118687682, 1671118685482, 1671118682232);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118687772, 1671118685482, 1671118686568);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118689988, 1671118685874, 1671118682232);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118121333, 1671118685874, 1671118689987);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118682323, 1671118687457, 1671118681348);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118878783, 1671118687457, 1671118682232);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671455455453, 1671118687457, 1671118682578);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118684041, 1671118684578, 1671118682232);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118685200, 1671118683154, 1671118689987);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118688897, 1671118688934, 1671118681127);
    INSERT INTO LabeSystem_Students_Hobbies VALUES (1671118687152, 1671118684575, 1671118686568);

    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671118879578, 1671118685489, 1671118878599);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671545645645, 1671118685899, 1671118872021);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671455557894, 1671118688745, 1671118874157);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671557645645, 1671118686575, 1671118871003);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671547775645, 1671118683345, 1671118872021);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671745649989, 1671118686854, 1671118878599);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1671888455845, 1671118688745, 1671118878897);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1683245445345, 1671118685489, 1671118778555);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1683245447725, 1671118686575, 1671118878897);
    INSERT INTO LabeSystem_Instructors_Expertise VALUES (1683879544758, 1671118689985, 1671118874157);
`).then(() => console.log('Dados inseridos.')).catch(printError)

const finish = async () => await connection.destroy()

createTable().then(insertData).finally(finish)