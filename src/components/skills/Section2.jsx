import skillsVideo from '../../../public/videos/skillsVideo.mp4'
import TextMarquee from '../custom/TextMarquee'
import React, {memo} from 'react'

const items = [
    "Innovation",
    "Collaboration",
    "Excellence",
    "Trust",
    "Precision"
];

const Section2 = () => {
    return (
        <>
            <div className='relative min-h-1/3 w-screen bg-[#050505] py-10 flex justify-center items-center pointer-events-none'>
                {/* Background Glow */}
                <div className="absolute top-0 left-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />
                <div className="absolute bottom-0 right-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />

                <div className='relative h-auto w-[95%] sm:w-[80%] border-2 border-white/70 rounded-md overflow-hidden'>
                    <video src={skillsVideo} loop muted playsInline autoPlay className='h-full w-full'></video>
                </div>
            </div>
            <div>
                <TextMarquee items={items} className='text-4xl text-white border-t border-b border-white'/>
            </div>
        </>
    )
}

export default React.memo(Section2)