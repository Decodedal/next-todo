import Link from "next/link"
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data : FormData) {
    "use server"
    
    const title = data.get("title")?.valueOf();
    if(typeof title !== "string" || title.length === 0) return;

    await prisma.todo.create({data:{title, complete:false}})

    redirect('/')
}

const New = () => {
  return (
    <>
        <div className="flex justify-between items-center mb-4">New
            <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 transition duration-300 ease-in-out" href={"/"}>home</Link>
        </div>
        <form action={createTodo} className="flex gap-5 flex-col">
            <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
            <div className=" flex justify-center gap-10 ">
               <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 transition duration-300 ease-in-out" href="..">Cancle</Link>
               <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 transition duration-300 ease-in-out">Create</button> 
            </div>
        </form>
    </>
  )
}

export default New