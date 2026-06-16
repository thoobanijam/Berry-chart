import React from 'react';
import { RiLayout3Line } from "react-icons/ri";

import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowDownLeft } from "react-icons/go";
import { HiMiniHome } from "react-icons/hi2";
import BarChart from './BarChart';
import CurvedLineChart from './CurvedLineChart'
import { RiMenu3Line } from "react-icons/ri";
import RightSideChart from './RightSideChart'

const Chart = () => {
  return (
    <>
    <div style={{
      width: '100%',
      backgroundColor: '#eef2f6',
      display: 'flex',
      flexDirection: 'row',
      height: '150vh',
      borderRadius: '20px',
      
      paddingTop: '5px'
    }}>
      
      {/* navbar */}
      
      {/* middle section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        padding: "20px",
        borderRadius: '20px',
        
        backgroundColor: '#cee2f7ff'
      }}>
        
        {/* left side box */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '20px',
        }}>     
          
          {/* 1st small box */}
          <div style={{
            display: 'flex',
            backgroundColor: "#522ea8",
            borderRadius: '15px',
            padding: '10px',
            margin: "10px",
            height: "200px",
          
            width: '400px',
            flexDirection: 'column', // stack vertically
            justifyContent: 'space-between'
          }}>
            {/* Icons row */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px',justifyContent:'space-between' }}>
              <HiOutlineSquare2Stack
                style={{
                  color: "white",
                  backgroundColor: "#251a3eff",
                
                  padding: '10px',
                  fontSize: '45px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              />
              <HiDotsHorizontal
                style={{
                  color: "white",
                  backgroundColor: "#251a3eff",
                  border: "solid 2px #522ea8",
                  padding: '10px',
                  fontSize: '45px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              />
            </div>

            {/* Amount */}<h1 style={{
  fontSize: '34px',
  fontFamily: "Roboto,sans-serif",
  color: '#FFFFFF',
  fontWeight: 'bold',
  marginLeft: '10px',
  marginTop: '13px',
  marginBottom: '2px',  // small gap to next line
  lineHeight: '3',    // tighter spacing
  display: 'flex',
  alignItems: 'center'  // vertical alignment for arrow
}}>
  $500.00

  <GoArrowUpRight style={{
    fontSize: '25px',
    marginLeft: '8px',   // closer to text
    fontWeight: 'bold',
    borderRadius:'15px',
    border:'1px solid white'  }}/>
</h1>
<h1 style={{
  fontSize: '10px',
  fontFamily: "Roboto,sans-serif",
  color: '#FFFFFF',
  fontWeight: 'bold',
  marginLeft: '10px',
  marginTop: '0px', // no extra space above
}}>
  TOTAL EARNINGS
</h1>

          </div>

          {/* 2nd small box */}
          <div style={{
            display: 'flex',
            backgroundColor: "#1e88e5",
            borderRadius: '15px',
            padding: '10px',
            margin: "10px",
            height: "200px",
            
            width: '400px',
            flexDirection:'column',
            justifyContent:"space-between"
          }}>
            {/*left side 2nd box content   */}
          <div style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
}}>
  
  {/* Left side - Shopping Cart */}
  <FaShoppingCart
    style={{
      color: "white",
      backgroundColor: "#251a3eff",
      border: "solid 2px #522ea8",
      padding: '10px',
      fontSize: '45px',
      borderRadius: '10px',
      cursor: 'pointer'
    }}
  />

  {/* Right side - Button + Year */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px',justifyContent:'space-between' }}>
    <button
      style={{
        color: "white",
        backgroundColor: "#154772ff",
        
        padding: '5px 10px 5px  10px',
        fontSize: '15px',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      Month
    </button>
    <p
      style={{
        color: "white",
        fontSize: '15px',
        fontWeight: "bold",
        cursor: 'pointer'
      }}
    >
      Year
    </p>
      </div>
      

</div>
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
  
  {/* Left column (amount + arrow + label) */}
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    fontFamily: "Roboto,sans-serif",
    fontWeight: 'bold',
    marginLeft: '10px'
  }}>
    
    {/* Row 1: amount + arrow */}
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: '34px',
  
      padding: '5px',
      borderRadius: '8px'
    }}>
      $108
      <GoArrowDownLeft style={{
        fontSize: '25px',
        marginLeft: '8px',
        fontWeight: 'bold',
        borderRadius: '15px',
        
        padding: '2px'
      }} />
    </div>

    {/* Row 2: label */}
    <h1 style={{
      fontSize: '10px',
      marginTop: '5px'
    }}>
      TOTAL ORDERS
    </h1>
  </div>

  {/* Right column (white box) */}
  <div style={{
    width: '250px',
    height: '135px',
    
    borderRadius: '15px',
    marginBottom:'20px',
    
  }}>
    <CurvedLineChart/>
  </div>

</div>

            
          </div>
        </div>

        {/* large middle white box */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '20px',
        }}>
          <div style={{
            width: '100%',
            height: "105vh",
            
            borderRadius: '10px',
            padding: '10px',
            display: "flex",
            backgroundColor: "white",
            alignItems:'flex-end'
          }}>
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:"85vh"}}>
      <div style={{display:'flex',flexDirection:"row",justifyContent:'space-between',padding:'20px'}}>
    <div style={{display:'flex',flexDirection:"column",}}>
