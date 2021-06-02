import './App.css';
import {ChatEngine} from 'react-chat-engine'
import LoginForm from './component/LoginForm'
import ChatFeed from './component/ChatFeed'
 
const App = ()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>

  return(
    <ChatEngine 
      height="100vh"
      projectID="ca9083a9-f4aa-4d40-8207-73bbb4b855b4"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  )
}

export default App