const jsonfile = require('jsonfile');
const moment = require('moment');
const FILE_PATH = './data';
const DATE = moment().format();

const data = {
    date: DATE
}
jsonfile.writeFile(FILE_PATH, data);