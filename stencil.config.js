exports.config = {
  namespace: 'o-content-placeholder',
  generateDistribution: true,
  bundles: [
    { components: ['o-content-placeholder' , 'o-content-placeholder-head' , 'o-content-placeholder-img' , 'o-content-placeholder-text'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
