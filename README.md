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
