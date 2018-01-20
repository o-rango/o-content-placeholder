exports.config = {
  namespace: 'o-content-placeholder',
  generateDistribution: true,
  bundles: [
    { components: [ 'o-content-placeholder-img' , 'o-content-placeholder-block'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
