import React from 'react'

interface ProvidersProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>> // TODO?
  children: React.ReactNode
}

export const Providers = (props: ProvidersProps) => {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children
      )}
    </>
  )
}
