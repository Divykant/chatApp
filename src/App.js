/*import { ChatEngine } from 'react-chat-engine';
import Loginform from './components/LoginForm';
 import ChatFeed from './components/ChatFeed';
 import './App.css';
 const projectID = '6d0b2013-a8be-4883-b713-ba9a2f0ccbdc';

 const App =() =>{

  if(!localStorage.getItem('username')) return <LoginForm />;
   return(
     <ChatEngine
      height="100vh"
      projectID= {projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
   );
 };

 export default App;
 */

import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "6d0b2013-a8be-4883-b713-ba9a2f0ccbdc";

const App = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
