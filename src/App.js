import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "e48b85a5-2a55-4f49-80de-13453693f2ed"
            userName = "RobinReyes"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) =>
            <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;