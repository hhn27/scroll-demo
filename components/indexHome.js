'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, {  useEffect, useLayoutEffect } from 'react';

export default function IndexHome(){
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll(
                    {
                        lenisOptions: {
                            wrapper: window,
                            content: document.documentElement,
                            lerp: 0.1,
                            duration: 1.2,
                            orientation: 'vertical',
                            gestureOrientation: 'vertical',
                            smoothWheel: true,
                            smoothTouch: true,
                            wheelMultiplier: 1,
                            touchMultiplier: 0.5,
                            normalizeWheel: true,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        }
                    }
                );
            }
        )()
        // async function getImage() {
        //     for(i=0; i<98; i++){
        //         const img = new Image();
        //         if(i<10)
        //             img.src = `/Tissues_05000${i}.png`;
        //         else
        //             img.src = `/Tissues_0500${i}.png`;
        //         await img.decode();
        //         if(i===0)
        //             img.classList.add('w-full h-full absolute top-0 left-0 object-contain tissue')
        //         else
        //             img.classList.add('w-full h-full absolute top-0 left-0 object-contain tissue active')
        //         img.fetchPriority = "high";
        //         document.querySelector(".img-container").appendChild(img);
        //     }
        //   }
    }, [])

    useLayoutEffect(() => {
        const list = document.querySelectorAll(".tissue")
        list.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: '.frame',
                start: `start+=${window.innerWidth * 0.02 * index}vw`,
                onEnter: self => {
                    gsap.to(item, {
                        zIndex: '10',
                        opacity: '1',
                        duration: '0'
                    })
                    // item.classList.add("active")
                    for(let i=0; i<list.length; i++){
                        if(index!==i){
                            gsap.to(list[i], {
                                zIndex: '1',
                                opacity: '0',
                                duration: '0'
                            })
                            // list[i].classList.remove("active")
                        }
                    }
                },    
                onLeaveBack: self => {
                    // item.classList.remove("active")
                    gsap.to(item, {
                        zIndex: '10',
                        opacity: '1',
                        duration: '0'
                    })
                    for(let i=0; i<list.length; i++){
                        if(index==0){
                            gsap.to(list[0], {
                                zIndex: '10',
                                opacity: '1',
                                duration: '0'
                            })
                            // list[0].classList.add("active")
                        }
                        else{
                            if(i!==index){
                                gsap.to(list[i], {
                                    zIndex: '1',
                                    opacity: '0',
                                    duration: '0'
                                })
                                // list[i].classList.remove("active")
                            }
                            
                        }                   
                    }
                },
            })
            // gsap.to(item, {
            //     scrollTrigger: {
            //         trigger: '.frame',
            //         start: `start+=${window.innerWidth * 0.01}vw`,
            //         scrub: true,
            //     },
            //     display: 'block'
            // })
        })
    }, [])

return(
    <div>
    <div className='fixed top-[2vw] left-[2vw] text-white font-bold text-[1vw]'> NextJS</div>
    <div className='bg-black h-[250vw] frame'>
        <div className='flex sticky top-0 justify-center'>
            <div className='img-container w-[50vw] h-[50vw] relative'>
            <Image src="/Tissues_050000.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue active'></Image>
            <Image src="/Tissues_050001.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050002.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050003.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050004.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050005.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050006.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050007.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050008.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050009.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050010.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050011.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050012.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050013.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050014.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050015.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050016.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050017.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050018.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050019.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050020.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050021.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050022.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050023.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050024.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050025.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050026.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050027.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050028.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050029.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050030.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050031.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050032.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050033.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050034.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050035.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050036.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050037.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050038.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050039.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050040.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050041.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050042.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050043.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050044.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050045.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050046.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050047.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050048.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050049.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050050.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050051.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050052.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050053.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050054.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050055.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050056.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050057.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050058.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050059.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050060.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050061.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050062.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050063.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050064.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050065.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050066.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050067.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050068.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050069.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050070.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050071.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050072.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050073.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050074.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050075.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050076.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050077.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050078.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050079.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050080.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050081.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050082.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050083.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050084.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050085.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050086.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050087.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050088.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050089.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050090.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050091.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050092.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050093.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050094.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050095.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050096.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image src="/Tissues_050097.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            </div>
        </div>
    </div>
    <div className='h-[50vw]'>

    </div>
    <div className='h-[100vh]'>

    </div>
    <div className='h-[100vh]'>

    </div>
    </div>
)}