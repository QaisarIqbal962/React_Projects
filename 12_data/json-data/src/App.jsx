import axios from "axios";
import { useState } from "react";

function App() {

 const [data, setData] = useState([])
  const Getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data)
  };
  return (
    <>
      <div className="p-10">
        <button
          onClick={Getdata}
          className="bg-teal-800 text-white font-semibold text-2xl py-6 px-3 rounded border-2 border-gray-500 hover:bg-teal-700 active:scale-90"
        >
          Get Data
        </button>
        <div className="p-5 mt-5 bg-gray-950 text-white">
          {data.map((elem,idx)=> {
            return  <div className="bg-gray-50 text-black flex"></div>
           


          })}
        </div>
      </div>
    </>
  );
}

export default App;
