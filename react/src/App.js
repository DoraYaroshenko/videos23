// import logo from './logo.svg';
import './App.css';
import AppRouters from './appRouters';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AppRouters />
      {/* קומפנינטה שתציג את ההודעות טוסט */}
      <ToastContainer theme="colored"/>
    </div>
  );
}

export default App;
