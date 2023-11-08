import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './NavBar/Navbar';
import Taskbar from './Taskbar/Taskbar';
import Content from './Content/Content';
import  {HistoryForm } from './HistoryForm/HistoryForm';
import './stylesAdmin.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Taskbar />
      <Content />
      <HistoryForm />
    </div>
  );
}

export default App;

