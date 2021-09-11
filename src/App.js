import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import SocialHandle from './components/socials/social-handles.component';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<SocialHandle />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
