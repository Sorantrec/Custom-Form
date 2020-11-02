// import logo from './logo.svg';
import './App.css';
import './assets/scss/general-styles/general.scss';
import Form from './components/Form/Form';
import stylesModule from './App.module.scss';

function App() {
  return (
    <main className={stylesModule.container}>
      <p className={stylesModule.title}>Your account</p>
      <Form />
    </main>
  );
}

export default App;
