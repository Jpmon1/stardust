import React from 'react'
import { Message, Icon } from 'stardust'

const MessageIconExample = () => (
  <div>
    <Message
      icon='inbox'
      header='Have you heard about our mailing list?'
      content='Get the best news in your e-mail every day.'
    />

    <Message>
      <Icon name='notched circle' loading />
      <Message.Content>
        <Message.Header>Just one second</Message.Header>
        We are fetching that content for you.
      </Message.Content>
    </Message>
  </div>
)

export default MessageIconExample
