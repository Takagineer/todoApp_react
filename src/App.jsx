import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    //上は何も記入しない場合に処理を行わない様にする
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までですよ。タスク完了してください。
        </p>
      )}

      {/* <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}
      {/* <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* JavaScriptを記述する際は{}(ブラケットを使用する) */}
      {/* {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row"> */}
      {/* key={todo}の記述は、reactがかそうDOMを使用して差分を抽出する際に、何番目の繰り返しか正確に把握するために記述している */}
      {/* <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div> */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />

      {/* <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};
