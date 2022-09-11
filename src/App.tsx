import Navigation from "./routes/Navigation";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./shared/components/Footer/Footer";
import Man from "clothes/App"



function App(): JSX.Element {
  return (
    <BrowserRouter>
      
        <Navigation />
        <Man/>
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
