import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {ismode: false}

  modeButton = () => {
    this.setState(prevstate => ({ismode: !prevstate.ismode}))
  }

  render() {
    const {ismode} = this.state
    const colormode = ismode ? 'lightmode' : 'darkmode'
    const textcolormode = ismode ? 'textlightmode' : 'textdarkmode'

    const buttonText = ismode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`container ${colormode}`}>
          <h1 className={`heading ${textcolormode}`}>Click to change mode</h1>
          <button type="button" className="button" onClick={this.modeButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
