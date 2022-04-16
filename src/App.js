import React, { useState } from "react";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {

  const [headerSelected, setHeaderSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <>
      <Nav
        headerSelected={headerSelected}
        aboutSelected={aboutSelected}
        experienceSelected={experienceSelected}
        portfolioSelected={portfolioSelected}
        contactSelected={contactSelected}
        setHeaderSelected={setHeaderSelected}
        setAboutSelected={setAboutSelected}
        setExperienceSelected={setExperienceSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {headerSelected && !aboutSelected && !experienceSelected && !contactSelected && !portfolioSelected ? (
          <>
            <Header />
            <About />
          </>
        ) : !headerSelected && aboutSelected && !experienceSelected && !contactSelected && !portfolioSelected ? (
          <>
            <Header />
            <About />
          </>
        ) : !headerSelected && !aboutSelected && experienceSelected && !contactSelected && !portfolioSelected ? (
          <>
            <Experience />
          </>
        ) : !headerSelected && !aboutSelected && !experienceSelected && contactSelected && !portfolioSelected ? (
          <>
            <Contact />
          </>
        ) : <Portfolio />}
      </main>
      <Footer />
    </>

  )

}

export default App;


// const renderPage = () => {
//   if (currentPage === 'header') {
//     return (
//       <div>
//         <Header />
//         <About />
//         <Experience />
//       </div>
//     )
//   } else if (currentPage === 'portfolio') {
//     return <Portfolio />
//   } else if (currentPage === 'contact') {
//     return <Contact />
//   }
// };

// const handlePageChange = (page) => setCurrentPage(page);

// return (
//   <div>
//     <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//     <div>
//       {renderPage()}
//     </div>
//     <Footer />
//   </div>



// );