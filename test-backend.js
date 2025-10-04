// Simple backend connectivity test
import http from 'http';

console.log('Testing backend connectivity...');

const testEndpoints = [
  '/health',
  '/api/order/settings',
  '/api/product/user/list'
];

async function testEndpoint(path, method = 'GET', data = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: '127.0.0.1',
      port: 4000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let responseData = '';
      res.on('data', chunk => responseData += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          data: responseData,
          success: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        status: 'ERROR',
        data: err.message,
        success: false
      });
    });

    if (data && method === 'POST') {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function runTests() {
  // Test health endpoint
  console.log('\n1. Testing /health endpoint...');
  const healthResult = await testEndpoint('/health');
  console.log(`   Status: ${healthResult.status}`);
  console.log(`   Response: ${healthResult.data.substring(0, 100)}...`);

  // Test settings endpoint
  console.log('\n2. Testing /api/order/settings endpoint...');
  const settingsResult = await testEndpoint('/api/order/settings');
  console.log(`   Status: ${settingsResult.status}`);
  console.log(`   Response: ${settingsResult.data.substring(0, 150)}...`);

  // Test product list endpoint
  console.log('\n3. Testing /api/product/user/list endpoint...');
  const productsResult = await testEndpoint('/api/product/user/list', 'POST', { limit: 3 });
  console.log(`   Status: ${productsResult.status}`);
  console.log(`   Response: ${productsResult.data.substring(0, 150)}...`);

  console.log('\nBackend connectivity test completed!');
}

runTests().catch(console.error);