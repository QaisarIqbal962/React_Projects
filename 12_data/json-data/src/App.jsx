import { useState } from "react";
import axios from "axios";


function App() {
const Getdata = async()=> {
  const response = await axios.get("https://picsum.photos/v2/list")
  console.log(response)
 

}
  return (
    <>
      <div className="p-10">
        
        <div className="p-5 mt-5 bg-gray-950 text-white"></div>
      </div>
    </>
  );
}

export default App;
