import logo from './logo.svg';
import './App.css';
import DatVeXemPhimRedux from './DatVeXemPhimRedux/DatVeXemPhimRedux';
import { Provider } from 'react-redux';
import { store } from './redux/configStore'
function App() {
  return (
    //Provider sẽ cung cấp cho các component bên trong nó những tính năng từ store
    <Provider store={store}>
      <DatVeXemPhimRedux />
    </Provider>
  );
}

export default App;
