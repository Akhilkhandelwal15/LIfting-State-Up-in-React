🔼 Lifting State Up in React
Lifting state up is a React pattern where shared state is moved to the nearest common parent component so multiple child components can access and update it via props. This ensures a single source of truth and helps keep components in sync.

🧩 Example Use Case:
An input field and a display component both need the same text value — so the parent holds the state and passes it down.


### 🔁 Lifting State Up – Data Flow Diagram

```
LiftingStateUp (Parent)
│
├── holds: inputValue, setInputValue
│
├── InputComponent
│   └── receives: inputValue, setInputValue
│   └── onChange calls setInputValue()
│
└── DisplayComponent
    └── receives: inputValue
    └── displays: inputValue
```
