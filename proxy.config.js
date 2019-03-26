const proxy = [
    {
      context: '/api',
      target: 'http://localhost:5000',
      pathRewrite: {'^/v1' : ''}
    }
  ];
  module.exports = proxy;