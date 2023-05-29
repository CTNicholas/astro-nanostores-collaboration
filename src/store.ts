import { atom } from "nanostores";
import { client, RootStorage, TypedRoom } from "./liveblocks.config";

const room: TypedRoom = client.enter("my-room", {
  initialPresence: {},
  initialStorage: { inputValue: "" },
});

let storage: RootStorage;
initStorage();

async function initStorage() {
  const { root } = await room.getStorage();
  storage = root;
  inputValue.set(storage.get("inputValue"));

  room.subscribe(storage, (updatedStorage) => {
    storage = updatedStorage;
    inputValue.set(storage.get("inputValue"));
  });
}

export const inputValue = atom<string>("");

export function setInputValue(newValue: string) {
  if (!storage) {
    return;
  }

  storage.set("inputValue", newValue);
}
