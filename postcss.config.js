module.exports = {
    plugins: {
      'postcss-cssnext': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 100,
        propList: ['*'],
        exclude: /node_modules/i
      }
    }
  };