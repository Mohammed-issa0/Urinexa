import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main flex flex-col gap-[14px] max-w-[800px] w-full my-0 mx-auto">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p className="flex-1">{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
