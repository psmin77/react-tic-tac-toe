## 이벤트 핸들러 추가하기
- 함수를 정의하고 JSX 태그에 prop 형태로 전달해야 함
  1. 이벤트 발생시 호출할 이벤트 핸들러 함수 선언
      1. 주로 컴포넌트 내부에서 정의
      2. 일반적으로 `handle`로 시작하고 이벤트명을 붙인 함수명
          - ex. `handleClick`, `handleMouseEnter`
      3. 인라인 정의, 화살표 함수 가능
  2. 해당 함수 내부 로직을 구현
  3. 컴포넌트에 전달
- NOTE) 이벤트 핸들러 함수는 호출이 아닌 *전달*해야 함
    - `onClick={handleClick()}` X → `onClick={handleClick}` O
    - `onClick={alert(msg)}` X → `onClick={() => alert(msg}` O

### 이벤트 핸들러 내에서 Prop 읽기

- 이벤트 핸들러는 컴포넌트 내부에서 선언되므로 prop 접근 가능

### 이벤트 핸들러를 Prop으로 전달하기

- 컴포넌트가 그 부모 컴포넌트로 받은 prop을 이벤트 핸들러로 전달 가능

### 이벤트 핸들러 Prop 명명하기

- 사용자 정의 컴포넌트에서는 이벤트 핸들러 prop의 이름을 정할 수 있음
- 일반적으로 `on`으로 시작하는 네이밍 사용

### NOTE

- HTML 태그에 맞는 적절한 이벤트 핸들러를 사용하는지 주의할 것
    - ex. `<div onClick={handleClick}>` X → `<button onClick={handleClick}>` O

## 이벤트 전파

- 이벤트 핸들러는 자식 컴포넌트의 이벤트를 수신할 수 있음
- 이를 이벤트가 트리를 따라 “bubble” 되거나 “전파”된다고 표현
- 이벤트는 발생한 지점에서 시작하여 위로 전달됨
- NOTE) `onScroll`을 제외한 React 내 모든 이벤트는 전파됨

```jsx
// 1. 버튼 클릭 -> 2. 버튼의 alert -> div의 alert 실행
// 1. 툴바 클릭 -> 2. div의 alert 실행
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
```

### 전파 멈추기

- 이벤트 핸들러는 이벤트 오브젝트를 유일한 매개변수로 전달 받음
- 관습적으로 “event” 를 의미하는 `e`로 호출
- 이벤트가 전파되지 않도록 하려면 `e.stopPropagation()` 호출

### 전파의 대안으로 핸들러를 전달하기

- 부모로부터 전달받은 이벤트 핸들러를 호출하기 전에 다른 코드를 더 추가할 수 있음
- 부모 컴포넌트의 일부 추가 동작 + 자식 컴포넌트 이벤트 처리
- → 전파의 대안, 추적 용이

### 기본 동작 방지하기

- `e.preventDefault()` 호출하면 일부 기본 브라우저 동작 제한

## 이벤트 핸들러의 사이드 이펙트 여부

- 이벤트 핸들러는 사이드 이펙트를 위한 최고의 위치
- 예를 들어 타이핑에 반응하여 입력 값을 수정하거나, 버튼에 따라 데이터 변경하는 동작 등
- 단, 정보를 수정하기 전에 먼저 저장하기 위해 `state`를 이용

## 요약

- 특정 요소에 prop으로 함수를 전달하여 이벤트 처리할 수 있음 (이벤트 핸들러)
    - 호출이 아닌 ***전달***만 할 것
    - 별도 함수 또는 인라인, 화살표 함수 가능
    - 컴포넌트 내부에 정의되므로 다른 prop 접근 가능
    - 부모에서 선언하여 자식에게 prop으로 전달 가능
    - 사용자 정의 이벤트 핸들러의 이름은 명명 가능
- 이벤트는 위쪽으로 전파됨
    - `e.stopPropagation()`: 전파 방지
    - `e.preventDefault()`: 기본 동작 방지