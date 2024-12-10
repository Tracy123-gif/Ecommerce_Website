import React from 'react'

const Button = (button, btnClass) => {

  return (
    <button className={btnClass.className}>{button.content}</button>
  )
}

export default Button
