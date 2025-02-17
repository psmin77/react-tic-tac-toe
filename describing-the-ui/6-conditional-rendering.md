## 조건부로 JSX 반환하기

- React 제어 흐름(조건문)은 JavaScript로 처리함
- 특정 데이터와 `if`/`return` 문 등을 사용해 분기 로직을 만들 수 있음

### 조건부로 null 사용하여 아무것도 반환하지 않기

- 특정한 경우에 아무것도 렌더링 하지 않기 위해 의도적으로 `null`을 반환할 수 있음

## 조건부로 JSX 포함시키기

### 삼항 조건 연산자

- JavaScript 조건 연산자(삼항 조건 연산자, `? :`)를 통해 중복 코드 개선 가능
- 중첩된 조건부 마크업이 너무 많아질 경우 별도 컴포넌트로 분리하여 정리 필요

```jsx
// before
if (isPacked) {
  return <li className="item">{name} ✅</li>;
}
return <li className="item">{name}</li>;

// after
return <li>{isPacked ? name + " ✅" : name}</li>;
```

### 논리 AND 연산자

- JavaScript 논리 AND 연산자(`&&`)를 통해 조건부 렌더링 가능
  - `true`: 오른쪽 값 반환
  - `false`: 전체 표현식 `false`
  - (Note) && 왼쪽에 숫자를 두지 말 것 → 자동 타입 변환되어 조건식으로 평가됨

```jsx
return (
  <li className="item">
    {name} {isPacked && "✅"}
  </li>
);
```

### 변수에 조건부로 JSX 할당하기

- `if`문과 변수를 통해 재할당하여 표시 가능

```jsx
let itemContent = name;

if (isPacked) {
  itemContent = name + " ✅";

  // 또는 JSX 할당도 가능
  itemContent = <del>{name + " ✅"}</del>;
}

return <li className="item">{itemContent}</li>;
```

## 요약

- React에서 JavaScript로 분기 로직을 제어함
- 조건부로 `if`문과 함께 JSX식 반환 가능
- 조건부로 변수에 JSX 저장하여 사용 가능
- JSX에서 삼항 조건 연산자, 논리 AND 연산자를 통해 조건부로 표출 가능
