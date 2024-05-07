'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  

  const handleSubmit = async (e) =>{
    
      e.preventDefault();
      if(!title || !description){
        alert("titile and description requard");
        return;
      }

      try{
        const res = fetch('http://localhost:3000/api/topics/', {
          method: "POST",
          headers: {
            "content-type": "application/jason",
          },
          body: JSON.stringify({title, description})
        })

        if(res){
          router.push("/");
          router.refresh();
        }else{
          throw new Error("field to create a topic")
        }

      }catch(error){
          console.log(error)
      }


  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-red-400 w-full my-3 py-4 px-5" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-red-400 w-full my-3 py-4 px-5" type="text" placeholder="Topic Description" />
            <button type='submit' className="bg-green-600 w-full py-3 text-white font-bold">AddTopic</button>
        </form>
    </>
  )
}
