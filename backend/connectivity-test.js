// Node.js HTTP client test to bypass PowerShell HTTP issues
import http from 'http';

const testEndpoint = (host, port, path) => {
  return new Promise((resolve, reject) => {
    const req = http.get({ host, port, path }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    req.setTimeout(5000, () => req.destroy());
  });
};

async function runTests() {
  console.log('Testing backend connectivity...\n');
  
  const tests = [
    { name: 'Test Server Ping', host: '127.0.0.1', port: 4001, path: '/ping' },
    { name: 'Main Backend Health', host: '127.0.0.1', port: 4000, path: '/health' },
    { name: 'Crypto Wallets Endpoint', host: '127.0.0.1', port: 4000, path: '/api/order/crypto-wallets' }
  ];
  
  for (const test of tests) {
    try {
      const result = await testEndpoint(test.host, test.port, test.path);
      console.log(`✓ ${test.name}: HTTP ${result.status}`);
      if (result.data) console.log(`  Response: ${result.data.substring(0, 100)}${result.data.length > 100 ? '...' : ''}`);
    } catch (error) {
      console.log(`✗ ${test.name}: ${error.code || error.message}`);
    }
  }
}

runTests().catch(console.error);