import Header from './components/Header';
import TariffCardList from './components/TariffCardList';
import './styles/TariffApp.css'
import './App.css';

function App() {
  return (
    <div className="TariffApp">
      <div className="app-container">
        <Header/>
        <div className="pricing-cards">
          <TariffCardList/>
        </div>
      </div>
    </div>
  );
}

export default App;
