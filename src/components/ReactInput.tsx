import { useStore } from "@nanostores/react";
import { inputValue, setInputValue } from "../store";
import ReactLogo from "./ReactLogo";

export default function ReactInput() {
  const value = useStore(inputValue);
  return (
    <div>
      <label htmlFor="react">
        <ReactLogo />
      </label>
      <input
        id="react"
        type="text"
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={(e) => e.currentTarget.select()}
      />
    </div>
  );
}
