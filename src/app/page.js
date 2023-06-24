import Image from 'next/image'
import styles from './page.module.css'
import dbConnect from './utils/dbConnect'
import Todo from './models/Todo';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {



//function to save data
dbConnect();
const todos = await Todo.find().sort({createdAt:-1});





async function newData(data){
  "use server"

 
  let title = data.get("title")?.valueOf();
  let todo = data.get("todo")?.valueOf();
  try {
    dbConnect();
    let newTodo = new Todo({title,todo});
    await newTodo.save()

    console.log(newTodo)

    
    
  } catch (error) {
    console.error(error)
  }
  redirect('/')
}










  return (
    <main className={styles.main}>
      <form action={newData} >
     
     <hr />
<br />
     <marquee width="100%" direction="left" height="40px" className={styles.mar} >
This is an Todo App. Helps you to be productive in your way.
</marquee>
     <br />
     <div className={styles.set} >
     <label htmlFor='title' >Title</label>
     <input type='text' name='title' />
    
     <br />
    
     <label htmlFor='todo' >Todo</label>
     <input type='text' name='todo' />
     <button type='submit' className={styles.but}  >Submit</button>
     </div>
     </form>
     <br />
     
     <hr />
     <br />
<div className={styles.todos} >
  <h2>Todos</h2>
</div>
<br />
<div className={styles.sh} >
<h3>Title</h3>
<h3>Todo</h3>
<h3>Options</h3>



</div>
<br />
<hr />
<br />

<div className={styles.tasks} >
{
todos.map((todo)=>{
  return(
   <>
   <div key={todo._id}  className={styles.to} >
    <h4>{todo.title}</h4>
    <h4>{todo.todo}</h4>
    <div className={styles.options} >
      <div className={styles.del} >

        <Link  href={`/delete/${todo._id}`}   >
    <button className={styles.but}  >Delete</button>
    </Link>
    </div>
<Link href={`/edit/${todo._id}`} >

    <button className={styles.but} >Edit</button>
</Link>
    </div>


   </div>
   
   </>
  )
})
}


</div>
    </main>
  )
}
