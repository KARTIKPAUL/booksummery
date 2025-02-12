import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Genres from './Pages/Genres';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsAndConditions';
import FAQ from './Pages/Faqs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="genres" element={<Genres />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="termsandconditions" element={<TermsConditions />} />
        <Route path="faqs" element={<FAQ />} />
      </Route>
    </Routes>
  );
}

export default App;
