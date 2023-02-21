# vue-jest-study-2

## package 설치

```bash
npm install @vue/test-utils@2.0.0-rc.18 --save-dev
npm install @babel/preset-env --save-dev
npm install babel-core --save-dev
npm install babel-jest@27.5.1 --save-dev
npm install jest --save-dev
npm install jest-environment-jsdom@29.4.1  --save-dev
npm install vue3-jest --save-dev
npm install --save-dev jest-transform-stub
```

### package 설명

| package명              | package설명                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| @vue/test-utils        | vue test 라이브러리                                                                      |
| @babel/preset-env      | babel plugin 모음집                                                                      |
| babel-core             | 바벨을 이용하기 위한 필수 패키지입니다.                                                  |
| babel-jest             | jest테스트 코드를 es6 => es5변환                                                         |
| jest                   | jest 라이브러리                                                                          |
| jest-environment-jsdom | 브라우저에서 테스트를 실행하는 경우 DOM테스트를 하여야 하면 DOM 테스트를 위한 라이브러리 |
| vue3-jest              | vue파일을 vue3-jest를 통해 jest를 사용할 수 있도록 하는것                                |
| jest-transform-stub    | 이미지,css를 처리해준다.                                                                 |

## jest.config.js

> jest를 실행하기 위한 config 환경

```javascript
module.exports = {
  presets: ['@babel/preset-env'],
  moduleFileExtensions: [
    'js',
    'json',
    // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
    'vue',
  ],
  transform: {
    // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
    '.*\\.(vue)$': 'vue3-jest',
    // `babel-jest`를 사용하여 모든 js 파일(`*.js`)을 처리합니다
    '.*\\.(js)$': 'babel-jest',
    // 이미지 처리
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testMatch: ['**/*.spec.[jt]s?(x)', '**/*.test.[jt]s?(x)'],
  // node_modules 경로 하위에 있는 모든 테스트 파일을 대상에서 제외합니다
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
};
```

## mount와 shallowMount

### mount

> 자식의 컴퍼넌트 까지 렌더링 된것을 확인 할 수 있다. 다만 shallowMount를 많이 쓴다고 한다.

### shallowMount

> 자식의 컴퍼넌트까지 렌더링 하지는 않는다.

### 🙆‍♂️ jest 하면서 배운것 기록

## [20230201](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230201)

## [20230205](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230205)

## [20230207](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230207)

## [20230213](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230213)

## [20230214](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230214)

## [20230216](https://github.com/eorjs37/vue-jest-study-2/tree/master/record/20230216)
