import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageHeader(props) {
  const rest = getUnhandledProps(MessageHeader, props)
  return <div className='header' {...rest}>{props.children}</div>
}

MessageHeader._meta = {
  library: META.library.semanticUI,
  name: 'MessageHeader',
  type: META.type.collection,
}

MessageHeader.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageHeader
