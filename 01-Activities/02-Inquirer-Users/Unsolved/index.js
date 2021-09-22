const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');

// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
//
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['email', 'phone', 'slack', 'carrier pigeon']
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['HTML', 'CSS', 'Javascript']
    }
  ])
  .then(function(data) {})