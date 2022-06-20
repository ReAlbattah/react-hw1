const Cats =(info)=>{
   
   return(
   <div>
        <img src={info.image}/>
        <h2>Type: {info.type}</h2>
        <p>Lifespan: {info.age} </p>
    </div>
   );
}

export default Cats;