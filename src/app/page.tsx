import Link from "next/link";
import { prisma } from "./db";
import { TodoItem } from "@/components/TodoItem";

export default async function Home(){
  
  const todos = await prisma.todo.findMany()

  async function toggleTodo(id:string, complete:boolean){
    "use server"

    await prisma.todo.update({where : { id }, data : { complete }})
  }

  return(
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 transition duration-300 ease-in-out" href={"/new"}>New</Link>
      </header>
      <ul className="pl-4">
         {todos.map(todo =>(
          <TodoItem key={todo.id}{...todo} toggleTodo={toggleTodo}/>
         ))}
      </ul>
    </>
  )
}