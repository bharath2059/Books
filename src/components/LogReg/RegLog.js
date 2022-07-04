import './RegLog.css';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const RegLog = () => {
       const [values, setValues] = useState({
              Email: '',
              pass: ''
          })

          const handleChange = (e)=>{
              setValues(values =>({
                  ...values,
                  [e.target.name]: e.target.value
              }))
          }
       const showPass = () =>{
              let pass = document.getElementById('pass')
              let box = document.querySelector('.show')
              if (pass.type==='password'){
                     pass.type='text'
                     box.innerHTML='Hide'
                 }
                 else{
                     pass.type='password'
                     box.innerHTML='Show'
                 }
       }
       const showPass2 = () =>{
              let pass = document.getElementById('pass')
              let box = document.querySelector('.show')
              if (pass.type==='password'){
                     pass.type='text'
                     box.innerHTML='Hide'
                 }
                 else{
                     pass.type='password'
                     box.innerHTML='Show'
                 }
       }
       const changeForm = () =>{
              document.querySelector('.contet').style.transform = "translateX(-50%)"
              document.querySelector('.contet').style.transition="all 2s"
       }
       const changeForm2 = () =>{
              document.querySelector('.contet').style.transform = "translateX(0%)"
              document.querySelector('.contet').style.transition="all 2s"
       }

       console.log(values.pass)
       return (
              <div className='container'>
                     <div className='hey'>
                     <div className='contet'>
                            <div className='Logs'>
                                   <div className='mainCont'>
                                          <h2>LogForm</h2>
                                          <form>
                                                 <input type='email' placeholder='EmailAddress' name='Email' onChange={handleChange} required/>
                                                 <input type='password' placeholder='password' name='pass' onChange={handleChange} id='pass' required/>
                                                 <i className='show' onClick={showPass}>show</i>
                                                 <Link to='/Home'><input type='submit' value='Log'  id='log' /></Link>
                                          </form>
                                          <button onClick={changeForm} id='signup'>Sign Up</button>
                                          <a href='#'>Forgort password</a>
                                   </div>
                            </div>

                            <div className='Reg'>
                                   <div className='mainCont'>
                                          <h2>RegForm</h2>
                                          <form>
                                          <input type='text' placeholder='UserName' name='UserName' onChange={handleChange}/>
                                                 <input type='email' placeholder='EmailAddress' name='Email' onChange={handleChange}/>
                                                 <input type='password' placeholder='password' name='pass' onChange={handleChange}/>
                                                 <input type='password' placeholder='ConfirmPassword' name='passCon' onChange={handleChange}/>
                                                 <i className='show' onClick={showPass2}>show</i>
                                                 <input type='submit' value='Sign Up'  id='log'/>
                                          </form>
                                          <button onClick={changeForm2} >Already have account</button>
                                   </div>
                            </div>

                     </div>
                     </div>
              </div>
       );
};

export default RegLog;