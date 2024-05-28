const jwt = require('jsonwebtoken');

// Sample payload data
const payload = {
  userId: 'user_id',
  username: 'username',
  isAdmin: false // Example additional data
};

// Secret key used to sign the JWT
const secretKey = 'your_secret_key'; // Replace this with your actual secret key

// Options for token generation (optional)
const options = {
  expiresIn: '1h' // Token expiration time (e.g., 1 hour)
};

// Generate the JWT
const token = jwt.sign(payload, secretKey, options);

// Output the generated token
console.log('Generated JWT:', token);
