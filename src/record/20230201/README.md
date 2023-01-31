## 2023-02-01

### ToDoList.vue 컴퍼넌트 테스트

#### 1. list가 0개 인 경우 '검색결과가 없습니다'.

> shallMount에서 얻은 wrapper를 통해 .no-list를 가진 class를 찾는다.  
> 그리고 .no-list에 대한 class의 text를 얻어 text가 "리스트가 존재하지 않습니다." 라는것을 보여준다.

```javascript
test('첫 로드 시  list는 0개입니다.', () => {
  expect(wrapper.find('.no-list').text()).toBe('리스트가 존재하지 않습니다.');
});
```

#### 2. list가 1개 이상인 경우 list 보여줄것

> shallMount에서 얻은 wrapper를 통해 1개 이상일 경우에 대해서는  
> setProps를 통해 list를 세팅해준다. 그리고 1개 이상일 경우 .list를 가진 class를 찾아 존재하는지 확인한다. 존재 여부에 따라 list 1개 이상인 것을 판단한다.

```javascript
test('list가 한개 이상일 경우 ', async () => {
  await wrapper.setProps({
    list: [{ idx: 1, text: '' }],
  });
  expect(wrapper.find('.list').exists()).toBeTruthy();
});
```

#### 99. 알게 된것

- find함수를 통해 class를 검색 할 수 있다. 그리도 dom에 접근 가능하다.
- setProps를 통해 props의 데이터를 설정할 수 있다.
- toBeTruthy를 통해 참인 것에 대해 존재를 확인하였다.
