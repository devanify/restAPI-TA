import dbPool from "../config/dbconfig.js";

const getAllData = async () => {
    const SQLQuery = "SELECT * FROM tb_prestasi";
    const [rows] = await dbPool.execute(SQLQuery);
    return rows; 
};

const addData = async (body) => {
    const SQLQuery = `INSERT INTO tb_prestasi (nim,nama,prestasi,path) VALUES ('${body.nim}', '${body.nama}','${body.prestasi}','${body.path}')`;
    const [rows] = await dbPool.execute(SQLQuery); 
    return rows;
};
const updateData =  async (body,nim) => {
    const SQLQuery =    `UPDATE tb_prestasi
                        SET nama = '${body.nama}', prestasi = '${body.prestasi}',path = '${body.path}'
                        WHERE nim ='${nim}'`;
    const [rows] = await dbPool.execute(SQLQuery); 
    return rows;
};
const deleteData =  async (nim) => {
    const SQLQuery =    `DELETE FROM tb_prestasi WHERE nim ='${nim}'`;
    const [rows] = await dbPool.execute(SQLQuery); 
    return rows;
};


export default { getAllData, addData, updateData, deleteData};  
