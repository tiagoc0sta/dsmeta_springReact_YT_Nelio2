import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Index";
import SalesCard from "./components/SalesCard/Index";

function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>          
        </section>
      </main>
    </>
  );
}

export default App;
