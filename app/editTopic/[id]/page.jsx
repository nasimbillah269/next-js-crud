import EditTopicForm from '@/componets/EditTopicForm';

const getTopicById = async (id) => {
     try{
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {cache: "no-store"});
        if(!res.ok){
            throw new Error("Field to fech topic");
        }

        return res.json();

     }catch(error){
        console.log(error)
     }
}



export default async function page({params}) {
  const {id} = params;
  const {topic} = await getTopicById(id);
  // console.log(topic)
  const {title, description} = topic;
  return (
    <>
        <EditTopicForm id={id} title={title} description={description}></EditTopicForm>
    </>
  )
}
