module.exports = {
  default: {
    require: ['features/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature']
  }
};
