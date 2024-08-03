const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels' // local server pe database create kiye yeh local database server connection string hai

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error: ',err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
