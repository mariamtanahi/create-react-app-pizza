import React from 'react'
import {SidebarContainer , SidebarLink ,SidebarMenu ,SidebarRoute, SideBtnWrap, CloseIcon, Icon} from './SidebarElements'


const  Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="pizza" 
                            spy={true} 
                            smooth={true} 
                            duration={500} >
                            Pizza
                </SidebarLink>
                <SidebarLink to="sweet" 
                            spy={true} 
                            smooth={true} 
                            duration={500}>Dessert</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">
                    Order now
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default  Sidebar
