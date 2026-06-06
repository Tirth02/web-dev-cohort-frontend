import { Button } from "@/components/button";
import Image from "next/image";

export default async function Home() {
  // server component can use async/await and fetch data from an API. It is rendered on the server side and can not use state, effects or other client side features. It is useful for components that need to fetch data from an API or need to use server side features. In this example, we are using it to fetch a random user from an API and display it on the page. The button is a client component that can be used inside the server component without any issues.
  const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World !!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam sit ducimus maiores autem, consectetur facilis expedita laudantium aut modi pariatur at accusantium ex ad!</p>
      <Button/>
    </div>
  );
}
