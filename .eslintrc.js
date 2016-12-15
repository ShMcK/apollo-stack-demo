module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'graphql'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: "react-app",
  globals: {
    resolveOwn: true
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  rules: {
    'prefer-template': 0,
    semi: [1, "never"],
    // 'graphql/template-strings': ['error', {
    //   env: 'apollo',
    //   schemaJson: require('./data/schema.json'),
    // }]
  }
}