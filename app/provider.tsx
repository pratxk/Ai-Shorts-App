'use client'
import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({ children }: {
    children: React.ReactNode
}) {

    const { user } = useUser();

    const isNewUser = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;

        if (email) {
            const result = await db
                .select()
                .from(Users)
                .where(eq(Users.email, email));
            if (!result[0]) {
                await db.insert(Users).values({
                    name: user?.fullName || '',
                    email: email,
                    imageUrl: user?.imageUrl || '',
                });
            }
        }
    };

    useEffect(()=>{
        user&&isNewUser();
    },[user])
    return (
        <div>{children}</div>
    )
}

export default Provider