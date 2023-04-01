import * as React from 'react';
import './style.css';
import {useState} from 'react';
import {useEffect} from 'react';



export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    function handleEnter(event) {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    }

    document.addEventListener('keypress', handleEnter);

    return () => {
      document.removeEventListener('keypress', handleEnter);
    };
  });

  function handleSubmit() {
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleEnter} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}