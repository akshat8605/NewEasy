import React ,{useState} from 'react';
import  EasyInfo from './components/EasyInfo/EasyInfo';
import  MainLogo from './components/MainLogo/MainLogo';
import Particles from 'react-particles-js';
import Slidebar from './components/Sidebar/Slidebar';
import './HomePage.css'

import  BottomNavigation from './components/BottomNavigation/BottomNavigation';
import  NavigationBar from './components/NavigationBar/NavigationBar';
//import  SignIn from './HomePage/components/SignIn/SignIn';
const particlesparam={
particles: {
  number :{
    value:30,
    density:
    {enable:true,value_area:2525.2724532232724}

  },
  line_linked: {
    shadow: {
    	enable: true,
      color: "#3CA9D1",
      blur: 5
      }
    }
  },
  polygon: {
      enable: true,
      type: 'inside',
      move: {
        radius: 10
      },
      
  }
}
function HomePage() {
  const [togelstate,settogelstate] = useState(false);

  const togel=()=>{
    console.log("togel",togelstate);
    settogelstate(!togelstate);
  }
  return (
    <div className="center ">
        <Particles className= 'Particles' param={particlesparam}/>
        <Slidebar  state={togelstate}/>
        <NavigationBar onClick={togel}/>
        <MainLogo onClick={togel}/>
        <EasyInfo/>
        <BottomNavigation/>
        <Particles className= 'Particles' param={particlesparam}/>
    </div>
  );
}

export default HomePage;
