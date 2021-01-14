import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Pix from './components/Pix/index';
import Benefit from './components/Benefit/index';
import Account from './components/Account/index';
import Credit from './components/Credit/index';
import Reward from './components/Reward/index';
import Relationship from './components/Relationship/index';
import Community from './components/Community/index';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Pix />
      <Benefit />
      <Account />
      <Credit />
      <Reward />
      <Relationship />
      <Community />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);