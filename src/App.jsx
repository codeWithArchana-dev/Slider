import react from 'react'
import { sculptureList } from './data'

function App() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  //A state variable to retain the data between renders
  // A state setter function to update variable and trigger React to render the component again 

  function handleClick(){
    setIndex(index + 1)
  } // event handler is updating the local variable, index. 

  function handleprev(){
    setIndex(index-1);
  }

  let sculpture = sculptureList[index];
  

  function handleMoreClick(){
    setShowMore(!showMore) // fasle -> true, true -> false
  }// just another event handler that will help us to show the description 
  return (
    <>
      <button onClick={handleClick}>next</button>
        <button onClick={handleprev}>Previous</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img onClick={handleMoreClick}
        src={sculpture.url}
        alt={sculpture.alt}
      /> 
      <br></br>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : 'Show'} details
      </button>

       {/*conditional rendering */}
        {showMore && <p>{sculpture.description}</p>}
        
        {/* showmore -> true */}
       
    </>
  );
}

// show -> true => show the content 
// showmore -> false => hide the content

export default App;

