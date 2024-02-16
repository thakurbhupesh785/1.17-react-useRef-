
import React, {useState, useEffect, UseRef, useRef} from 'react';

function MyComponent () {

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3= useRef(null);
  const inputRef4 = useRef(null);
  useEffect(() =>{
    console.log('component rendered')
  });

  function handleClick () {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
    inputRef4.current.style.backgroundColor = "";
  }

  function handleClick2 () {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
    inputRef4.current.style.backgroundColor = "";
  }

  function handleClick3 () {
    inputRef3.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef4.current.style.backgroundColor = "";
  }

  function handleClick4 () {
    inputRef4.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
    inputRef4.current.style.backgroundColor = "yellow";
  }


  return (
    <div>
      <button onClick={handleClick}>
      click me
    </button> <br/>
    <input ref={inputRef}/><br/>
    <br/>

    <button onClick={handleClick2}>
      click me
    </button> <br/>
    <input ref={inputRef2}/><br/>
    <br/>

    <button onClick={handleClick3}>
      click me
    </button> <br/>
    <input ref={inputRef3}/><br/>
    <br/>

    <button onClick={handleClick4}>
      click me
    </button> <br/>
    <input ref={inputRef4}/><br/>
    </div>
  )

}

export default MyComponent