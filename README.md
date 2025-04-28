# 🌟 React + Redux Toolkit (Project Overview)

---

## 🛠️ 1. Redux Toolkit Basics (`createSlice`)

✨ **Main Idea**: Slice = State + Actions + Reducers, all bundled neatly!

```javascript
const initialState = { numOfCake: 10 };

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => { state.numOfCake--; },
    restocked: (state, action) => { state.numOfCake += action.payload; },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
```

- 📦 `initialState` → defines the starting data.
- ⚡ `reducers` → how to **modify** the state.
- 🚀 **Exports**:
  - `reducer` → for the store.
  - `actions` → for dispatching.

✅ **Same structure** for `iceCreamSlice.js` too!

---

## 👥 2. React Components + Redux (Connecting UI)

Each feature has a **View Component**:

### 🍰 `CakeView.jsx`
```javascript
const numOfCake = useSelector((state) => state.cake.numOfCake);
const dispatch = useDispatch();

<button onClick={() => dispatch(ordered())}>Order Cake</button>
<button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
```

- 👀 **`useSelector`** → Reads **state** from store.
- 📣️ **`useDispatch`** → Sends **actions** to store.

---

### 🍦 `IceCreamView.jsx`
More interactive! Accepts user input for restocking:

```javascript
const [value, setValue] = useState(1);
const numberOfIceCreams = useSelector((state) => state.icecream.numberOfIceCreams);
const dispatch = useDispatch();

<input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
<button onClick={() => dispatch(restocked(value))}>Restock IceCream</button>
```

- 🎯 Controlled input with `useState`.
- ➡️ Dispatch dynamic payloads!

---

## 🏧 3. Store Setup (`store.js`)

Central hub where everything connects! 🔌

```javascript
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
  },
});

export default store;
```

- 🧹 Combine multiple slices (`cake`, `icecream`) into one store.
- 🌐 Single source of truth for app state.

---

## 📚 4. Quick Reference Table

| 🔥 Concept | 📝 Purpose | 🔍 Example |
| :-- | :-- | :-- |
| `createSlice` | Create state + actions + reducers | `cakeSlice.js`, `iceCreamSlice.js` |
| `useSelector` | Read from Redux store | `useSelector((state) => state.cake.numOfCake)` |
| `useDispatch` | Send actions to store | `dispatch(ordered())` |
| `configureStore` | Setup Redux store | `store.js` |

---

# 🌟 Key Takeaways

- 🧠 **Slices** group state and logic together.
- 🛠️ **useSelector** reads data from Redux.
- 📤 **useDispatch** fires actions to modify the store.
- 🏧 **Store** connects everything.
- 🖼️ **UI** reacts automatically to state changes.
