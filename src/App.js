import {Component} from 'react'
import Greet from './components/Greet'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeButton: languageGreetingsList[0].id,
  }

  onClickButton = id => {
    this.setState({
      activeButton: id,
    })
  }

  getImageElement = () => {
    const {activeButton} = this.state

    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(
        eachButton => eachButton.id === activeButton,
      )
    ]

    return <img src={imageUrl} alt={imageAltText} className="language-image" />
  }

  render() {
    const {activeButton} = this.state
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachButton => (
            <Greet
              key={eachButton.id}
              buttonDetails={eachButton}
              onClickButton={this.onClickButton}
              isActive={eachButton.id === activeButton}
            />
          ))}
        </ul>
        {this.getImageElement()}
      </div>
    )
  }
}

export default App