<p style={{color:'gray',fontSize:'16px'}}>Total Growth</p>
<h1 style={{color:'black',fontSize:'20px',fontWeight:"bold"}}>$2,324.00</h1>
</div>
<div style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:'space-between',}}>
{/* Dropdown Menu */}
        <div className="relative group" style={{flex:1,padding:'10px'}}>
  {/* Input with arrow */}
  <input
    type="text"
    value="Today"
    readOnly
    className="hover:text-yellow-700 pr-8"
    style={{
      border: '1px solid gray',
      width: '200px',
      borderRadius: '25px',
      padding: '8px 12px',
      cursor: 'pointer'
    }}
  />
  
  {/* Black reverse triangle (arrow) */}
  <span
    className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
  >
    ▼
  </span>

  {/* Dropdown */}
  <div className="absolute top-full left-0 mt-2 w-[200px] h-[200px] rounded-[10px] bg-blue-500 hidden group-hover:block z-10 shadow-lg">
    <ul className="p-4 text-white space-y-2">
      <li className="hover:text-yellow-300 cursor-pointer">This Month</li>
      <li className="hover:text-yellow-300 cursor-pointer">This Year</li>
    </ul>
  </div>
</div>



<RiMenu3Line className="bg-transparent hover:bg-blue-500"
style={{color:'#0b0b0a60',fontSize:'40px',fontWeight:"bold",marginLeft:'140px',                  
                  border: "solid 1px #ccc7d7ff",
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                
}}/>
</div>
</div>

            <div style={{display:'flex',flexDirection:'column',
              marginTop:'120px',  height: '700px' }}>
            
           <BarChart />
          </div></div></div>
        </div>
      </div>

      {/* right side div */}
      <div style={{
        width: '35%',
        height: '130vh',
        padding: '10px',
        backgroundColor: '#c5d9edff'
      }}>
        <div style={{
          width: '100%',
          height: '90px',
          border: '2px solid #1e88e5',
          borderRadius: "15px",
          backgroundColor: '#1e88e5',
          marginBottom: '20px',
          display:"flex",
          flexDirection:'row',
        }}>
          <div style={{}}>
            <RiLayout3Line

                style={{
                  color: "white",
                  backgroundColor: "#251a3eff",
                  border: "solid 1px #522ea8",
                  padding: '10px',
                  fontSize: '40px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display:'flex',
                  alignItems:'center',
                  marginLeft: '10px',
                   marginTop: '13px',
                  marginBottom: '2px',
                }}
              /></div>
<div style={{display:'flex',flexDirection:'column'}}>
              <h1 style={{
  fontSize: '20px',
  fontFamily: "Roboto,sans-serif",
  color: '#FFFFFF',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center' ,
  marginLeft:"10px",
  marginTop:'10px',
}}>
  $203k

  </h1>
<h1 style={{
  fontSize: '10px',
  fontFamily: "Roboto,sans-serif",
  color: '#FFFFFF',
  fontWeight: 'bold',
  marginLeft:"10px",
  marginTop:'10px',
  }}>
  TOTAL INCOME
</h1></div>



        </div>
        <div style={{
          width: '100%',
          height: '90px',
          border: '2px solid white',
          borderRadius: "15px",
          backgroundColor: 'white',
          marginBottom: '20px'
        }}>
          <div
  style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  }}
>
  {/* Home Icon */}
  <HiMiniHome
    style={{
      color: 'yellow',
      backgroundColor: '#cbc7d4ff',
      border: 'solid 2px #e0dbe9ff ',
      padding: '10px',
      fontSize: '40px',
      borderRadius: '10px',
      cursor: 'pointer',
      marginLeft: '10px',
      marginRight: '10px', // space between icon and text
    }}
  />

  {/* Text Section */}
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1
      style={{
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif',
        color: 'black',
        fontWeight: 'bold',
        margin: 0,
      }}
    >
      $203k
    </h1>
    <h1
      style={{
        fontSize: '10px',
        fontFamily: 'Roboto, sans-serif',
        color: 'gray',
        fontWeight: 'bold',
        margin: 0,
      }}
    >
      TOTAL INCOME
    </h1>
  </div>
