require('@babel/register')({
  extensions: ['.js', '.jsx'],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

module.exports = {
  spec_dir: "spec",
  spec_files: [
    "**/*[sS]pec.js"
  ],
  helpers: [],
  env: {
    stopSpecOnExpectationFailure: false,
    random: false,
    forbidDuplicateNames: true
  }
};
