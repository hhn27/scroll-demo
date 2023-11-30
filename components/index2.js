'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, {  useEffect, useLayoutEffect } from 'react';


const imagePaths = [
    '/Tissues_050000.png',
    '/Tissues_050001.png',
    '/Tissues_050002.png',
    '/Tissues_050003.png',
    '/Tissues_050004.png',
    '/Tissues_050005.png',
    '/Tissues_050006.png',
    '/Tissues_050007.png',
    '/Tissues_050008.png',
    '/Tissues_050009.png',
    '/Tissues_050010.png',
    '/Tissues_050011.png',
    '/Tissues_050012.png',
    '/Tissues_050013.png',
    '/Tissues_050014.png',
    '/Tissues_050015.png',
    '/Tissues_050016.png',
    '/Tissues_050017.png',
    '/Tissues_050018.png',
    '/Tissues_050019.png',
    '/Tissues_050020.png',
    '/Tissues_050021.png',
    '/Tissues_050022.png',
    '/Tissues_050023.png',
    '/Tissues_050024.png',
    '/Tissues_050025.png',
    '/Tissues_050026.png',
    '/Tissues_050027.png',
    '/Tissues_050028.png',
    '/Tissues_050029.png',
    '/Tissues_050030.png',
    '/Tissues_050031.png',
    '/Tissues_050032.png',
    '/Tissues_050033.png',
    '/Tissues_050034.png',
    '/Tissues_050035.png',
    '/Tissues_050036.png',
    '/Tissues_050037.png',
    '/Tissues_050038.png',
    '/Tissues_050039.png',
    '/Tissues_050040.png',
    '/Tissues_050041.png',
    '/Tissues_050042.png',
    '/Tissues_050043.png',
    '/Tissues_050044.png',
    '/Tissues_050045.png',
    '/Tissues_050046.png',
    '/Tissues_050047.png',
    '/Tissues_050048.png',
    '/Tissues_050049.png',
    '/Tissues_050050.png',
    '/Tissues_050051.png',
    '/Tissues_050052.png',
    '/Tissues_050053.png',
    '/Tissues_050054.png',
    '/Tissues_050055.png',
    '/Tissues_050056.png',
    '/Tissues_050057.png',
    '/Tissues_050058.png',
    '/Tissues_050059.png',
    '/Tissues_050060.png',
    '/Tissues_050061.png',
    '/Tissues_050062.png',
    '/Tissues_050063.png',
    '/Tissues_050064.png',
    '/Tissues_050065.png',
    '/Tissues_050066.png',
    '/Tissues_050067.png',
    '/Tissues_050068.png',
    '/Tissues_050069.png',
    '/Tissues_050070.png',
    '/Tissues_050071.png',
    '/Tissues_050072.png',
    '/Tissues_050073.png',
    '/Tissues_050074.png',
    '/Tissues_050075.png',
    '/Tissues_050076.png',
    '/Tissues_050077.png',
    '/Tissues_050078.png',
    '/Tissues_050079.png',
    '/Tissues_050080.png',
    '/Tissues_050081.png',
    '/Tissues_050082.png',
    '/Tissues_050083.png',
    '/Tissues_050084.png',
    '/Tissues_050085.png',
    '/Tissues_050086.png',
    '/Tissues_050087.png',
    '/Tissues_050088.png',
    '/Tissues_050089.png',
    '/Tissues_050090.png',
    '/Tissues_050091.png',
    '/Tissues_050092.png',
    '/Tissues_050093.png',
    '/Tissues_050094.png',


]
export default function IndexHome(){
    // const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
    const list = document.querySelectorAll(".tissue");
    list.forEach((item, index) => {
        // gsap.to(item, {
        // scrollTrigger: {
        //     trigger: '.frame',
        //     start: 'top center',
        //     end: 'bottom center',
        //     scrub: true,
        //     onUpdate: self => {
        //     const imagePath = imagePaths[Math.floor(self.progress * imagePaths.length)];
        //     requestAnimationFrame(() => {
        //         item.style.backgroundImage = `url(${imagePath})`;
        //     });
        //     }
        // }
        // });
        ScrollTrigger.create({
            trigger: '.frame',
            start: `start+=${window.innerWidth * 0.02 * index}vw`,
            onEnter: self => {
              // item.classList.add("active")
              gsap.to(item, {
                zIndex:'10',
                opacity:'1',
                duration:'0'
              })
              for (let i = 0; i < list.length; i++) {
                if (index !== i) {
                  // list[i].classList.remove("active")
                  gsap.to(list[i], {
                    zIndex:'1',
                    opacity:'0',
                    duration:'0'
                  })
                }
              }
            },
            onLeaveBack: self => {
              // item.classList.remove("active")
              gsap.to(item, {
                zIndex:'10',
                opacity:'1',
                duration:'0'
              })
              for (let i = 0; i < list.length; i++) {
                if (index == 0) {
                  // list[0].classList.add("active")
                  gsap.to(list[0], {
                    zIndex:'10',
                    opacity:'1',
                    duration:'0'
                  })
                }
                else {
                  if (i !== index) {
                    // list[i].classList.remove("active")
                    gsap.to(list[i], {
                      zIndex:'1',
                      opacity:'0',
                      duration:'0'
                    })
                  }
                  else {
                    // list[i].classList.add("active")
                    gsap.to(list[i], {
                      zIndex:'10',
                      opacity:'1',
                      duration:'0'
                    })
                  }
                }
              }
            },
          })
    });
    }, []);

    const array = new Array(97).fill(0)
return(
    <div>
    <div className='fixed top-[2vw] left-[2vw] text-white font-bold text-[1vw]'> NextJS</div>
    <div className='bg-black h-[250vw] frame'>
        <div className='flex sticky top-0 justify-center'>
            <div className='img-container w-[50vw] h-[50vw] relative'>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue active'></div>
            {imagePaths.map((item, index) => 
                <div key={index} className='w-full h-full absolute top-0 left-0 tissue' style={{background: `url(${item})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'contain'}}></div>
            )}
            {/* {array?.map((item,index)=>{
                <div key={index} className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            })} */}
            {/* <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div>
            <div className='w-full h-full absolute top-0 left-0 object-contain tissue'></div> */}
            {/* <Image src="/Tissues_050038.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
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
            <Image src="/Tissues_050097.png" width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image> */}
            </div>
        </div>
    </div>
    <div className='h-[50vw]'>

    </div>
    </div>
)}