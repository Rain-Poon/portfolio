import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ResponsiveAppBar from './navbar';
import { Divider } from '@mui/material';
import './Contacts.css'

function Contacts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ResponsiveAppBar />
      <div style={{ flex: 1, backgroundColor: '#A3A8AC', display: 'flex', padding: '20px'}}>
        <div style={{ flex: 1, backgroundColor: '#F2F5F8', display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: "15px" }}>
            <h1>Rain Poon</h1>
            <Divider></Divider>
            <p>Dedicated and creative IS/ CS student with extensive experience in AI and Full-Stack Application Development. Agility to adapt to
              changes, fast learner and team player with an exceptional academic record and extensive internship experience.</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: "15px" }}>
            <a href="mailto:u3580090@connect.hku.hk" className="hover-span">
              <h3>E-mail</h3>
              <span>u3580090@connect.hku.hk</span>
            </a>
            <Divider></Divider>
            <a href="https://www.linkedin.com/in/rain-poon-717479207/" className="hover-span">
              <h3>LinkedIn</h3>
              <span>@Rain Poon</span>
            </a>
            <Divider></Divider>
            <a href="https://github.com/Rain-Poon" className="hover-span">
              <h3>GitHub</h3>
              <span>@Rain-Poon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
