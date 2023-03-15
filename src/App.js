import "./App.css";
import Page from "./layout/Page";
import Router from "./Router";


function App() {
  return (
    <div className="App">
      <Page>
        <Router />
      </Page>
    </div>
  );
}

export default App;
