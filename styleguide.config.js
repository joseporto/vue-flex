const path = require('path')

module.exports = {
  title: 'Vue Flex',
  components: 'src/components/**/[A-Z]*.js',
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  sections: [
    {
      name: 'General',
      components: './src/components/Layout/**/*.js'
    },
    {
      name: 'Layout',
      content: './src/components/Layout/layout.md',
      description: `Let's take a look at how we can define layouts`
    },
    {
      name: 'Alignment',
      content: './src/components/Layout/alignment.md',
      description: 'Vertical and Horizontal alignment'
    },
    {
      name: 'Ordering',
      content: './src/components/Layout/ordering.md',
      description: 'Ordering of content inside Flex components'
    },
    {
      name: 'Miscellaneous',
      content: './src/components/Layout/misc.md',
      description: 'Additional attributes'
    },
    {
      name: 'Helpers',
      components: './src/components/Helpers/**/*.js'
    }
  ],
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/styles/main.scss'),
    path.join(__dirname, 'src/styles/styleguide.scss')
  ],
  ribbon: {
    text: 'Fork me on Gitlab',
    url: 'https://gitlab.com/porto/vue-flex#readme'
  }
}
