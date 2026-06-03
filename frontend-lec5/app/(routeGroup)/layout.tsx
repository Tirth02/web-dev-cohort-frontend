import React from 'react'

const RouterGroupLayout = ({children}:{children: React.ReactNode}) => {
    // router group layout is a special layout that can be used to wrap multiple routes without affecting the URL structure. It is useful for grouping related pages together and applying a common layout to them. In this example, we are using it to wrap the login and signup pages, but it can be used for any group of routes. The layout will be applied to all the routes inside the (routeGroup) folder, but the URL will not have (routeGroup) in it.
    // This layout will be applied to all the routes inside the (routeGroup) folder
    return (
    <div>
        <h1>Router Group Layout</h1> 
        {children}
        <h1>Router Group Layout end</h1>
    </div>
  )
}

export default RouterGroupLayout