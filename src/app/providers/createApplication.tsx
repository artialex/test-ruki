import React, { ReactElement } from 'react'
import { render } from 'react-dom'

import { Providers } from '../components/Providers'

interface ApplicationOptions {
  root: ReactElement
  container: string
  providers: any[]
}

interface Application {
  run(): void
}

export function createApplication(options: ApplicationOptions): Application {
  let { root, container, providers } = options

  function run() {
    render(<Providers components={providers}>{root}</Providers>, document.querySelector(container))
  }

  return {
    run,
  }
}
