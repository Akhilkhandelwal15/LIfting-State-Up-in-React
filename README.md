Lifting state up means moving shared state to the closest common parent of two or more components, so they can access and update it through props.

An input field (InputComponent) and a display (DisplayComponent) both need the same text → so the parent (LiftingStateUp) holds that text state and passes it down.
 
 
             ┌────────────────────┐
             │  LiftingStateUp    │   <-- Parent Component (owns state)
             │────────────────────│
             │                    │
             │ inputValue         │◄──────────────┐
             │ setInputValue()    │               │ (from InputComponent)
             └─────▲────────┬─────┘               │
                   │        │                     │
       passes via props     │                     │ calls setInputValue()
                   │        │                     │
          ┌────────┘        └────────┐            │
          ▼                          ▼            │
┌────────────────────┐   ┌────────────────────┐   │
│   InputComponent   │   │  DisplayComponent  │   │
│────────────────────│   │────────────────────│   │
│ Receives:          │   │ Receives:          │   │
│ - inputValue       │   │ - inputValue       │   │
│ - setInputValue()  │   │                    │   │
│                    │   │ Displays value     │   │
│ onChange calls     │   │ from props         │   │
│ setInputValue()    │   └────────────────────┘   │
└───────────▲────────┘                            │
            |                                     │
             ◄────────────────────────────────────┘
            (Child triggers parent's update via function)
