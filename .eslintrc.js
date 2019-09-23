module.exports = {
  env: {
    node: true, 
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  parser: "babel-eslint",  
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],    
    "implicit-arrow-linebreak": "off",    
    "comma-dangle": "off",    
    "indent": "off",    
    "no-trailing-spaces": "off"  
  },
};
