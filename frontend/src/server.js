const path = require('path');
const morgan = require('morgan');

const app = require('../../backend/app');

const PORT =  5000;

const server = app.listen(PORT, () => {
    console.log('listening to th port',PORT);
})