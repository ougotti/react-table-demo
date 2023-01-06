import "./styles.css";
import { Typography, Button } from "@mui/material";
export default function App() {
  return (
    <div className="App">
      <Button name="a">ボタン</Button>
      <Typography>hoge</Typography>
      <MaterialTable data={DEMO_DATA} columns={DEMO_COLS} />
    </div>
  );
}
