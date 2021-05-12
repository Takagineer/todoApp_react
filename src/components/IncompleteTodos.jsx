import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* JavaScriptを記述する際は{}(ブラケットを使用する) */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              {/* key={todo}の記述は、reactがかそうDOMを使用して差分を抽出する際に、何番目の繰り返しか正確に把握するために記述している */}
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
