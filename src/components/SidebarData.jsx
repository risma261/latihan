import React from 'react'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <i class="fa-solid fa-house" />,
        iconClosed: <i class="ri-arrow-down-s-fill" />,
        iconOpened: <i class="ri-arrow-up-fill" />,
    },
    {
        title: 'About',
        path: '/About',
        icon: <i class="fa-solid fa-circle-info"/>,
        subNav: [
            {
                title: 'About App',
                path: '/about/about-app',
            },
            {
                title: 'About Author',
                path: '/about/about-author',
            }
        ]
      
    },   
];

