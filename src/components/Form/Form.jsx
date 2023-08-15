import styles from './Form.module.scss'
import { InputTooltip } from './InputTooltip'
import { useState, useRef } from 'react'

export const Form = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleSubmit(e) {
    e.preventDefault()

    const response = confirm(
      `Er følgende korrekt:\n Email: ${formData.email}\n Navn: ${formData.name}\n Telefon: ${formData.phone}\n Besked: ${formData?.message}`
    )
    if (response) {
      alert('Formularen blev sendt korrekt')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={styles.formWrapper}>
      <img
        src="images/UN-Logo-Large.png"
        alt="UN logo"
        width={200}
      />
      <form
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <fieldset>
          <InputTooltip
            type="text"
            name="name"
            placeholder="Indtast dit fulde navn"
            onChange={handleInputChange}
            value={formData.name}
            required
          />
          <InputTooltip
            type="email"
            name="email"
            placeholder="Indtast gyldig E-Mail"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
          <InputTooltip
            type="tel"
            name="phone"
            placeholder="Indtast Telefonnummer"
            onChange={handleInputChange}
            value={formData.phone}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Evt. Besked"
            onChange={handleInputChange}
            value={formData.message}
          ></textarea>
        </fieldset>
        <div className={styles.buttonBox}>
          <button
            type="reset"
            disabled
          >
            Fortryd
          </button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}
