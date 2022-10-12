import { useState } from 'react'
import './App.css'

export default function App() {
  const [toggleClass, setToggleClass] = useState(false)
  const [inputEmail, setInputEmail] = useState('')

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  const validEmail = validateEmail(inputEmail)
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Bem vindo(a)</h1>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              className={
                inputEmail === ''
                  ? ''
                  : validEmail
                  ? 'valid-input'
                  : 'invalid-input'
              }
              type="text"
              id="email-input"
              placeholder="email@email.com"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </label>
          <button
            className={toggleClass ? 'position-right' : ''}
            type="button"
            onMouseEnter={() => {
              if (!validEmail) {
                setToggleClass(!toggleClass)
              }
            }}
            onClick={() => alert('Bem vindo')}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  )
}
