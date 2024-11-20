import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem flex items-center gap-[14px] p-[14px] rounded-[14px] bg-white">
      {children}
      <div className="actionsContainer flex items-center gap-[14px]">
        <button
          className="transition border-none bg-transparent cursor-pointer hover:opacity-70 text-lg"
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="bx bxs-edit"></i>
        </button>
        <button
          className="transition border-none bg-transparent cursor-pointer hover:opacity-70 text-lg"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </li>
  );
}
