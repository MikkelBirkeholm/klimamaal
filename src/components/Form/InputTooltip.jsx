/* eslint-disable */
import { useState } from 'react'
import styles from './Form.module.scss'

export const InputTooltip = ({
  type = 'text',
  placeholder,
  onChange,
  required,
  value,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(null)

  return (
    <div className={styles.withTooltip}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        // at vise tooltip ved focus kunne nok også klares med ren css ¯\_(ツ)_/¯
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        pattern={patterns[type]}
        onChange={onChange}
        value={value}
        required={required}
      />
      {isFocused && <div className={styles.tooltip}>{placeholder}</div>}
    </div>
  )
}

const patterns = {
  email: '.+@.+\\.[A-Za-z]+$',
  tel: '^\\+?[0-9]{8,}$',
}
