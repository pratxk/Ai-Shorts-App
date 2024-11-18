'use client';

import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

interface FormData {
    [key: string]: string; // Allows dynamic keys for form data
}

function CreateNew() {
    const [formData, setFormData] = useState<FormData>({}); // Typing formData as an object with string keys and values

    function handleInputChange(fieldName: string, fieldValue: string) {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue,
        }));
    }

    return (
        <>
            <div className="md:px-20">
                <h2 className="font-bold text-4xl text-primary text-center">Create New</h2>
                <div className="mt-10 shadow-md p-10">
                    <SelectTopic onUserSelect={handleInputChange} />
                    <SelectStyle onUserSelect={handleInputChange} />
                    <SelectDuration onUserSelect={handleInputChange} />
                    <Button className='mt-4 w-full'>Create Short Video</Button>
                </div>
            </div>
        </>
    );
}

export default CreateNew;
