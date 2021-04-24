import {Fragment} from 'react';
import Header from './components/Header';
import Diapositivas from './components/Diapositivas';
import './App.css';




function App() {
  return (
    <Fragment>
      <div class="app">
        <Header titulo='Slideshow App' />
        <Diapositivas diapositivas={diapositivas}/>
      </div>
    </Fragment>
  );
}

export default App;

const diapositivas = [{title:"Today's workout pan",text:"We're gonna do 3 fundamental exercises."},
                      {title:"First, 10 push-ups",text:"Do 10 reps. Remember about full range of motion. Don't rush"},
                      {title:"Next 20 squats",text:"Squats are important. Remember to keep your back straight"},
                      {title:"Finally, 15 sits-ups",text:"Slightly bend your knees. Remember about full range of motion"},
                      {title:"Great job!",text:"You've made it, have a nice day and see you next time"}];