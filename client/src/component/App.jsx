import '../App.css';
import Top from './Top';
import Split from 'react-split';
import Bottom from './Bottom';


function App() {
  return (
   <>
   <Split style={{height:'100vh'}} sizes={[60,40,0]} direction = 'vertical' minSize={0}>
    <Top/>
    <Bottom/>
    <div className="tp"></div>
   </Split>
   </>
  );
}

export default App;