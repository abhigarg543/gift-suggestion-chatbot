// backend.js
const crypto = require('crypto');

// Replace this with the secret key from your Chatbase bot settings
const CHATBASE_SECRET = 'your_chatbase_secret_key';

// Simulate current user (replace with real user data from your system)
const current_user = {
  id: '123e4567-e89b-12d3-a456-426614174000',  // must be a string
  name: 'Abhishek Shukla',
  email: 'abhishek@example.com'
};

// Generate HMAC SHA-256 hash (this becomes the user signature)
const hash = crypto
  .createHmac('sha256', CHATBASE_SECRET)
  .update(current_user.id)
  .digest('hex');

// Output the data
console.log('User ID:', current_user.id);
console.log('User Hash (Signature):', hash);
