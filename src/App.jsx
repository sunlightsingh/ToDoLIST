import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  // it creaates the variabele which holds the current at state 
    const [Items, setItems] = useState([]);
  // it is an array which will store the items when we will be writing it in inut feild


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  // it will show the change on the page 

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
    // this will change the input item to empty because we are setting the inpput ls
    // we are setting it after we write in the input feild
  };
  // this whole code will take the previous item using three dot and add the last value
  // which we have intered 

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do list</h1>
          <br />
          <input
            type="text"
            placeholder="add a item"
            // all input calls an event which is called on change
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* {<li> {inputList}</li>} */}
            
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;


//hooks == function
//props == object
// all input calls an event which is called on change
// to show something on anywhere we will be using the hooks (usestate)
//useState is React Hook that allows you to add state to a functional component. 
// usestate
// map method study it very well
// fad arrow function
// write in curly brases {} if u are writing the java script in the jsx file
// spread operator

//this is map method use to render the items in the array and it is very use full
// learn abvout props
// for render the component we have to return it
// react fragment
// props are emmutable
// to check how it is going to delete which item we will be using id which altemately is the index
// and key as well
// delete the items which are present int the filter function







// import React, { useState } from "react";
// import ToDoLists from "./ToDoLists";

// const App = () => {
//   const [inputList, setInputList] = useState("");
//   const [Items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setInputList(event.target.value);
//   };
//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });
//     setInputList("");
//   };
//   const deleteItems = () => {
//     console.log("deleted");
//   };
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>To Do list</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="add a item"
//             value={inputList}
//             onChange={itemEvent}
//           ></input>
//           <button onClick={listOfItems}> + </button>
//           <ol>
//             {/* <li> {inputList}</li> */}
//             {Items.map((itemval, index) => {
//               return
//               <ToDoLists
//                 key={index}
//                 id={index}
//                 text={itemval}
//                 onselect={deleteItems}
//               />;
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;
