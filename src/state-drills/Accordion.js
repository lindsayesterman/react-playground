import React from 'react';
import './Accordion.css'


class Accordion extends React.Component{
    static defaultProps={
        sections: []
    }
    state = {
        currentTabIndex: 0
    }
    handleButtonClick(index) {
      this.setState({ currentTabIndex: index })
    }
    renderUl(){
        return this.props.sections.map((sections, index) => (
            <ul>
                <li><button key={index} onClick={() => this.handleButtonClick(index)}>
                {this.props.section.title}
                </button></li>
                <li><button key={index} onClick={() => this.handleButtonClick(index)}>
                {this.props.section.title}
                </button></li>
            </ul>
        )
    }
    renderContent() {
        const currentTab = this.props.sections[this.state.currentTabIndex]
        return (
        <p>{currentTab.content}</p>
        )
      }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.renderContent()}
      </div>
    )
  }
}


export default Accordion;