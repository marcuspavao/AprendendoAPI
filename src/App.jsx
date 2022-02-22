import './App.css';
import AppRoutes from './routes';
import {Provider} from 'react-redux'
import { store } from './store';

function App() {
  return (
    <AppRoutes />
  );
}
export default App;
