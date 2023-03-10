import "./App.css";
// import { SignupForm } from "./Components/SignupForm/SignupForm";
// import { ColorPicker } from "./Components/ColorPicker";
// import { Counter } from "./Components/Counter";
// import { Clock } from "./Components/Clock";
// import { Counter2 } from "./Components/Counter2";
// import { Friends } from "./Components/Friends";
import { News } from "./Components/News/News";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

function App() {
  return (
    <div style={containerStyles}>
      {/* <SignupForm /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <Counter /> */}
      {/* <Clock /> */}
      {/* <Counter2 /> */}
      {/* <Friends /> */}
      <News />
    </div>
  );
}

export default App;
