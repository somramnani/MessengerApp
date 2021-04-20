import {ChatEngine} from 'react-chat-engine'
import './App.css'

const App = () => {

  return (
		<ChatEngine
			height='100vh'
			userName={process.env.REACT_APP_USERNAME}
			userSecret={process.env.REACT_APP_USER_SECRET}
			projectID={process.env.REACT_APP_PROJECT_ID}
		/>
	);
}

export default App;