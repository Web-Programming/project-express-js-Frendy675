// Test sederhana untuk memastikan app.js dapat dimuat tanpa syntax error
try {
  require('./app');
  console.log('App loaded OK');
} catch (err) {
  console.error('App failed to load:', err);
  process.exit(1);
}
