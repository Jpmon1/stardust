import React from 'react'
import { Message } from 'stardust'

const MessageWarningExample = () => (
  <Message
    warning
    header='You must register before you can do that!'
    content='Visit our registration page, then try again.'
  />
)

export default MessageWarningExample
