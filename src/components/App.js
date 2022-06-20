import '../App.css';
import Cats from '../components/Cat'

function App() {
  return (
    <div className="App">
      <h1>Cats</h1>
      <div className="container">
    
    <Cats 
    image={"https://www.catbreedslist.com/uploads/cat-pictures/ragdoll-1.jpg"}
    type={"Ragdoll"}
    age={"12-17 years"}
    />
   
    <Cats 
    image={"https://www.catbreedslist.com/uploads/cat-pictures/british-shorthair-1.jpg"}
    type={"British Shorthair"}
    age={"12-17 years"}
    />

<Cats 
    image={"https://www.catbreedslist.com/uploads/cat-pictures/american-shorthair-1.jpg"}
    type={"American Shorthair"}
    age={"15-17 years"}
    />
    </div>
    </div>
  );
}

export default App;
