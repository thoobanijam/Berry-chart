'use client'
import React,{useState} from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Page = () => {
    const [showPassword , setShowPassword] = useState(false)
    const [checked , setChecked] = useState(false)
const CheckMark = ()=>{
    setChecked(prev =>!prev)

    }
  
  return (
    <div
      style={{
        
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eef2f6',
        height: '150vh',
      }}
    >
      <div
        style={{
          
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: '120vh',
        }}
      >
        {/* Logo + Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <img
            src="/img/blueberry.jpg"
            alt="Blueberry"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'blue',
              marginLeft: '5px', // space between image and text
            }}
          >
            BERRY
          </h2>
        </div>

        {/* Welcome Text */}
        <div
          style={{
            fontSize: '25px',
            fontWeight: 'bold',
            color: 'purple',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            marginTop: '10px',
          }}
        >
          Hi, Welcome Back
        </div>
        {/*credential  */}
        <div
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'gray',
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
        lineHeight:'4px'
          }}
        >
          Enter your credentials to continue

        </div>
        {/* google */}
        <div
          style={{
            fontSize: '15px',
            
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
        border:'1px solid rgba(106, 104, 104, 0.4)',
        width:'80%',
        flexDirection:'row',
        marginTop:'15px'
          }}
        >
            <FcGoogle style={{marginRight:'10px'}}/>
          <p style={{fontWeight: 'bold',
            color: 'gray',}}>Sign In With  Google</p>


        </div>
        {/* para */}
        <p style={{color:'black',marginTop:'30px'}}> or </p>

        {/*email para  */}
<p style={{color:'black',marginTop:'30px',fontWeight:'bold'}}> Sign In With  Email address </p>

{/*email input box  */}
<div style={{ position: 'relative', width: '80%', marginTop: '30px' }}>
  {/* Floating label */}
  <span
    style={{
      position: 'absolute',
      top: '-10px', // moves label up onto border
      left: '15px',
      backgroundColor: 'white', // same as container background
      padding: '0 5px',
      fontSize: '13px',
      color: 'gray',
    }}
  >
    Email address / Username
  </span>

  {/* Input container */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid rgba(106, 104, 104, 0.4)',
      borderRadius: '10px',
      fontSize: '15px',
    }}
  >
    <input
      type="text"
      value="info@codethemes.com"
      style={{
        border: 'none',
        outline: 'none',
        width: '100%',
        fontSize: '15px',
        height: '40px',
      }}
    />
  </div>
</div>
{/* password */}
<div style={{ position: 'relative', width: '80%', marginTop: '40px' }}>
  {/* Floating label */}
  <span
    style={{
      position: 'absolute',
      top: '-10px', // moves label up onto border
      left: '15px',
      backgroundColor: 'white', // same as container background
      padding: '0 5px',
      fontSize: '13px',
      color: 'gray',
    }}
  >
Password
  </span>

  {/* Input container */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid rgba(106, 104, 104, 0.4)',
      borderRadius: '10px',
      fontSize: '15px',
    }}
  >
    <input
      type={showPassword ? 'text' : 'password'}
      defaultValue="admin123"

      style={{
        border: 'none',
        outline: 'none',
        width: '100%',
        fontSize: '15px',
        height: '40px',
      }}
    />
    {/* Toggle icon */}
        <div
          onClick={() => setShowPassword(!showPassword)}
          style={{
            cursor: 'pointer',
            color: 'gray',
            fontSize: '18px',
            marginLeft: '8px',
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
  
  </div>
</div>

{/*checked box   */}
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: '10px',
  }}
>
  {/* Left side: Icon Checkbox + Remember Me */}
  <div
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    onClick={CheckMark}
  >
    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    <p style={{ fontWeight: 'bold', color: 'gray', marginLeft: '5px' }}>
      Remember Me?
    </p>
  </div>

  {/* Right side: Forgot Password */}
  <p style={{ cursor: 'pointer', color: 'blue', margin: 0 }}>
    Forgot password?
  </p>
</div>
{/* button */}
<button
          style={{
            border: '2px solid #5e35b1',
            backgroundColor: '#5e35b1',
            color: 'white',
            padding: '5px 20px',
            fontSize: '20px',
            
            fontWeight: 'bold',
            width: '80%',
            margin: '20px 20px',
            cursor: 'pointer',
          }}
        >
        Sign In
        </button>
{/* dont u have acc  */}
<div style={{color:'gray',marginTop:'5px',marginLeft:'200px',cursor:'pointer'}}>
    Don't You Have An Account?
</div>

      </div>
          </div>
  );
};

export default Page;
