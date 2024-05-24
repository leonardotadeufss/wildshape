import Card from '../components/Card';
import beasts from '../data/beasts'
import Beast from '../types/types';

function App() {

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h1 className='mt-5 fw-bold'>Forma selvagem</h1>
        <p>Lista de bestas em D&D 5e para Forma Selvagem da classe Driuda</p>
      </div>
      <div className='row'>
        {
          beasts.map((beast: Beast) => {
            return (
              <div className="col-lg-4 col-12" key={beast.name}>
                <Card beast={beast} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
