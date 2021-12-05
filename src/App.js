import onsjabeur from './onsjabeur.jpg';
import './App.css';
import Profile from './profile/Profile';
import Avatar from '@mui/material/Avatar';
import AccountMenu from './Menu'

function App() {
  const alertMyInput = name => alert(name);
  
  return (
    <div className="App">
      <AccountMenu/>
      <Profile fullName="Ons Jabeur" bio= "is a Tunisian professional tennis player who has
       a career-high WTA ranking of No. 16, achieved on 27 September 2021. In 2021, she created history 
       by becoming the 
      first Arab woman to win a WTA tour title. She has a WTA Tour-high 44 match victories this season."
      profession="professional tennis player" alertMyInput={alertMyInput}/>

      <Avatar src= {onsjabeur} alt="Person's image" style={{margin:"auto", width: 56, height: 56}}/>
       
    </div>
  );
}

export default App;
