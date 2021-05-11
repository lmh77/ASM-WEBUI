module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    // 'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-submodule-imports': ['off', '/@'],
    'no-implicit-dependencies': ['off', ['/@']],
    '@typescript-eslint/no-explicit-any': 'off' // 类型可以使用any
  }
}
