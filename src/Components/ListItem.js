import { useState } from "react";

const ListItem = (props) => {
  const [count, setCount] = useState(props.amount || 0);

  const handleIncrement = () => {
    // console.log(count)
    setCount(count +1)
  };

  const handleDecrement = () => {
    // console.log(count);
    if (count === 0){
      return
    }
    setCount(count -1)
  };

  return (
    <li className="list_item">
      <p>{props.name}</p>
      <div className="list_buttons">
        <button onClick={handleDecrement}> - </button>
        <p>{count}</p>
        <button onClick={handleIncrement}> + </button>
      </div>
    </li>
  );
};

export default ListItem;
