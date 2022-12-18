const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const cors = require("cors");
const port = 4000;
require('dotenv').config()
const database = require('./config/database')
const errorMiddleware = require('./middleware/error');
const paymentRoutes = require('./routes/paymentRoute');
const adminRoutes = require('./routes/adminRoute')


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", parameterLimit: 50000, extended: false }));

database();

const corsOption = {
    credentials: true,
    origin: true
}

app.use(cors(corsOption))

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1)
});

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Hi i am bookit')
})

app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes)

app.listen(port, () => {
    console.log(`Server is working on ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`ErrorRejection:${err.message}`);
});