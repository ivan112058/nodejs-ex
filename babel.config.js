module.exports = {
  dev: {
    host: process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  },
  presets: [
    '@vue/app'
  ]
}
