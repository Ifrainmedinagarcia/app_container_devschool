import Navigation from "./routes/Navigation";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./shared/components/Footer/Footer";


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
