import React from 'react'
import PropTypes from 'prop-types'
import connector from '@appsparkler/react-connector'
import useExample from './useExample'

const ExampleContext = React.createContext()

const ExampleContextProvider = ({children}) => {
  const value = useExample()
  return (
    <ExampleContext.Provider value={value}>
      {children}
    </ExampleContext.Provider>
  )
}

ExampleContextProvider.propTypes = {
  children: PropTypes.any,
}

export default connector({
  Context: ExampleContext,
  Provider: ExampleContextProvider,
})
