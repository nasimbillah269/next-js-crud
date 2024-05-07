'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function ({id, title, description}) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({newTitle, newDescription})
            })

            if(!res.ok){
                throw new Error("Feild to upadate topic")
            }

            router.push("/");
            router.refresh();

        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-red-400 w-full my-3 py-4 px-5" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="border border-red-400 w-full my-3 py-4 px-5" type="text" placeholder="Topic Description" />
            <button type='submit' className="bg-green-600 w-full py-3 text-white font-bold">UpdateTopic</button>
        </form>
    </>
  )
}
