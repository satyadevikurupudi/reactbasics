import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './Navbar';
// const Navbar=()=>{
//   return(
//  <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//   );
// }
// const Banner=()=>{
//   return(
//     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://img.freepik.com/free-photo/beautiful-winter-landscape-with-snow-mountains-icy-water_181624-21843.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid_sidr" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://img.freepik.com/premium-photo/fabulous-winter-landscape_146671-1932.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid_sidr" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//   );
// }
// const Cards=()=>{
//   return(

//     <div class="card-group">
//     <div class="card">
//       <img src="https://img.freepik.com/free-photo/majestic-winter-landscape-pine-forest-with-trees-covered-with-snow-dramatic-scene-with-low-black-clouds-calm-before-storm_146671-15266.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid_sidr" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//     <div class="card">
//       <img src="https://img.freepik.com/premium-photo/winter-landscape-with-trees-covered-with-snow_209487-238.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid_sidr" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//     <div class="card">
//       <img src="https://img.freepik.com/free-photo/snow-covered-field-with-bare-trees-mountains-distance_422131-88.jpg?ga=GA1.1.1778684525.1734944973&semt=ais_hybrid_sidr" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
//   );
// }
// const UserDetails=()=>{
// return(
//  <>
//  <h1>bunny</h1>
//   </>
// );
// }
// const Button=()=>{
//   return(
//     <>
//     <button>Click me</button>
//     </>
//   )
// }
// const Faqs=()=>{
// return (
//   <div class="accordion accordion-flush" id="accordionFlushExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingOne">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//       <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingTwo">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//       <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="flush-headingThree">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//       <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//     </div>
//   </div>
// </div>
// );
// }
// const UserDetails=(props)=>{
//   return (
//     <>
//       <h1>Name:{props.name}</h1>
//       <h1>Email:{props.email}</h1>
//       <h1>Password:{props.password}</h1>
//       </>
//   );
// }
const App=()=> {
  // const name ="satya"
  const apikey ="http://www.omdbapi.com?apikey=501384bd";
  const [movies,setMovies]=useState([]);
  const [page,setPage]=useState(1);
  const fetchmovies=async()=>{
    const response=await fetch(`${apikey} &s=movie&page=${page}`)
    const data=await response.json();
    if(data.Search){
      setMovies((prevMovies)=>[...prevMovies,...data.Search])
    }
  }
  useEffect(()=>{
    fetchmovies();
  },[page]);
  const loadmoremovies=()=>{
    setPage((prevPage)=>prevPage+1);
  }
    return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <div className="row movie-row">
        {
          movies.map((movie)=>(
            <div className='col' key={movie.imdbID}>
              <div className="card">
                <img src={movie.Poster !== "n/a" ? movie.Poster:"https://iva.placeholder.com/150"}/>
                 alt={movie.Title}
                 <div className="card-body">
                  <h1 className='card-title'>{movie.Title}</h1>
                  <p className='card-text'>year:{movie.Year}</p>
               </div> 
            </div> 
          </div>     
          ))}
          <div className='text-center mt-4'>
            <button className='btn btn-primary' onClick={loadmoremovies}>loadmoremovies</button>
          </div>
      </div>
    </div>
    {/* <Navbar/>
    <Banner/>
    <Cards/> */}
    {/* { <h1>Hello,{name}</h1>
    <UserDetails/> }
    <Button/>
    <Faqs/> */}
    {/* <UserDetails name="satya" email="satya@gmail.com" password="12345"/>
    <UserDetails name="bunny" email="bunny5661@gmail.com" password="949056"/>
    <UserDetails name="sai" email="sai@gmail.com" password="12345"/> */}
   </>
  );
}


export default App;
