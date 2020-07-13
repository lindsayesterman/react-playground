import React from 'react';
import HelloWorld from './HelloWorld.js';
import Bomb from './Bomb.js'
import RouletteGun from './RouletteGun';

const DrillNum = (props) => {  
    return <h1>Drill #{props.num}</h1>; 
  };

class Drills extends React.Component{
    render (){
        return (
            <div className="drils">
            <DrillNum num={"1"} />
            <HelloWorld />
            <DrillNum num={"2"} />
            <Bomb />
            <DrillNum num={"3"} />
            <RouletteGun/>
            </div>
        )
    }
}

export default Drills;