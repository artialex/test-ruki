import React, { createContext, useContext, useReducer } from 'react'

import { CellType } from './@types/CellType'
import { Cells } from '$/cells/providers/cells.service'

let CellStateContext = createContext(null)
let CellDispatchContext = createContext(null)

export const enum Action {
  Create = 'CREATE',
}

function cellReducer(state: Array<any>, action) {
  switch (action.type) {
    case Action.Create: {
      let newState = state.concat(Cells.create())

      if (Cells.shouldCreateLife(newState)) {
        newState = newState.concat(Cells.create(CellType.Life))
      }

      if (Cells.shouldDestroyLife(newState)) {
        newState = newState.reject(
          (_, ind) => _.type === CellType.Life && ind === newState.length - 4
        )
      }

      return newState
    }

    default: {
      return state
    }
  }
}

export function CellsProvider(props: any) {
  let [state, dispatch] = useReducer(cellReducer, [])

  return (
    <CellStateContext.Provider value={state}>
      <CellDispatchContext.Provider value={dispatch}>{props.children}</CellDispatchContext.Provider>
    </CellStateContext.Provider>
  )
}

function useCellsState() {
  return useContext(CellStateContext)
}

function useCellsDispatch() {
  return useContext(CellDispatchContext)
}

export function useCells() {
  return [useCellsState(), useCellsDispatch()]
}
