import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
    background: #001064;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px
    justify-content: flex-start;
    align-items: center;
    color: #88ffff;
`;

const SidebarNav = styled.nav`
    background: #001064;
    width: 250px;
    height: 50vh;
    display: flex;
    justify-content: start;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100')};
    transition: 350ms;
    
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar =  () => setSidebar(!sidebar);

  return (
  <>
    <Nav>
       <NavIcon to='#'>
            <i class="fa-solid fa-bars" onClick={showSidebar}/>
       </NavIcon>
    </Nav>
       <SidebarNav sidebar={sidebar}>
           <SidebarWrap>
                <NavIcon to='#'>
                  <i class="fa-solid fa-xmark" onClick={showSidebar}/>
                </NavIcon>
           </SidebarWrap>
           {SidebarData.map((item, index) => {
               return <SubMenu item={item} key={index} />;
           })}
       </SidebarNav>
   </>
  );
};

export default Sidebar;