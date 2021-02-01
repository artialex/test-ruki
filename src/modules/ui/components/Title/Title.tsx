import React from 'react'

import css from './Title.module.css'

interface TitleProps {
  children: any
}

export function Title(props: TitleProps) {
  return <h1 className={css.root}>{props.children}</h1>
}
