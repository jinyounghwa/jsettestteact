import './App.css';
import Hello from "./component/Hello";

const user = {
  name:"Tom",
  age:30

}

function App() {
  return (
    <div className='App'>
      <Hello  user={user} />
    </div>
  );
}

export default App;
