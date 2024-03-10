import mongoose from "mongoose";
const connection = {}
export const connectdb = async () => {
    try {
        if (connection.isConnected){
            console.log('using a existing datababse');
            return;
        }
      const db = await mongoose.connect(process.env.MONGO)
      connection.isConnected = db.connections[0].readyState;
    }
    catch (error) {
        console.log(error);
        throw new Error('problem mongo')
    }
    }
    