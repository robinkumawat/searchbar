import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Google from "./assets/google logo.png"
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [finaldata, setFinalData] = useState([])
  const api = 'AIzaSyCjomm7aE_JqyO4nsFDWs8QTRfFPscSfFI'
  const cx = "f5d309ab72fb0431a"


  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api}&cx=${cx}&q=${search}`
      );


      const data = await response.json();
      console.log(data.items);
      setFinalData(data.items)
      setSearch("")
    } catch (error) {
      console.error('Error:', error);
    }


  };

  // console.log(search)
  console.log(finaldata)
  return (
    <>
      <div className="logo">
        {/* <img src={Google} alt="" /> */}
        <div className="google">
          <span ><h1 className='G'>G</h1></span><span><h1 className='e'>O</h1></span><span><h1 className='o'>O</h1></span><span><h1 className='G'>G</h1></span><span><h1 className='l'>L</h1></span><span><h1 className='e'>E</h1></span>
        </div>
        <div className="googleinput">
          <input type="text"
            placeholder='search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
          {
            (finaldata.length !== 0) ? finaldata.map((value, index) => {
              return <div style={{ width: "30%", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "gray", borderRadius: "5px", boxShadow: "5px 5px 5px rgba(80,80,80,0)", margin: "20px", color: "white" }}>
                <h2>{value.title}</h2>
                <p>{value.kind}</p>
                <button className='link'><a href={value.link}> Please click me</a></button>
              </div>
            }) : ""
          }
        </div>
      </div>


    </>
  )
}

export default App






{/* <script async src="https://cse.google.com/cse.js?cx=f5d309ab72fb0431a">
</script>
<div class="gcse-search"></div> */}
