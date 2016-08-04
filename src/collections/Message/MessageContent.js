import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageContent(props) {
  const rest = getUnhandledProps(MessageContent, props)
  return <div className='content' {...rest}>{props.children}</div>
}

MessageContent._meta = {
  library: META.library.semanticUI,
  name: 'MessageContent',
  type: META.type.collection,
}

MessageContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageContent
