const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,
  numbers: false,
  symbols: false,
  uppercase: true,
  lowercase: true,
});

console.log('Generated Password:', password);