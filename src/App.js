import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
		<ChatEngine
			height='100vh'
			userName={process.env.REACT_APP_USERNAME}
			userSecret={process.env.REACT_APP_USER_SECRET}
			projectID={process.env.REACT_APP_PROJECT_ID}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;   