const{StatusCodes}=require('http-status-codes');
const CrudRepository = require('./crud-repository');
const { Booking } = require('../models');
const AppError = require('../utils/errors/app-error');
const { where } = require('sequelize');

class BookingRepository extends CrudRepository{
    constructor() {
        super(Booking);
    }
    async createBooking(data, transaction) {
        const response = await Booking.create(data, {
            transaction:
                transaction
        });
        return response;
    }

    async get(data, transaction) {
        const response = await Booking.create(data,{
            transaction: transaction
        });
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;

    }
    async update(id, data, transaction) {
        const response = await Booking.update(data, {
            where: {
                id: id
            }
        }, {
            transaction: transaction
        });
        return response;
    }
}

module.exports = BookingRepository; 