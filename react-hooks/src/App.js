import React, { useState, useEffect, Component } from 'react'

function App({id2}) {

  //useState() hook work and syntax

  // //initialization
  // const [name, setName] = useState()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  //papa todos
  const [todos,setTodos] = useState([{},{},{},{}])
  "d"
  "dee"
  "deepakshivam198"
  "deepakshivam1998@gmail.com"


  useEffect(() => {
    //get data from b.e with given id

    const data2 = [{}, {}, {}, {}]

    setTodos(data2)
    
    return () => {
      setTodos([])
      //clean-up
      console.log("component is unmounted")
    }
  }, [])


  //ComponentDidupdate
  //case1 :you havent provided an dependency
  // it will render for the very first time, when the page load or reload
  //single time


  //Shouldcomponentupdate
  //case 2: when you pass dependency in an array
  // it will keep eye on that state, and it will excute function accordinggle as per state change

  //componentWillUnmount
  //case3: when it will unmount
  // use return function







  return (
    <div className="App">
      <input placeholder="type your name" type="text" onChange={(e)=>setName(e.target.value)} />
      {console.log("second", name)}
     
    </div>
  );
}

export default App;
