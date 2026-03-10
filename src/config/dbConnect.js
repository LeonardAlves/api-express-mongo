import mongoose from 'mongoose';

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDataBase;




// mongodb+srv://lynyrdsantos_db_user:<db_password>@cluster0.wntvmdx.mongodb.net/?appName=Cluster0