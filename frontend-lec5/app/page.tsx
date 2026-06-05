import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World !!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam sit ducimus maiores autem, consectetur facilis expedita laudantium aut modi pariatur at accusantium ex ad!</p>
    </div>
  );
}
