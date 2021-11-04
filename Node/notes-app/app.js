const fs = require('fs');
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const Multi = require('./utili.js');
const notes = require('./notes.js');

// const command = process.argv[2];

const argv = yargs(hideBin(process.argv)).argv

//Add Command
yargs
    .command({
        command:'add',
        describe:'Adding a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
        }
    }).argv;

//Remove Command
yargs
    .command({
        command:'remove',
        describe:'Removing a note',
        builder: {
            title: {
                describe: 'Deleting note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: argv => {
            notes.removeNote(argv.title)
        }
    }).argv;

//List Command
yargs
    .command({
        command:'list',
        describe:'Listing notes',
        handler: argv => {
            console.log('Listing note');
        }
    }).argv;
    
//Read Command
yargs
    .command({
        command:'read',
        describe:'Reading notes',
        builder: {
            title: {
                describe: 'Reading note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: argv => {
            console.log('Reading a note');
        }
    }).argv;
