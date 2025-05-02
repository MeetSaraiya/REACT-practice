import { useState } from "react";
import data from "./data";
import "./styles.css";

export const Accordian = () => {
  const [singleSelect, setSingleSelect] = useState(true);
  const [singleAccId , setSingleAccId] = useState(null);

  const handleClick = (ID) => {
    setSingleAccId(ID)
  };

  return (
    <>
      <div>Accordian</div>
      <button className='bg-black text-white p-4 border-2 rounded-3xl' onClick={() => setSingleSelect(!singleSelect)}>{singleSelect ? 'Multi' : 'Single'} Select</button>
      <ul>
        {console.log(data)}
        {data &&
          data?.length > 0 &&
          data.map((item) => {
            return (
              <div onClick={()=>handleClick(item.id)}>
                <li key={item.id} id="question">
                  Question : {item.question}
                </li>
                {item.id === singleAccId ? <div> {item.answer}</div> : null}
                <button className='bg-black text-white p-4 border-2 rounded-3xl' id="expand" >
                  +
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};
