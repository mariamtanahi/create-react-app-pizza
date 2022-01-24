import React from 'react'
import {SidebarContainer , SidebarLink ,SidebarMenu ,SidebarRoute, SideBtnWrap, CloseIcon, Icon} from './SidebarElements'


const  Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Dessert</SidebarLink>
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
