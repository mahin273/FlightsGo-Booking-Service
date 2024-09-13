const axios = require('axios');
const { BookingRepository } = require('../repositories');
const db = require('../models');
const {serverConfig} = require('../config');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');


async function createBooking(data) {
    return new Promise(async (resolve, reject) => {
        
            const result = db.sequelize.transaction(async function bookingImp(t) {
                const flight = await axios.get(`${serverConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
                const flightData = flight.data.data;
                if (data.noOfSeats > flightData.totalSeats) {
                    reject(new AppError('Not Enough seats avaiable', StatusCodes.BAD_REQUEST));
                }
                resolve(true);
            });

        
          
        
     })

}

module.exports = {
    createBooking
}