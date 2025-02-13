## Root 컴포넌트란

- 모든 컴포넌트들은 `App.js`라는 root 컴포넌트 파일에 존재
- 설정에 따라 다른 파일에 위치할 수도 있음

## 컴포넌트를 import하거나 export 하는 방법

- 다른 곳에서도 컴포넌트를 사용한다면 별도 파일로 분리하거나 옮기는 것이 좋음 → 재사용성
- 이동 단계
  1. 컴포넌트를 추가할 JS 파일 생성
  2. 새로 만든 파일에서 함수 컴포넌트를 **export** (default 또는 named export)
  3. 사용할 파일에서 **import**

### Default와 Named Exports

- 한 파일에서는 **default export**는 하나만, **named export**는 여러 개 가능
- Default export
  - import 시에 다른 이름으로 가져올 수 있음
  - 일반적으로 한 파일에서 하나의 컴포넌트만 export 할 때 사용
  - ex. `import Button from ‘./button.js’` → `import Banana from ‘./button.js’` 가능
- Named export
  - import 시에 같은 이름으로만 가져올 수 있음
  - 한 파일에서 여러 개의 컴포넌트를 export 할 때 사용

## 한 파일에서 여러 컴포넌트

- 한 파일에서 하나의 default export만 가능하므로, 이외에는 named export로 사용

```jsx
// Gallery.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
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

// App.js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
```

## 요약

- Root 컴포넌트란
- 컴포넌트를 import 하거나 export 하는 방법
- default 또는 named imports와 export 사용
- 한 파일에서 여러 컴포넌트를 export 하는 방법
