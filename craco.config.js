const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.path.json')
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {alias: aliasMap}
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}