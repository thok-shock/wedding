import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function SidebarItem(props) {
    return <div className='side'>
        <a href={props.link}>{props.name}</a>
    </div>
}