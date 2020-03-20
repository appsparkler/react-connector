import React from 'react'
import PropTypes from 'prop-types'
import connectExample from './example'

const StudioApp = ({handleClick}) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={handleClick}>Click Me!</button>
    </div>
  )
}

StudioApp.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default connectExample({
  Component: StudioApp,
  config: {},
})
