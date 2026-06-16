'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineTableRows } from "react-icons/md";
import { CiSearch, CiCircleQuestion } from "react-icons/ci";
import { GiToggles } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline, IoBugOutline, IoColorPaletteOutline } from "react-icons/io5";
import { TbDashboard, TbTypography } from "react-icons/tb";
import { LuKeySquare } from "react-icons/lu";
import { BsShadows } from "react-icons/bs";
import { FiChrome } from "react-icons/fi";
import Chart from './Chart';

const FirstSection = () => {
  const [isNavbar, setIsNavbar] = useState(true); // start open
  const [open, setOpen] = useState(false);
  const [utilities, setUtilities] = useState(false);
  const router = useRouter();

  return (
    <>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        {/* Sidebar */}
        <div
          style={{
            width: isNavbar ? "13%" : "6%", // 🔹 Shrinks to 30% of original width
            backgroundColor: "#fff",
            overflowY: 'scroll',
            padding: "10px 5px",
            transition: "width 0.3s ease",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: isNavbar ? "flex-start" : "center",
          }}
        >
          {/* Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: "10px",
          }}>
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
            {isNavbar && (
              <h2 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'blue',
                marginLeft: '5px'
              }}>
                BERRY
              </h2>
            )}
          </div>

          {/* Dashboard */}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: "10px" }}>
            {isNavbar && <h1 style={{ marginBottom: '8px', fontSize: '18px', color: 'black' }}>Dashboard</h1>}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: '10px' }}>
              <TbDashboard style={{ color: '#616161', fontSize: "30px", paddingRight: '10px' }} />
              {isNavbar && <p onClick={() => router.push("/login")} style={{ margin: 0, cursor: 'pointer', color: 'gray' }}>Default</p>}
            </div>
          </div>

          {/* Pages */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            {isNavbar && <h1 style={{ marginBottom: "8px", fontSize: "18px", color: "black" }}>Pages</h1>}
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isNavbar ? "space-between" : "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(!open)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LuKeySquare style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
                  {isNavbar && <p style={{ margin: 0, fontWeight: open ? "bold" : "normal", color: open ? "#282727ff" : "gray" }}>Authentication</p>}
                </div>
                {isNavbar && <span style={{ fontSize: "12px", fontWeight: "bold", color: "black", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}>^</span>}
              </div>
              {isNavbar && open && (
                <div style={{ borderRadius: "10px", padding: "10px", marginTop: "5px", width: "200px" }}>
                  <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                    <li style={{ color: "gray", cursor: "pointer" }} onClick={() => router.push("/login")}>Login</li>
                    <li style={{ color: "gray", cursor: "pointer" }} onClick={() => router.push("/login")}>Register</li>
                  </ul>
                </div>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "8px" }}>
              <IoBugOutline style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
              {isNavbar && <p style={{ margin: 0, cursor: "pointer", color: "gray" }}>Error 404</p>}
            </div>
          </div>

          {/* Utilities */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" ,alignItems: "flex-start" }}>
            {isNavbar && <h1 style={{ marginBottom: "8px", fontSize: "18px", color: "black" }}>Utilities</h1>}
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
              <TbTypography style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
{isNavbar && <p onClick={() => router.push('/login')} style={{ margin: 0, cursor: "pointer", color: "gray" }}>Typography</p>}
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "8px" }}>
              <BsShadows style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
              {isNavbar && <p onClick={() => router.push('/login')} style={{ margin: 0, cursor: "pointer", color: "gray" }}>Shadows</p>}
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "8px" }}>
              <IoColorPaletteOutline style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
              {isNavbar && <p onClick={() => router.push('/login')} style={{ margin: 0, cursor: "pointer", color: "gray" }}>Colors</p>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isNavbar ? "space-between" : "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => setUtilities(prev => !prev)}
              >
                <LuKeySquare style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
{isNavbar && 
<p style={{ margin: 0, fontWeight: utilities ? "bold" : "normal", color: utilities ? "#282727ff" : "gray" }}>Ions</p>}
{isNavbar && 
<span 
style={{ fontSize: "12px", fontWeight: "bold", color: "black", transform: utilities ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}>^</span>}
              </div>
              {isNavbar && utilities && (
                <div style={{ borderRadius: "10px", padding: "10px", marginTop: "5px", width: "200px" }}>
                  <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                    <li style={{ color: "gray", cursor: "pointer" }} onClick={() => router.push('/login')}>Tabler Icons</li>
                    <li style={{ color: "gray", cursor: "pointer" }} onClick={() => router.push('/login')}>Material Icons</li>
                  </ul>
                </div>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "8px" }}>
              <FiChrome style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
              {isNavbar && <p onClick={() => router.push('/login')} style={{ margin: 0, cursor: "pointer", color: "gray" }}>Sample Page</p>}
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "8px" }}>
              <CiCircleQuestion style={{ color: "#616161", fontSize: "30px", paddingRight: "10px" }} />
              {isNavbar && (
                <p style={{ margin: 0, cursor: "pointer", color: "gray" }}>
                  <a href="https://codedthemes.gitbook.io/berry-vuetify/" style={{ color: "gray", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div style={{
          width: isNavbar ? '87%' : '94%', // 🔹 Expands when sidebar shrinks
          transition: 'width 0.3s ease',
        }}>
          <div style={{
            width: '100%',
            height: '100px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            justifyContent: 'space-between',
            zIndex: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <MdOutlineTableRows
                onClick={() => setIsNavbar(prev => !prev)}
                style={{ fontSize: '24px', marginLeft: '4px', cursor: 'pointer' }}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px gray solid',
                borderRadius: '10px',
                width: '450px',
                height: '50px',
                margin: '10px',
                paddingLeft: '15px',
                gap: '5px',
              }}>
                <CiSearch style={{ fontSize: '16px' }} />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    border: 'none',
                    outline: 'none',
                    fontSize: '16px',
                    width: '100%',
                  }}
                />
                <GiToggles
                  style={{
                    color: '#5E35B1',
                    fontSize: '20px',
                    backgroundColor: '#EDE7F6',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
              <FaRegBell
                style={{
                  border: 'solid 1px #beb7cbff',
                  backgroundColor: '#887ba1ff',
                  fontSize: '30px',
                  padding: '8px',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: 'pointer',
                }}
              />
              <IoSettingsOutline style={{ fontSize: '25px', paddingLeft: '5px', cursor: 'pointer' }} />
            </div>
          </div>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
