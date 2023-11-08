import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://gonzalo:Julio1397@cluster0.h1ctdry.mongodb.net/foodapp?retryWrites=true&w=majority');
        console.log('Database is connected to', db.connection.db.databaseName);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }

    }
};