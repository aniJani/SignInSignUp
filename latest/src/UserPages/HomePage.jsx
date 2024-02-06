import React from 'react'
import Sidenav from './HomePageComponents/Sidenav'
import Header1 from './HomePageComponents/Header1'


//import HomeIcon from '@mui/icons-material/Home';
//import HistoryIcon from '@mui/icons-material/History';
//import Diversity3Icon from '@mui/icons-material/Diversity3';
//import SettingsIcon from '@mui/icons-material/Settings';
//import MenuIcon from '@mui/icons-material/Menu';
//import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
//import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function HomePage() {
  return (
    <div>
      <nav>
            <Sidenav />
        </nav>
        <div className=  'bg-sky-600 overflow-y-auto'>
            <Header1 />
        </div>
    </div>
  )
}

export default HomePage