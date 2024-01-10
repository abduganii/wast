import Image from 'next/image'
import React from 'react'

export default function WorkProgress() {
    return (
        <div className='w-full object-cover mb-[128px] bg-[#EAE9E7]'>
            <Image
                className='mx-[auto]'
                src={'/image/Wasteless11.png'}
                width={1920}
                height={1016}
            />
        </div>
    )
}
