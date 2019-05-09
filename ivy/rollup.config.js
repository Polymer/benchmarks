import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'ivy.js',
  output: {
    file: 'ivy.bundle.js',
    format: 'esm',
  },
  plugins: [resolve()],
};
