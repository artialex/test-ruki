import React, { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
}

import css from './Button.module.css'

export function Button(props: ButtonProps) {
  let { children, ...rest } = props

  let className = cn(css.root)

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  )
}
