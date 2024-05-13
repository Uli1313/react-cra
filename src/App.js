import { useEffect, useState } from 'react'

// 外部套件
import axios from 'axios'

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss'

function App() {
  const [text, setText] = useState('')

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    (async() => {
      const path = process.env.REACT_APP_API
      const result = await axios.get(path)
      console.log(result.data.results[0])
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="#" className="btn btn-primary">按鈕</a>
        {text}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="sampleText" text="文字" value={text} onChangeHandler={onChangeHandler} />
      </header>
    </div>
  );
}

export default App;
