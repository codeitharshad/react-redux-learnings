// Related docs are available at
// https://www.notion.so/React-Redux-Toolkit-Cheat-Sheet-Project-Overview-1e366b7cd3f580acacc9ce35ae163120

import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";

function App() {

  return (
    <>
      <div className="App">
        <CakeView />
        <IceCreamView />
      </div>
    </>
  );
}

export default App;
