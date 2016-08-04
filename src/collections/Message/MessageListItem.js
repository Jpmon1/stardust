import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageListItem(props) {
  const rest = getUnhandledProps(MessageListItem, props)
  return <li {...rest}>{props.children}</li>
}

MessageListItem._meta = {
  library: META.library.semanticUI,
  name: 'MessageListItem',
  type: META.type.collection,
}

MessageListItem.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageListItem
