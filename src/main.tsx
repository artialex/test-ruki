import * as React from 'react'

import { createApplication } from './app'
import { RootComponent } from '$/core'
import { CellsProvider } from '$/cells'

declare global {
  interface Array<T> {
    select(elem: T): Array<T>
    reject(elem: T): Array<T>
  }
}

Array.prototype.select = Array.prototype.filter
Array.prototype.reject = function (fn) {
  return this.filter((value, ind, values) => !fn(value, ind, values))
}

async function bootstrap() {
  let app = createApplication({
    root: <RootComponent />,
    container: '#app',
    providers: [CellsProvider],
  })

  await app.run()
}

void bootstrap()
