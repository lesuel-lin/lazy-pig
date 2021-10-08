module.exports = {
  root: true,
  rules: {
    "no-console": "off",
    "no-unused-vars": "off", //重要 var 变量为引入
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'generator-star-spacing': 'off',
    // allow debugger during development
    // 'vue/no-parsing-error': [2, {
    //   'x-invalid-end-tag': false
    // }],
    "vue/no-parsing-error": ["off"],
    'no-undef': 'off',
    'camelcase': 'off',
    'template-curly-spacing': [2, 'never'],
    'indent': ['error', 4],
    'comma-dangle': [2, 'never'] // 逗号不使用悬挂
  },
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    parser: 'babel-eslint'
  },
  parser: "vue-eslint-parser",
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}