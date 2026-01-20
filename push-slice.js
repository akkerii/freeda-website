const fs = require('fs');
const path = require('path');
const https = require('https');

// Read slice model
const modelPath = path.join(__dirname, 'slices/UseCaseHero/model.json');
const model = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

// Read Prismic auth
const authPath = path.join(process.env.HOME, '.prismic');
const auth = JSON.parse(fs.readFileSync(authPath, 'utf8'));

// Extract auth token from cookies
const cookies = auth.cookies;
const authToken = cookies.match(/prismic-auth=([^;]+)/)[1];

const repository = 'freeda-dev';

// Prepare request to push slice
const data = JSON.stringify({
  ...model,
  libraryID: 'slices'
});

const options = {
  hostname: 'prismic.io',
  port: 443,
  path: `/api/v2/slices/${repository}/libraries/slices/slices/${model.id}`,
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Cookie': cookies,
    'Authorization': `Bearer ${authToken}`
  }
};

console.log(`Pushing slice "${model.name}" to ${repository}...`);

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      console.log('✅ Slice pushed successfully!');
      console.log(responseData);
    } else {
      console.error(`❌ Failed to push slice (Status: ${res.statusCode})`);
      console.error(responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error pushing slice:', error);
});

req.write(data);
req.end();
