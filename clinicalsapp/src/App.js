import './App.css';
import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Home from './Components/Home';
import CollectClinicals from './Components/CollectClinicals';
import AddPatient from './Components/AddPatient';
import AnalyzeData from './Components/AnalyzeData';
import ChartGenerator from './Components/ChartGenerator';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/patientDetails/:patientId" component={CollectClinicals}></Route>
        <Route exact path="/addPatient" component={AddPatient}></Route>
        <Route exact path="/analyze/:patientId" component={AnalyzeData}></Route>
        <Route exact path="/chart/:componentName/:patientId" component={ChartGenerator}></Route>
      </Switch>

    </div>
  );
}

export default App;
