import ScrollToTop from 'src/components/ScrollToTop';
import Card from '../components/Card';
import beasts from '../data/pt-br'
import Beast from '../types/types';
import Search from 'src/components/Search';
import { useContext, useEffect } from 'react';
import BeastProvider, { BeastsContext } from 'src/components/BeastsProvider';
import CardsContainer from 'src/components/CardsContainer';


function App() {


  return (
    <BeastProvider>
      <div className="container">
        <div className="py-5 text-center">
          <h1 className='mt-5 fw-bold'>Forma selvagem</h1>
          <p>Lista de bestas em D&D 5e para Forma Selvagem da classe Driuda</p>
          <Search />
        </div>
        <CardsContainer />
        <ScrollToTop />

      </div>
    </BeastProvider>
  );
}

export default App;
