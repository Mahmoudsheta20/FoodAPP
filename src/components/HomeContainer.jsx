import React from 'react'
import {delivery, heroBg, i1} from '../assets'
import {heroData} from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6 '>
  <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
  <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
  <div className='w-8 h-8 drop-shadow-xl bg-white rounded-full overflow-hidden'>
  <img src={delivery} alt="Delivery" className='w-full h-full object-contain' />
  
  </div>
  </div>
  
  <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide capitalize text-headingColor text-tra'>
  the fastest delivery in
  <span className='text-orange-600 text-[3rem] md:text-[5rem]'>your city</span>
  </p>
  <p className='text-base text-textColor text-center md:text-left md:w-[80%] py-4'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam molestias consequuntur? Laudantium nostrum, ex dicta tenetur molestias placeat repellendus!
  </p>
  <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white '  >Order Now </button>
  
    </div>
  
 
    <div className='py-2 flex-1 flex item-center relative'>
  
    <img src={heroBg} alt="heroBg" className='ml-auto w-full md:w-full lg:w-auto h-420 lg:h-650' />
    <div className='w-full h-full absolute top-0 left-0 flex items-center md:pr-16 py-4 justify-center gap-16 flex-wrap flex-col '>

 {heroData && heroData.map(item => (
  <div key={item.id}  className='lg:w-190 p-4 bg-cardOverlay rounded-3xl backdrop-blur-md  flex flex-col justify-center items-center'>
<img src={item.imageUrl} alt="i1" className='w-20 lg:w-40 -mt-20 lg:-mt-20' />

<p className='text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4' >{item.name}</p>
<p className='text-sm font-semibold text-gray-500 my-3' >{item.decp}</p>
<p className='text-sm font-semibold text-headingColor'><span className='text-sm text-red-600'>$</span>{item.price}</p>
  </div>

  ))}
  </div>



    </div>
      
      </section>
  )
}

export default HomeContainer