</div>

        </div>
        <div style={{
          width: '100%',
          height: '100vh',
          border: '2px solid #dde5ecffffff',
          borderRadius: "15px",
          backgroundColor: 'white',
          marginBottom: '20px'
        }}>
          
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px'}}>
<h1 style={{fontSize:'20px',fontWeight:'bold'}}>Popular Stocks</h1>
<HiDotsHorizontal
                style={{
                  color: "blue",
                  backgroundColor: "#cec8daff",
                  border: "solid 2px #ccc7d7ff",
                  padding: '10px',
                  fontSize: '45px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              /></div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:"column",padding:'10px'}}>
<h1 style={{color:'#522ea8',fontSize:'15px'}}>Bajaj Finery</h1>
<p style={{color:'gray',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{fontWeight:'bold',fontSize:'15px',color:'black'}}>$1839.00</h1></div>
<div style={{border:'1px solid #ccc5deff',borderRadius:'15px',width:'95%',height:'200px',padding:"20px",
  margin:'10px',paddingRight:'10px',backgroundColor:'#e8e5eeff'}}>
<RightSideChart/>
</div>
<div style={{width:'100%',height:'230px',overflowY: 'scroll',marginTop:'30px'}}>
{/* 1 div  */}
<div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
<div style={{display:'flex',flexDirection:"column",padding:'10px',cursor:'pointer'}}
               
>
<h1 style={{color:'gray',fontSize:'15px'}}>Bajaj Finery</h1>
<p style={{color:'green',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{ fontSize: '15px', color: 'gray' }}>
  $1839.00
  <span style={{
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'yellowgreen',
    width: '20px',
    textAlign: 'center',
    margin: 0,
color:'green',
    marginTop:'4px',
    display: 'inline-block',
    padding: '0 5px',
    marginLeft:'4px',
    lineHeight:'20px',
    
  }}>
    ^
  </span>
</h1>
</div>


{/*2nd div  */}
<div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:"column",padding:'10px'}}>
<h1 style={{color:'gray',fontSize:'15px'}}>TTML</h1>
<p style={{color:'red',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{ fontSize: '15px', color: 'gray' }}>
  $6.368
  <span style={{
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'lightpink',
    width: '20px',
    textAlign: 'center',
    margin: 0,
color:'red',
    marginTop:'4px',
    display: 'inline-block',
    padding: '0 5px',
    marginLeft:'4px',
    lineHeight:'20px',
    cursor:'pointer'
  }}>
    v
  </span>
</h1>
</div>{/* 2nd div close  */}
{/*3rd div  */}

<div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:"column",padding:'10px'}}>
<h1 style={{color:'gray',fontSize:'15px'}}>Reliance</h1>
<p style={{color:'green',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{ fontSize: '15px', color: 'gray' }}>
  $458.63
  <span style={{
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'yellowgreen',
    width: '20px',
    textAlign: 'center',
    margin: 0,
color:'green',
    marginTop:'4px',
    display: 'inline-block',
    padding: '0 5px',
    marginLeft:'4px',
    lineHeight:'20px',
    cursor:'pointer'
  }}>
    ^
  </span>
</h1>
</div>{/*3rd div close   */}
{/*4th div  */}

<div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:"column",padding:'10px'}}>
<h1 style={{color:'gray',fontSize:'15px'}}>TTML</h1>
<p style={{color:'red',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{ fontSize: '15px', color: 'gray' }}>
  $5.631
  <span style={{
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'lightpink',
    width: '20px',
    textAlign: 'center',
    margin: 0,
color:'red',
    marginTop:'4px',
    display: 'inline-block',
    padding: '0 5px',
    marginLeft:'4px',
    lineHeight:'20px',
    cursor:'pointer'
  }}>
    v
  </span>
</h1>
</div>{/*4th div close   */}
{/*5th start  */}
<div style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:"column",padding:'10px'}}>
<h1 style={{color:'gray',fontSize:'15px'}}>Stolon</h1>
<p style={{color:'red',fontSize:"13px"}}>10% profit</p></div>
<h1 style={{ fontSize: '15px', color: 'gray' }}>
  $6.368
  <span style={{
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'lightpink',
    width: '20px',
    textAlign: 'center',
    margin: 0,
color:'red',
    marginTop:'4px',
    display: 'inline-block',
    padding: '0 5px',
    marginLeft:'4px',
    lineHeight:'20px',
    cursor:'pointer'
  }}>
    v
  </span>
</h1>
</div>{/*5th div close   */}

</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'80px'}}>
<button style={{color:'blue',cursor:'pointer'}}>View All ► </button></div>



        </div>
      </div>
          </div>
          {/*last section   */}
      <div style={{display:'flex',flexDirection:'row',justifyContent:"space-between",backgroundColor:'#e9e7efff'}}>
<div style={{color:'black',marginLeft:"90px",marginTop:'20px'}}>
  Berry ♥ crafted by Team Codedthemes | distributed by ThemeWagon</div>
  <div style={{display:'flex',flexDirection:'row',justifyContent:"space-between",padding:'20px',}}
  >
<button style={{marginRight:'10px',cursor:'pointer'}}className="text-black hover:text-blue-500"
>Home</button>
<button style={{marginRight:'10px',cursor:'pointer'}}className="text-black hover:text-blue-500"
>Documentation</button>
<button style={{marginRight:'10px',cursor:'pointer'}}className="text-black hover:text-blue-500"
>Support</button>
  </div>
      </div>
</>
  );
};

export default Chart;
