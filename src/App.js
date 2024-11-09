import Homepage from './pages/Homepage';
import { Provider } from 'react-redux';
import store from './utils/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Homepage />
      </Provider>
    </div>
  );
}

export default App;
