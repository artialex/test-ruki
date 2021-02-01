import React from 'react'
import cn from 'classnames'

import { CellType } from '../../@types/CellType'

import css from './Cell.module.css'
import { map } from '../../providers/cells.map'

interface CellProps {
  cell: {
    id: number
    type: CellType
  }
}

export function Cell(props: CellProps) {
  let iconClassName = cn(css.icon, [css[props.cell.type]])

  return (
    <div id={`cell-${props.cell.id}`} className={css.root}>
      <div className={iconClassName} />
      <div>
        <p className={css.title}>{map[props.cell.type].title}</p>
        <p className={css.subtitle}>{map[props.cell.type].subtitle}</p>
      </div>
    </div>
  )
}
