import Split from 'react-split';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

const Top = ()=>{
    return(
        <Split sizes={[0,60,40,0]} style={{height:'100vh'}} className = 'flex' minSize={0}>
            <div className="tp"></div>
            <TopLeft/>
            <TopRight/>
            <div className="tp"></div>
        </Split>
    )
}

export default Top;