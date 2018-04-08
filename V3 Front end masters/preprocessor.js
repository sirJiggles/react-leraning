const tsc = require('typescript');
const tsConfig = {
  compilerOptions: {
    types: ['react', 'jest', 'webpack-env', 'react-router-dom', 'react-dom'],
    outDir: './dist/',
    sourceMap: true,
    noImplicitAny: true,
    module: 'commonjs',
    target: 'es5',
    lib: ['dom', 'es2015'],
    jsx: 'react',
    declaration: true
  },
  include: ['./js/**/*'],
  exclude: ['./js/__tests__/**/*', './node_modules']
};

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  }
};
