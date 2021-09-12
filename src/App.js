import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import Footer from './components/footer/footer.component';
import SocialHandle from './components/socials/social-handles.component';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<SocialHandle />
			<Switch>
				<Route exact path="/portfolio" component={HomePage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
