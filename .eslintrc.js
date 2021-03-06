module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: 'eslint:recommended',
  globals: {
    'server': true,
    'document': true,
    'window': true,
    '$': true,
    'I18n': true,
    'Promise': true
  },
  parserOptions:{
    'ecmaFeatures': {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    'sourceType': 'module'
  },
  plugins: ['react'],
  rules:{
    'default-case': 'error',
    'curly': 'error',
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'eqeqeq': 'error',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-return-assign': [ 'error', 'always' ],
    'no-useless-call': 'error',
    'no-useless-return': 'error',
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'keyword-spacing': [ 'error', { before: true } ],
    'max-depth': [ 'error', 5 ],
    'max-len': [ 'error', 200 ],
    'max-nested-callbacks': [ 'error', 5 ],
    'max-params': [ 'error', 4 ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
   }
};
