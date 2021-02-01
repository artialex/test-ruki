import React from 'react'

import { Button, Title } from '$/ui'
import { Cells } from '../Cells'

import css from './CellsPage.module.css'
import { Action, useCells } from '../../cells.context'

export function CellsPage() {
  let [, dispatch] = useCells()

  function handleCreateClick() {
    dispatch({ type: Action.Create })
  }

  return (
    <div className={css.root}>
      <Title>Клеточное наполнение</Title>
      <Cells className={css.cells} />
      <Button onClick={handleCreateClick}>Сотворить</Button>
    </div>
  )
}
