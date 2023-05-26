import React, { useState, useRef } from 'react';
import {Container, Button, Alert, Form} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
      <div/>
  );
}
export default App;
