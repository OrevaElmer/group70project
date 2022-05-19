import React, { useRef, useState} from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageIcon from '@mui/icons-material/Language';
import EgalaseIcon from "../image/egalase.jpg";
import { Email} from '../../AccountAuth/Login'
export default function Navbar() {
  const imageRef = useRef('')
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const phonenumRef = useRef('')
  const [profile, setProfile] = useState(false)
   const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const inputImage = useRef()

 
  const SaveProfile = (e) => {
    e.preventDefault()
   if (fname && lname && phone && imageRef){
    
      localStorage.setItem('firstName', fname);
      localStorage.setItem('lastName', lname);
      localStorage.setItem('phone',phone);
      localStorage.setItem('profileImage', JSON.stringify(imageRef.current.value))
      
      setProfile(false)
   }
   console.log(inputImage.current.value)
  }
 
    const onSelectFile = (event) => {
    let reader = new FileReader();
    reader.onload = function() {
      imageRef.current.src = reader.result;
    }
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(JSON.stringify(imageRef.current.src))
  }
  const profilePopup = () => {
      setProfile(!profile)
  }
  return (
    <>
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            <select>
              <option>English</option>
              <option>French</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="item" onClick={profilePopup}>
            <img src={localStorage.getItem('profileImage') ? localStorage.getItem('profileImage'): EgalaseIcon} alt="" className="avatar" ref={imageRef}/>
            
          </div>
          {localStorage.getItem('firstName') && (
              <h4>{localStorage.getItem('firstName')}</h4>
            )}<span> </span>
            {localStorage.getItem('lastName') && (
              <h4>{localStorage.getItem('lastName')}</h4>
            )}
        </div>
      </div>
    </div>
    {profile && <form className='form'>
      <div className='Profile'>
      <div className='ProfileImage'>
        <img ref={imageRef} src="" alt='upload' className='Images'/>
        <input type='file' onChange={onSelectFile} className='fileInput' />
      </div>
      </div>
      <Email type='text' placeholder='john' ref={firstNameRef} name='first' value={fname}
            onChange={(e) => setFname(e.target.value)}/>
      <Email type='text' placeholder='doe' ref={lastNameRef} name='last' value={lname}
            onChange={(e) => setLname(e.target.value)}/>
      <Email type='phone' placeholder='+2348769429' ref={phonenumRef} name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <button type='submit' onClick={SaveProfile}>Save Details</button>
    </form>}
    </>
  )
}
