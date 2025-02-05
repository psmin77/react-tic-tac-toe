## 컴포넌트 생성 및 중첩

- React 앱은 컴포넌트로 구성
- 컴포넌트는 고유한 로직과 모양을 가진 UI(사용자 인터페이스)의 일부
- 다른 컴포넌트 안에서 중첩 가능
- 컴포넌트 사용할 때는 항상 대문자로 시작해야 함
  - HTML 태그는 소문자
  - ex. `<MyButton />` ↔ `<div><h1/></div>`

## JSX로 마크업 작성

- 자바스크립트에서 확장한 마크업 문법
- 컴포넌트는 최상단 하나의 부모 요소로 감싸야 함

## 스타일 추가

- `className` : CSS 클래스 지정

## 데이터 표시

- 중괄호(`{}`) 사용하여 변수 삽입하여 데이터 사용 가능
  - 자바스크립트 이스케이프(Escape Into JavaScript)
- 중괄호 안에서 문자열 연결과 같은 복잡한 표현식도 가능
  - ex. `{’Photo of ‘ + user.name}`

## 조건부 렌더링

- 자바스크립트와 동일한 조건문으로 JSX 사용 가능

```jsx
<div>{isLoggedIn ? <Admin /> : <LoginForm />}</div>
```

## 리스트 렌더링

- `for`문 및 `map` 함수와 같은 자바스크립트 기능으로 컴포넌트 리스트 렌더링
- `key` 어트리뷰트 사용
  - 삽입, 삭제 또는 재정렬 등의 작업을 위해 해당 항목을 고유하게 식별하는 데이터를 전달해야 함

## 이벤트 응답

- 컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 응답할 수 있음
- 이벤트 핸들러 함수를 호출하지 않고 전달만 해야 함 (소괄호 없음)
  - → 사용자가 버튼을 클릭할 때 호출

```jsx
function MyButton() {
  function handleClick() {
    alert("Click!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

## 화면 업데이트

- 컴포넌트가 특정 정보를 저장하기 위해 state 변수 선언
  - `[count, setCount] = useState(0);`
  - 초기값 0 전달하여 `count = 0` 으로 선언됨
  - `count` 값을 변경하기 위해 `setCount(변경값)` 실행
- 각 컴포넌트마다 고유한 변수를 가지며, 다른 컴포넌트에 영향을 주지 않음

## Hook 사용

- Hook : `use`로 시작하는 함수
  - `useState` : React에서 제공하는 내장 Hook
- 컴포넌트의 상단에서만 Hook 호출 가능
  - 조건이나 반복에서 사용하려면 새 컴포넌트로 만들어야 함

## 컴포넌트 간 데이터 공유

- `state`를 개별 컴포넌트가 아닌 모든 버튼이 포함된 가장 가까운 컴포넌트(위쪽)로 이동해야 함
- props : JSX 중괄호를 사용하여 데이터 및 함수 전달

```jsx
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
```
