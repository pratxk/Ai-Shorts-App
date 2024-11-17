import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

function DashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>
                <div className='hidden md:block h-screen bg-white fixed mt-[65px]'>
                    <SideNav />
                </div>
                <div>
                    <Header />
                    <div className='md:ml-64'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout