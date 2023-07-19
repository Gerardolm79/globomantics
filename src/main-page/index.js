import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Header 
        title="House solutions"
        subtitle="Providing houses all over the world." />
    </div>
  );
}

export default App;
