"use client";
import React, { useEffect } from 'react'

const ClientPage = () => {
    const [data, setData] = React.useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        fetchData();
    },[])
  return (
    <div>
        ClientPage
        <button onClick={() => alert("Button Clicked")}>Click Me</button>
    </div>

  )
}

export default ClientPage