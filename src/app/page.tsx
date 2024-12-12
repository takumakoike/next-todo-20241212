"use client";
import { useCallback, useState } from "react";

export default function Home() {

  // 入力欄の管理
  const [inputValue, setInputValue] = useState("");

  // タスクのリスト管理
  const [taskList, setTaskList] = useState<string[]>([]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }


  const addTasks = useCallback(() => {
      setTaskList((items) => [...items, inputValue]);
      setInputValue("");
  }, [inputValue]);

  return (
        <div>
          <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          />
          <button onClick={addTasks}>タスクを追加</button>

          <ul>
            {taskList.map((item, key) => {
              return <li key={key}>{item}</li>
            })}
          </ul>
        </div>
    );
}
