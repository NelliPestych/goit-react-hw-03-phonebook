// import { LoremIpsum } from "lorem-ipsum";
import { uuid } from "uuidv4";

// const Lorem = new LoremIpsum();

export default function createNumber() {
  return {
    id: uuid(),
    completed: false,
  };
}
