import React from 'react';

class Practice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: '', 
            lastName: ''
        };
    }

        handleSubmit = (e) => {
            e.preventDefault();
            const { firstName, lastName }  = this.state
            console.log(firstName)
            console.log(lastName)
        }

        updateFName(fname){
            this.setState({firstName:fname})
        }

        updateLName(lname){
            this.setState({lastName:lname})
        }

    render(){
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="fname">Enter your first name here:</label>
                <input type="name" id="fname" className="fname" onChange={e => this.updateFName(e.target.value)}></input>
                <br />
                <label htmlFor="lname">Enter your last name here:</label>
                <input type="name" id="lname" className="lname" onChange={e => this.updateLName(e.target.value)}></input>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Practice;