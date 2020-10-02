import React from 'react';
import gh from './GitHub-Mark.svg';
import reddit from './reddit.svg';
import './App.css';

function App() {
    return (<div className="App">
        <header className="App-header">
            <p>Site under development</p>
            <div className="social">
                <a href="https://github.com/laspruca"><img src={gh} alt=""/></a>
                <a
                href="https://www.reddit.com/user/laspruca"><img src={reddit} alt=""/></a>
            </div>
        </header>
    </div>);
}

export default App;
