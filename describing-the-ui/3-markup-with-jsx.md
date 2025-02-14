## JSX: JavaScript에 마크업 넣기

- React 렌더링 로직과 마크업이 같이 존재하는 문법
- React 컴포넌트는 React가 브라우저에 마크업을 렌더링할 수 있는 JavaScript 함수

## HTML을 JSX로 변환하기

## JSX의 규칙

### 1. 하나의 루트 엘리먼트로 반환하기

- 한 컴포넌트 안에서 여러 엘리먼트를 반환하려면 하나의 부모 태그로 감싸야 함
- 보기엔 HTML이지만 실제로는 JavaScript 객체로 변환되므로, 하나의 함수에서 두 개의 객체를 반환할 수 없기 때문에

### 2. 모든 태그는 닫아주기

### 3. 카멜 케이스 사용하기

- `class-name` → `claseName`

```jsx
<!-- Fragment -->
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    className="photo"
  >
  <ul>
    ...
  </ul>
</>
```

### TIP: JSX 변환기 사용하기

## 요약

- React 컴포넌트는 서로 관련있는 마크업과 렌더링 로직을 함께 그룹화함
- JSX는 HTML과 비슷하지만 몇 가지 차이점이 있으며, 변환기 사용할 수 있음
- 오류 메시지는 해결 방향을 알려줌
