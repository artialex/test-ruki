import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import { CellType } from '../../@types/CellType'
import { Cell } from '../Cell'

import css from './Cells.module.css'
import { useCells } from '$/cells/cells.context'

interface CellsProps {
  className: string
}

export function Cells(props: CellsProps) {
  let [cells] = useCells()

  let className = cn(css.root, props.className)

  useEffect(() => {
    if (cells.length) {
      document
        .getElementById(`cell-${cells[cells.length - 1].id}`)
        .scrollIntoView({ behavior: 'smooth' })
    }
  }, [cells])

  return (
    <div className={className}>
      {cells.map((cell) => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </div>
  )
}
