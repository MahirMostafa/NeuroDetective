import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-slate-50">
<section>
<MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:
gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
    <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
    <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
    <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
    <img src='/logo.jpeg' className='w-full' />
    </div> 
    <h1 className='relative w-fit tracking-tight
     text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl
      md:text-6xl lg:text-7xl'>Detect Your  
      <span className='bg-green-600 px-2 text-white'> Brain Tumor</span> from MRI Image</h1>
      <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
      Capture your MRI Image of Brain Tumor and See The results on,{' '}
      <span className='font-semibold'>Your Smart Device.</span> <br></br>
      NeuroDetective allows you to Analize your Brains MRI and Help to identify Brain Tumors easily.
      </p>

      <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Easy to Use
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Higher Accuracy
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Early detection
                  </li>
                </div>
              </ul>
    </div>
    </div>
    <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img className='w-100' src='/Brain2.jpeg' />
            </div>
          </div>
</MaxWidthWrapper>
</section>
   </div>

  );
}
