const cron = require('node-cron');
const { BookingService } = require('../../services');

function scheduleCrons() {
    cron.schedule('*/3 * * * *', async () => {
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons
