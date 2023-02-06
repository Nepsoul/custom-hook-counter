import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [height, setHeight] = useState("");
  return (
    <div>
      <form>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        birthdate:
        <input
          type="date"
          value={born}
          onChange={(e) => setBorn(e.target.value)}
        />
        <br />
        height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </form>
      <div>
        {name}
        {born}
        {height}
      </div>
    </div>
  );
};

export default App;
