import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className="flex items-stretch max-w-[800px] w-full mx-auto my-0 gap-[14px] ">
        <input
          className="flex-1 rounded-[14px] outline-none w-full py-[14px] px-[18px] border-none bg-white"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter todo..."
        />
        <button
          className="rounded-[14px] bg-transparent transition cursor-pointer hover:opacity-70 py-[14px] px-[18px] border-none bg-white"
          type="submit"
          onClick={() => {
            handleAddTodos(todoValue);
          }}
        >
          Add
        </button>
      </header>
    </form>
  );
}
