"use client"
// You can not use a server component inside a client component but you can use a client component inside a server component.
//client component is a component that can use state, effects and other client side features. It is rendered on the client side and can not be used on the server side. It is useful for components that need to interact with the user or need to use client side features. In this example, we are using it to create a button that shows an alert when clicked. The button can be used in any server component without any issues.
import React from 'react'

export const Button = () => {
  return (
    <button onClick={() => {alert('Hello World')}}>
        Click me
    </button>
  )
}
