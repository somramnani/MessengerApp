import {ChatEngine} from 'react-chat-engine'
import LoginForm from "./components/LoginForm"
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID={process.env.REACT_APP_PROJECT_ID}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;   