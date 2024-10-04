import achievementModel from "../models/achievementModel.js";

const getAllAchievements = async (req, res) => {     
    try {
        const data = await achievementModel.getAllData();
        console.log(data); 
        
        // Jika tidak ada data, bisa mengembalikan pesan yang sesuai
        if (data.length === 0) {
            return res.status(404).json({ message: 'No achievements found' });
        }

        res.json({ 
            message: 'Achievements fetched successfully!', 
            data: data
        }); 
    } catch (error) {
        console.error(error); // Logging error untuk debugging
        res.status(500).json({ 
            message: 'Server Error',
            error: error.message
        }); 
    }   
};


const createAchivement = async (req, res) => {
    console.log(req.body)
    const body = req.body;
    try {
        await achievementModel.addData(body); 
        res.status(201).json({
            message: 'Data added successfully',
            data: body 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Server Error',
            error: error.message
        }); 
    }
};

const updateAchievement = async (req,res) => {
    // jika tidak diisi {} maka hasilnya bentuk json
    const body = req.body; 
    const {nim} =  req.params;
    console.log(body);
    try {
        await achievementModel.updateData(body,nim)
        // console.log(nim);
        res.json({
            message : ' update succsess ! ',
            id : nim,
            data : req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Gagal melakukan Update' });

    }
}

const deleteAchievement = async (req, res) =>{
    try {
        const {nim} = req.params;
        await achievementModel.deleteData(nim)
        res.status(200).json({
            message : ' delete succsess ! ',
            id : nim
        })
    } catch (error) {
        console.log(error);
    }
    
}

export default { getAllAchievements, createAchivement,updateAchievement, deleteAchievement};
