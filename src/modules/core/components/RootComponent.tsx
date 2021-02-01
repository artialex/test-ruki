import React from 'react'
import { CellsPage } from '$/cells'

import css from './RootComponent.module.css'

export function RootComponent() {
  return (
    <div className={css.root}>
      <CellsPage />
    </div>
  )
}
