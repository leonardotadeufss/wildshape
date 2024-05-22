import Card from '../components/Card';
import beasts from '../data/beasts'
import Beast from '../types/types';

function App() {

  return (
    <div className="container">
      <div className='row'>
        {
          beasts.map((beast: Beast) => {
            return (
              <div className="col-4" key={beast.name}>
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
