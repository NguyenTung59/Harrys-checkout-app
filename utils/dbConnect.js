import mongoose from 'mongoose';

const connection = {};

const dbConnect = async () => {
	if (connection.isConnected) {
		return;
	}
	try {
		const db = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
			console.log(error)
	}
	
};

export default dbConnect;
