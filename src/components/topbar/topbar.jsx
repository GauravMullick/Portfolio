import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function topbar({menu, setMenu}) {
  return (
    <div className={"topbar " +(menu && "active") }>
        <div className='wrapper'>
            <div className='left'>
                <a href='#intro' className='logo'>Gaurav</a>
                <div className='itemContainer'>
                    <Person className="icon"/>
                    <span>+91 9453919453</span>
                </div>
                <div className='itemContainer'>
                    <Mail className="icon"/>
                    <span>gauravmullick007@gmail.com</span>
                </div>
            </div>
            <div className='right'>
            <div className='hamburger' onClick={()=>{setMenu(!menu)}}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
            </div>
        </div>
    </div>
  )
}
