import { CellType } from '../@types/CellType'
import { Cell } from '../@types/Cell'

export function createCellsService() {
  function create(type?: CellType) {
    let id = Math.random()

    if (type) {
      return { id, type }
    }

    return { id, type: id < 0.5 ? CellType.Dead : CellType.Alive }
  }

  function shouldCreateLife(cells: Cell[]) {
    return cells.length >= 2 && cells.slice(-2).every((_) => _.type === CellType.Alive)
  }

  function shouldDestroyLife(cells: Cell[]) {
    return cells.length >= 3 && cells.slice(-3).every((_) => _.type === CellType.Dead)
  }

  return {
    create,
    shouldCreateLife,
    shouldDestroyLife,
  }
}

export const Cells = createCellsService()
