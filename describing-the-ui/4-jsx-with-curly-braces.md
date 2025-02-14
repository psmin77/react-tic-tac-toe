## 따옴표로 문자열 전달하기

- 문자열을 동적으로 사용하려면 `{}`로 전달하여 JavaScript 값 사용 가능

```jsx
<img
  className="avatar"
  src="https://i.imgur.com/7vQD0fPs.jpg"
  alt="Gregorio Y. Zara"
/>;

// 동적 전달
const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
const description = "Gregorio Y. Zara";
return <img className="avatar" src={avatar} alt={description} />;
```

## 중괄호 사용하기

- 중괄호 사이에서 JavaScript 사용 가능 (함수 등)

### 중괄호 사용하는 곳

1. JSX 태그 안의 문자
   1. `<h1>{name}</h1>`
2. `=` 뒤에 오는 어트리뷰트
   1. `src={avatar}`

## “이중 중괄호” 사용하기: CSS와 다른 객체

- JSX 객체 전달 시 `{{}}` 이중 중괄호 사용해야 함

## JavaScript 객체와 중괄호에 대해 더 알아보기

- 여러 표현식을 하나의 객체로 옮기고 JSX로 참조할 수 있음
- JSX는 JavaScript를 사용하여 데이터와 논리를 구성할 수 있는 매우 작은 템플릿 언어

```jsx
const person = {
  name: "Gregorio",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

## 요약

- JSX 어트리뷰트를 따옴표(`’’`)로 사용하면 문자열 전달
- 중괄호(`{}`)를 사용하면 JavaScript 논리와 변수를 마크업으로 전달 가능
- JSX 태그 내부 또는 어트리뷰트의 `=` 뒤에서 사용
- 이중 중괄호(`{{}}`)는 중괄호 안에 들어 있는 JavaScript 객체
