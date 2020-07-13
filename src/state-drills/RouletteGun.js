import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 2
    };

    state = {
        chamber: null,
        spinningTheChamber:false,
    };

      componentWillUnmount() {
        clearTimeout(this.timeout)
      }  

      btnClick = () => {
        this.setState({
            spinningTheChamber:true
          })

    this.timeout = setTimeout(() => {
        const chosenNum = Math.ceil(Math.random() * 8)
        this.setState({
            chamber: chosenNum,
            spinningTheChamber:false,
          })
        }, 2000)
      }  

      status(){
        const { chamber, spinningTheChamber } = this.state
        const bulletInChamber = this.props
      if (spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger!'
      } else if (chamber === bulletInChamber) {
        return 'BANG!!!!'
      } else {
        return 'you are safe!'
      }
    }
    
    render (){
        return (
        <div>
            <p>{this.status()}</p>
            <button onClick={this.btnClick}>Pull the trigger!</button>
        </div>
        )
    }
}

export default RouletteGun;