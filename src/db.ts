const mongoose = require('mongoose');
require('dotenv').config();

export const dbConnect = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database is connected to', db.connection.db.databaseName);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
