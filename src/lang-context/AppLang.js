import React, { Component } from "react"
import Child from './Child.js'
import LangControls from './LangControls.js'
import LanguageContext from './LanguageContext'


export default class AppLang extends Component {
  state = {
       lang: window.navigator.language
      };

      handleSetLang = (lang) => {
           this.setState({ lang })
         };


  render() {
    const contextValue = {
          lang: this.state.lang,
          setLang: this.handleSetLang,
        }
        
    return (
    <LanguageContext.Provider value={contextValue}>
      <div className='AppLang'>
      <LangControls
           onSetLang={this.handleSetLang}
        />
        <Child />
      </div>
    </LanguageContext.Provider>

    );
  }
}