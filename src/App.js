import "./App.css";

import ToggleSwitch from "./components/toggle-switch/toggle-switch.component";

function App() {
  return (
    <div className="App">
      Welcome to React, From Lenovo Yoga 7
      <ToggleSwitch
        items={[
          { id: 1, name: "Daily" },
          { id: 2, name: "Weekly" },
          { id: 3, name: "Monthly" },
        ]}
      />
    </div>
  );
}

export default App;
