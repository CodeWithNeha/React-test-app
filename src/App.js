import logo from './logo.svg';
import './App.css';
import User from './component/user.js'

function App() {
  return (
    <div>
      <h1>User</h1>
      <User name="Neha" description="FSWD"/>
      <User name="XYZ" description="Student" />
    </div>
  );
}

export default App;
