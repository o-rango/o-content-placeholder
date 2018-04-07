exports.config = {
  namespace: 'o-content-placeholder',
  outputTargets: [
    {
      type: 'dist',
      serviceWorker: false
    },
    {
      type: 'www',
      serviceWorker: false
    },
    {
      type: 'www',
      dir : 'docs',
      serviceWorker: false
    }
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
