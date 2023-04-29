import './index.css'

const Greet = props => {
  const {buttonDetails, onClickButton, isActive} = props
  const {id, buttonText} = buttonDetails

  const onClickLanguageButton = () => {
    onClickButton(id)
  }

  const buttonColor = isActive ? 'active language-button' : 'language-button'

  return (
    <li className="button">
      <button
        type="button"
        className={buttonColor}
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Greet
