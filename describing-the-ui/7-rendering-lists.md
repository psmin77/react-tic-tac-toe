## 배열을 데이터로 렌더링하기

- 형태가 유사한 다른 데이터를 동일한 컴포넌트의 여러 인스턴스로 표현할 때 JavaScript 객체와 배열에 저장하고 `map`과 `filter` 메서드 등을 통해 컴포넌트 리스트를 렌더링할 수 있음

```jsx
const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
```

## 배열의 항목들을 필터링하기

- 특정 데이터나 조건에 따라 표시하고 싶다면 `filter` 메서드를 사용할 수 있음
- cf. 화살표 함수는 암시적으로 리턴하므로 ‘`return`’ 문이 필요하지 않음
  - 중괄호(`{}`)가 오는 경우 명시적으로 `return` 해야 함

```jsx
const chemists = people.filter((person) => person.profession === "chemist");
```

## `key` 사용하여 순서 유지하기

- 각 배열 항목을 고유하게 식별할 수 있는 문자열 또는 숫자를 `key`로 지정해야 함
- (Note) `map` 호출 내부의 JSX 엘리먼트에는 항상 `key`가 필요함
- `key`는 배열의 정렬, 이동, 삽입, 삭제 등 올바른 데이터 업데이트를 위해 필요함
- cf. 여러 개의 DOM 노드를 렌더링하는 경우
  - 단일 `<div>`로 그룹화하거나 `<Fragment>` 문법 사용
  - Fragment는 렌더링 이후 DOM에서 사라짐

```jsx
import { Fragment } from "react";

// ...

const listItems = people.map((person) => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));
```

### `key`를 가져오는 곳

- 데이터 소스마다 다른 key 소스를 제공함
  - 데이터베이스: 고유한 key 또는 id 사용
  - 로컬 데이터: `crypto.randomUUID()` 또는 `uuid` 같은 패키지 사용

### key 규칙

- key는 형제 간 고유해야 함
  - 같은 key를 다른 배열의 JSX 노드에 key로 사용해도 됨
- key는 불변

### React에 key가 필요한 이유

- 재정렬 또는 삭제로 인한 위치가 변경되더라도 React가 생명주기 내내 해당 항목을 식별할 수 있도록 함
- (Note) 배열의 인덱스, `Math.random()` 권장하지 않음

## 요약

- 컴포넌트에서 배열이나 객체와 같은 데이터 구조로 이동하는 방법
- JavaScript의 `map`과 `filter`를 사용하여 유사한 컴포넌트 집합을 생성하고 필터링하는 방법
- 각 컴포넌트에 key를 설정하여 데이터가 변경되더라도 React가 추적할 수 있도록 함
