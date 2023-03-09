import "./App.css";
import { SignupForm } from "./Components/SignupForm/SignupForm";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

function App() {
  return (
    <div style={containerStyles}>
      <SignupForm />
    </div>
  );
}

export default App;
