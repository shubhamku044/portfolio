import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import ProjectsPage from './pages/project/projects.page';
import Footer from './components/footer/footer.component';
import TestimonialPage from './pages/testimonial/testimonials.page';
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
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/projects" component={ProjectsPage} />
				<Route exact path="/testimonials" component={TestimonialPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
