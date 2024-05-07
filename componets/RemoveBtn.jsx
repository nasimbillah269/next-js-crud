'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


export default function RemoveBtn({id}) {
  const router = useRouter();
  const removeTopic = async () =>{
    const confirmd = confirm();
    if(confirmd){
     const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
    <>
        <p onClick={removeTopic}>Delete</p>
    </>

  )
}
