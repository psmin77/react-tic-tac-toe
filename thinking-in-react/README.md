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

## Step 4: State가 어디에 있어야 할 지 정하기

## Step 5: 역 데이터 흐름 추가하기

## 더 나아가기
