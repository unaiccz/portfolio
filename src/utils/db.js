import mongoose from "mongoose";
const connection = {}
export const connectdb = async () => {
    try {
        if (connection.isConnected){
            console.log('using a existing datababse');
            return;
        }
      const db = await mongoose.connect('mongodb+srv://unai:011110@cluster0.yvafxmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      connection.isConnected = db.connections[0].readyState;
    }
    catch (error) {
        console.log(error);
        throw new Error('problem mongo')
    }
    }
    