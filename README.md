# 📌 3주차 과제[Mission3]

<p align="center">
	<img src="https://user-images.githubusercontent.com/57757719/131164005-90748391-781d-4d99-92aa-81c19f0b5c34.gif" width="100%"/>
</p>

<br>


과제 수행 기간: 8월 20일 ~ 8월 28일 오후 23시 59분

과제 리뷰 기간: 8월 29일 ~ 9월 2일

내용: **Simple List Todo 앱을 강화**

<br>

## 👩‍💻 요구 사항과 구현 내용
### 공통
- [x] 컴포넌트에 new를 붙이지 않고 쓸 경우 에러가 나도록 방어코드 적용

- [x] state를 갖는 컴포넌트의 경우, initialState를 받는 부분과 setState 함수에서 nextState를 받는 부분에서 state에 대한 validation을 적용
- [x] 가급적 변수는 const로 선언하며, 부득이한 경우에만 let을 사용

<br>

### TodoList
- [x] To do의 값에 isCompleted라는 값을 추가합니다. 그리고 TodoList의 Todo를 클릭하면 해당 값이 토글 되도록 만듭니다.
  - isCompleted가 true인 경우 text에 삭선이 그어지도록 해주세요. false로 바뀌면 삭선을 없애주세요.

- [x] Todo text 옆에 삭제 button을 만듭니다. 누르면 삭제 되도록 처리합니다.

<br>

### TodoCount
- [x] TodoCount 컴포넌트를 만듭니다.이 컴포넌트는 TodoList 아래에 렌더링 되어야 하며, 완료된 Todo의 갯수 / 전제 Todo 갯수를 표시해주면 됩니다.
  - 이때 TodoCount에서 TodoList에 직접 접근해서 데이터를 가져오면 안 됩니다.

### 추가 구현
- [x] 전체적인 CSS 적용

- [x] TodoList의 완료하지 못한 일들을 우선 순위를 높여 상단에 위차하도록 구현

