import { useStore } from "@nanostores/react";
import { inputValue, setInputValue } from "../store";

export default function ReactInput() {
  const value = useStore(inputValue);
  return (
    <div>
      <label htmlFor="react">React</label>
      {" "}
      <input
        id="react"
        type="text"
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
