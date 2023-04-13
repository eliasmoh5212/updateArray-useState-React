import { useState } from "react";

const App = () => {
  let [tags, setTags] = useState(["happy", "cheerful"]);
  //Add to the array
  const handleAdd = () => {
    setTags([...tags, "exciting"]);
  };

  //remove from array
  const handleRemove = () => {
    setTags(tags.filter(tag => tag !== "exciting"));
  };

  //update array element
  const handleUpdate = () => {
    setTags(tags.map(tag => (tag === "exciting" ? "New Exiting" : tag)));
  };

  return (
    <div>
      <h1>Upadating React Array</h1>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
export default App;
