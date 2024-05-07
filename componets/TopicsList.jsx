import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import RemoveBtn from './RemoveBtn';

const getTopics = async () =>{
    try{

        const respons = await fetch('http://localhost:3000/api/topics/', {cache: "no-store"});

        if(!respons.ok){
            throw new Error("Feild to face topic");
        }

        return respons.json();


    }catch(error){
        console.log(error)
    }
}



export default async function TopicsList() {
    const topics = await getTopics();
    // console.log(topics)
  return (
    <>
        {
            topics.map(topic => (
                <div key={topic._id} className="topicListMainDiv">
                    <div>
                        <h2>{topic.title}</h2>
                        <div>{topic.description}</div>
                        <div className="mt-2"><span className="text-red-00">Create Data: </span> 
                        {new Date(topic.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })}
                        </div>
                        <div className="mt-2"><span className="text-red-00">Update Data: </span> 
                        {new Date(topic.updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          })}
                        </div>
                    </div>
                    <div className="topicEditUppdet">
                        <RemoveBtn id={topic._id}></RemoveBtn>
                        <Link href={`/editTopic/${topic._id}`}>
                            <HiPencilAlt size={20}></HiPencilAlt>
                        </Link>
                    </div>
                </div>
            ))
        }
       
    </>
  )
}
