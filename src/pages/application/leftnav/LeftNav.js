import React from 'react'
import './leftnav.css'
import SidebarItem from './SidebarItem'
import SidebarTitle from './SidebarTitle'

export default function LeftNav(props) {
    return <div style={{backgroundColor: 'var(--indigo-dye)', width: '12rem'}}>
        <SidebarItem link='/' name='Home' />
        <SidebarTitle title='Incident Management' />
        <hr className='m-0 p-0' style={{color: 'white'}} />
        <SidebarItem link='/incident' name='Incidents' />
        <SidebarItem link='/incident' name='New Incident' />
        <SidebarItem link='/incident' name='Metrics' />
        <SidebarItem link='/incident' name='Search' />
        <SidebarTitle title='Problem Management'/>
        <hr className='m-0 p-0' style={{color: 'white'}} />
        <SidebarItem link='/problem' name='New Problem' />
        <SidebarItem link='/problem' name='Search' />
        <SidebarTitle title='Administration'/>
        <hr className='m-0 p-0' style={{color: 'white'}} />
        <SidebarItem link='/admin' name='Admin Tools' />
    </div>
}