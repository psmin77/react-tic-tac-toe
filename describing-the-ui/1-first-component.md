## 컴포넌트: UI 구성 요소

- HTML 마크업과 스타일을 위한 CSS, 상호작용을 위한 JavaScript가 결합하여 모든 UI의 기반이 됨
- 이를 재사용 가능한 UI 요소인 ‘컴포넌트’로 결합할 수 있음
- 프로젝트 규모에 따라 컴포넌트 재사용성 중요

## 컴포넌트 정의하기

- React 컴포넌트는 마크업으로 추가할 수 있는 JavaScript 함수

### 1단계: 컴포넌트 내보내기

- `export default` 접두사는 표준 JavaScript 구문

### 2단계: 함수 정의하기

- `function App() {}`을 통해 JavaScript 함수를 정의할 수 있음
- 함수 이름은 반드시 대문자로 시작해야 함

### 3단계: 마크업 추가하기

- JavaScript 안에 마크업을 삽입할 수 있는 구문 = JSX
- 반환문을 한 줄로 넣을 수 없는 경우 괄호로 묶어야 함

## 컴포넌트 사용하기

- 컴포넌트는 다른 컴포넌트와 중첩할 수 있음

```jsx
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### 브라우저에 표시되는 내용

- HTML 태그는 소문자
  - `<section>`, `<h1>`
- 컴포넌트는 대문자로 시작
  - `<Profile />`

```jsx
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

### 컴포넌트 중첩 및 구성

- 컴포넌트는 같은 파일에 여러 컴포넌트를 포함할 수 있으며, 별도의 파일로 분리도 가능
  - 컴포넌트의 importing과 exporting
- 단, 컴포넌트 안에서 다른 컴포넌트를 정의하는 것은 불가
  - 필요한 경우 props 전달
- 다른 컴포넌트를 포함하고 렌더링하는 컴포넌트를 부모 컴포넌트, 하위 컴포넌트를 자식 컴포넌트라고도 함

## 요약

- React를 사용하면 재사용 가능한 UI 요소인 컴포넌트를 만들 수 있음
- React 앱에서 모든 UI는 컴포넌트
- React 컴포넌트는 일부 사항을 제외하면 일반적인 JavaScript 함수임
  1. 컴포넌트 이름은 항상 대문자로 시작
  2. JSX 마크업을 반환해야 함
