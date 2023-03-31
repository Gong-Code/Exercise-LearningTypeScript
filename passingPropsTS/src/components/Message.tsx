import React from 'react'

type MessageProps = {
    fullName: string;
    isLoggedIn: boolean;
    messageCount: number;
}

export const Message = (props: MessageProps) => {
  return (
    <div>
        <h2>
            {
                props.isLoggedIn ? `Welcome ${props.fullName}! Message count:${props.messageCount}` : `Welcome Guest!`
            }
        </h2>
    </div>
  )
}