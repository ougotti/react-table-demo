import "./styles.css";
import React from "react";

// サンプルデータの定義
const DEMO_DATA = [
  { id: 1, name: "田中太郎", age: 25, department: "営業部" },
  { id: 2, name: "佐藤花子", age: 30, department: "開発部" },
  { id: 3, name: "鈴木一郎", age: 35, department: "人事部" },
  { id: 4, name: "高橋美子", age: 28, department: "マーケティング部" },
  { id: 5, name: "渡辺健太", age: 32, department: "開発部" },
];

export default function App() {
  return (
    <div className="App">
      <h1>React Table Demo</h1>
      <p>Material-UIとMaterial Tableを使用したサンプルアプリケーション</p>
      
      <button className="sample-button">
        サンプルボタン
      </button>
      
      <div className="table-container">
        <h2>従業員一覧</h2>
        <table className="demo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>年齢</th>
              <th>部署</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_DATA.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
