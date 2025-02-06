## 모의 시안과 함께 시작하기

- JSON API

```json
[
  { "category": "Fruits", "price": "$1", "stocked": true, "name": "Apple" },
  {
    "category": "Fruits",
    "price": "$1",
    "stocked": true,
    "name": "Dragonfruit"
  },
  {
    "category": "Fruits",
    "price": "$2",
    "stocked": false,
    "name": "Passionfruit"
  },
  {
    "category": "Vegetables",
    "price": "$2",
    "stocked": true,
    "name": "Spinach"
  },
  {
    "category": "Vegetables",
    "price": "$4",
    "stocked": false,
    "name": "Pumpkin"
  },
  { "category": "Vegetables", "price": "$1", "stocked": true, "name": "Peas" }
]
```

- 모의 시안

![image](https://ko.react.dev/images/docs/s_thinking-in-react_ui.png)

## Step 1: UI를 컴포넌트 계층으로 쪼개기

![components](https://ko.react.dev/images/docs/s_thinking-in-react_ui_outline.png)

- `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    - `ProductCategoryRow`
    - `ProductRow`
    - ⚠️ 테이블 헤더는 정렬 등 기능이 추가되어 복잡해질 경우 `ProductTableHeader`와 같은 컴포넌트로 분리하는 것이 좋음

## Step 2: React로 정적인 버전 구현하기

## Step 3: 최소한의 데이터로 UI State 표현하기

- state는 앱이 기억하고 변경할 수 있는 데이터의 최소 집합
- 중복 배제 원칙(Don't Repeat Yourself)
  - 가장 최소한의 state만 가지고 나머지는 필요에 따라 실시간으로 계산
  - ex. 상품의 개수가 필요하다면 배열의 길이 계산
- state 제외
  - 시간이 지나도 변하지 않는다면 X
  - 부모로부터 props를 통해 전달된다면 X
  - 다른 state나 props를 통해 계산 가능하다면 X
- 모의 시안의 state
  - 검색어, 체크박스
  - 원본 및 필터링 목록은 state 아님

### Props vs State

- Props
  - 함수를 통해 전달되는 인자와 같은 성격
- State
  - 컴포넌트의 메모리와 같은 성격
  - 컴포넌트가 몇몇 정보를 계속 따라가면서 상호작용(interaction)을 만듦

## Step 4: State가 어디에 있어야 할 지 정하기

- 애플리케이션 state 위치
  - 1. 해당 state를 기반으로 렌더링하는 모든 컴포넌트 찾기
  - 2. 공통되는 부모 컴포넌트 찾기 -> 계층에서 모두 포괄하는 상위 컴포넌트
  - 3. state 위치 결정
    - 대체적으로 공통 부모에 위치함
    - 또는 공통 부모 상위의 컴포넌트
    - 적절한 컴포넌트가 없다면 이를 소유하는 상위 컴포넌트를 하나 추가할 수 있음

## Step 5: 역 데이터 흐름 추가하기

## 더 나아가기
