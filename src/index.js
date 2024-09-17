const express = require('express');
const apiRoutes = require('./routes');
const { serverConfig,Queue } = require('./config');
const CRON = require('./utils/common/cron-jobs')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRoutes);
app.use('/bookingService/api',apiRoutes)

app.listen(serverConfig.PORT, async() => {
    console.log(`Successfully started on the server on PORT : ${serverConfig.PORT}`);
    CRON();
    await Queue.connectQueue();
    console.log('Queue connected')
})