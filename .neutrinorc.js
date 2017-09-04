module.exports = {
  use: [
    ['neutrino-preset-airbnb'],
    ['neutrino-preset-react', {
      html: { title: 'Epic React App' },
    }],
    neutrino => (
      neutrino.config.entry('vendor')
      .add('react')
      .add('react-dom')
      .add('react-hot-loader')
      .add('react-router-dom')
      .add('react-async-component')
    ),
    // ['neutrino-middleware-styles-loader', {
    //   minimize: false,
    //   // extractCSS: false,
    //   sourceMap: true,
    //   // postcss: {},
    //   // cssModules: false,
    //   // autoprefixer: false
    // }],
    './neutrino-custom.js'
  ],
}
