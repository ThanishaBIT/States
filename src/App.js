import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import List from './components/List';
import NewLogin from './components/NewLogin';
import Notification from './components/Notifications';
import Student from './components/Students';
import ThemeToogle from './components/ThemeToggle';
import Toggle from './components/Toggle';


function App() {
  return (
    <div className="App">
      <Student name="Thanisha" course="Full Stack" where="2025"/>
      <Counter></Counter>
      <Login></Login>
      <Notification></Notification>
      <Toggle></Toggle>
      <Form></Form>
      <NewLogin></NewLogin>
      <ThemeToogle></ThemeToogle>
      <List></List>
    </div>
  )
}

export default App;
