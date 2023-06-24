import React from "react";
import dbConnect from "@/app/utils/dbConnect";
import Todo from "@/app/models/Todo";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function edit({ params }) {
  dbConnect();
  const todo = await Todo.findOne({ _id: params.id });

  async function editTodo(data) {
    "use server";
    let title = data.get("title")?.valueOf();
    let todo = data.get("todo")?.valueOf();

    let updatedTodo = await Todo.findByIdAndUpdate(
      { _id: params.id },
      { title, todo }
    );

    redirect("/");
  }

  return (
    <>
      <main className={styles.main}>
        <form action={editTodo}>
          <hr />
          <br />
          <marquee
            width="100%"
            direction="left"
            height="40px"
            className={styles.mar}
          >
            This is an Todo App. Helps you to be productive in your way.
          </marquee>
          <br />
          <div className={styles.set}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue={todo.title} />

            <br />

            <label htmlFor="todo">Todo</label>
            <input type="text" name="todo" defaultValue={todo.todo} />
            <button type="submit" className={styles.but}>
              Edit
            </button>
          </div>
        </form>
        <br />

        <hr />
        <br />

        <br />
        <hr />
        <br />
      </main>
    </>
  );
}
