## 컴포넌트에 props 전달하기

### 1단계: 자식 컴포넌트에 props 전달하기

- HTML 어트리뷰트처럼 props를 전달할 수 있음
- cf. 이중 괄호(`{{}}`)는 JSX 중괄호 안의 객체

```jsx
export default function Profile() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}
```

### 2단계: 자식 컴포넌트 내부에서 props 읽기

- `function Component()` 인수 안에서 쉼표로 구분하여 읽을 수 있음
- 함수의 인수와 동일한 역할
- React 컴포넌트 함수는 하나의 인자, props 객체를 받음

```jsx
// 구조 분해 할당
function Avatar({ person, size }) {
  // person과 size는 일반 변수처럼 사용 가능함
}

// 실제로는 props 객체 하나를 받음
function Avatar(props) {
  let person = props.person;
  let size = props.size;
}
```

## prop의 기본값 지정하기

- 변수 바로 뒤에 `=` 와 함께 기본값 지정 가능
  - `undefined`일 때 지정
  - `null` 또는 `0`일 때는 지정되지 않음

## JSX spread 문법으로 props 전달하기

- 반복되는 코드가 있다면 spread 문법(`…`)으로 전달 가능
- 제한적으로 사용해야 함

## 자식을 JSX로 전달하기

- 컴포넌트 자체를 중첩할 때 `{children}`으로 받을 수 있음

```jsx
import Avatar from "./Avatar.js";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
```

## 시간에 따라 props가 변하는 방식

- Props는 처음 한 번만 아니라 모든 시점에서 반영함
- 단, 직접 변경하는 것이 아닌 부모 컴포넌트에 새로운 객체를 전달하도록 **요청**해야 함

## 요약

- Props를 전달하려면 HTML 어트리뷰트와 동일하게 JSX 추가함
- Props를 읽으려면 구조 분해 할당 문법을 사용함
- undefined인 경우 기본값 지정 가능
- 모든 props를 전달하기 위해 반복적인 코드 대신 spread 문법을 사용 가능하지만, 남용하지 말 것
- 중첩된 JSX는 자식 컴포넌트로 전달 가능
- Props는 읽기 전용 스냅샷으로, 렌더링마다 새로운 버전을 전달 받음
  - 직접 변경할 수 없으며 상호 작용이 필요한 경우 state 설정
