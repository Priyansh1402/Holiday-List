import './App.css'

function App() {
  const holidaylist =[
    {location:1,city:'Goa',countries:'India'},
    {location:2,city:'Amsterdam',countries:'Netherland'},
    {location:3,city:'New York',countries:'USA'},
    {location:4,city:'Darjeeling',countries:'India'},
    {location:5,city:'Tokyo',countries:'Japan'},
    {location:6,city:'Lonavala',countries:'India'}]
    
   
  return (
    <div>
      <ol> 
        { holidaylist.filter((item)=>item.countries === "India" )
                     .map((item,location) => <li key={location}>{item.city}</li>)}
      </ol>
      
    </div>
  );
}

export default App;
