import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Genres from './Pages/Genres';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsAndConditions';
import FAQ from './Pages/Faqs';
import SelfHelp from './Components/BooksCatagory/SelfHelp';
import Business from './Components/BooksCatagory/Business';
import Fictions from './Components/BooksCatagory/Fictions';
import Health from './Components/BooksCatagory/Health';
import Technolgy from './Components/BooksCatagory/Technology';
import Science from './Components/BooksCatagory/Science';
import Comics from './Components/BooksCatagory/Comics';
import Biography from './Components/BooksCatagory/Biography';
import BookDetail from './Components/BookDetails';
import Mystery from './Components/BooksCatagory/Mystery';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path='/self-help' element={<SelfHelp />} />
        <Route path='/business' element={<Business />} />
        <Route path='/fictions' element={<Fictions />} />
        <Route path='/Health' element={<Health />} />
        <Route path='/technology' element={<Technolgy />} />
        <Route path='/history' element={<History />} />
        <Route path='/science' element={<Science />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/biography' element={<Biography />} />
        <Route path='/mystery' element={<Mystery />} />
        {/* <Route path='/demo' element={<CarouselDemo />} /> */}
        <Route path="/books/:category/:id" element={<BookDetail />} />
       
      </Route>
    </Routes>
  );
}

export default App;





