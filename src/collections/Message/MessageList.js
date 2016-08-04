import React, { PropTypes } from 'react'

import MessageListItem from './MessageListItem'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageList(props) {
  const rest = getUnhandledProps(MessageList, props)
  return <ul className='list' {...rest}>{props.children}</ul>
}

MessageList._meta = {
  library: META.library.semanticUI,
  name: 'MessageList',
  type: META.type.collection,
}

MessageList.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

MessageList.Item = MessageListItem

export default MessageList
