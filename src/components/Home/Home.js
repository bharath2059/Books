import './Home.css';
import { Link } from 'react-router-dom';
import Add from './Adds';

const Home = () => {
       
       return (
              <div className='home' id='makao'>
                     <div className='navigation'>
                            <nav>
                                   <ul>
                                          <a href='#makao'><li>Home</li></a>
                                          <a href='Home'><li>Search</li></a>
                                          <a href='#profile'><li>My Account</li></a>
                                          <a href='#addssection'><li>Post Add</li></a>
                                   </ul>
                            </nav>
                     </div>
                     <div className='mainHome'>
                            <h4>Available Adds</h4>
                            <div className='adds'>
                                   {
                                          Add.map(add =>(
                                                 <section>
                                                        <img src={add.img}/>
                                                        <h3>{add.name}</h3>
                                                        <h4>${add.price}</h4>
                                                 </section>
                                          ))
                                   }
                            </div>
                     </div>
                     <div id='addssection'>
                            <h4>Post add</h4>
                            <form>
                                   <input type='file' required accept='Image/*' id='file'/>
                                   <input type='text'  placeholder='Title' required/>
                                   <input type='text' placeholder='Description'  required/>
                                   <input type='text' placeholder='Author' required />
                                   <input type='text' placeholder='Location'  required/>
                                   <input type='number' placeholder='Contacts'  required/>
                                   <input type='number' placeholder='Price'  required/>
                                   <input type='submit' value='post'  className='post'/>
                            </form>
                     </div>
                     <div id='profile'>
                            <h2>Profile</h2>
                            <section>
                                   <p>USERNAME : Jane Doe</p>
                                   <p>PASSWORD :   ...........</p>
                                   <p>EMAIL :  www.janedoe@yahoo.com</p>
                                   <button>Edit</button>
                            </section>
                            <button className='btn'>Your Adds</button>
                     </div>
              </div>
              
       );
};

export default Home;