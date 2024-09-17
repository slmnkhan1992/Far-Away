import Logo from './Components/LogoArea/Logo'
import Form from './Components/FormArea/Form'
import Packinglist from './Components/PackinglistArea/Packinglist'
import Stats from './Components/StatsArea/Stats'
import { useState } from 'react'


function App() {
  const [itemList, setItemList] = useState([])

  return (
    <div>
    {/* LogoComponent */}
    <Logo />

    {/* formComponent */}
    <Form itemList={itemList} setItemList={setItemList}/>

    {/* packinglist Component */}

    <Packinglist itemList={itemList} setItemList={setItemList}/>


    {/* Stats Component */}

    <Stats itemList={itemList} />

    </div>
  );
}

export default App;
