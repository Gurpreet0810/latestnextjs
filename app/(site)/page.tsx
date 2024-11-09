import { Metadata } from "next";
import Slider from "react-slick";
import Testimonial from "@/components/Testimonial";
import VideoCarousel from "@/components/videotestemonial";
import {  Anton } from "next/font/google";
const anton = Anton({ weight: '400', subsets: ["latin"] }); 
// import Hero from "@/components/Hero";
// import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";
// import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
// import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {
  return (
    <main>
     
     {/* body start */}

<section className="w-full">
      <div className="container-fluid mx-auto">
        <div className="relative w-full">
          <img src="/banner.jpg" alt="banner" className="w-full" />
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white">
          <strong className={`${anton.className} uppercase text-[85px] font-light leading-[101px]`}>
          Live Life<br />
            With < br />
            Purpose
            </strong>
            <p className="mt-2 font-light leading-6">
            Cities Project Global helps people discover and <br /> live out their God-given purpose to transform < br />communities.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-[#A1CF5F] hover:bg-green-600 text-white text-sm py-3 px-6 rounded-full transition duration-300"
            >
             Join Our Community of Culturemakers
            </a>
           
          </div> <img src='/49.png' className="absolute right-[55px] bottom-[53px] w-[20%]"/>
        </div>
      </div>
    </section>


    <div className="flex p-[105px] flex-col md:flex-row h-full bg-cover bg-center bg-[url('/28.png')]">
      <div className=" w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center">
        <h2 className="font-bold text-gray-800 text-3xl md:text-5xl leading-tight mb-4">
        Discover Your Design<br /> 
        Live Out Your Purpose
        </h2>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-6 md:pl-2">
        Cities Project Global is an international organization dedicated to awakening individuals to their God-given purpose. Become equipped to  live out your design and transform your community – no matter what your area of work is.</p>
        <div className="flex flex-col md:flex-row">
          <button className="w-full md:w-auto bg-indigo-600 text-white font-medium text-lg py-4 px-6 rounded mb-4 md:mb-0 md:mr-4 shadow-lg">
          Learn More
          </button>
        </div>
      </div>
      <div
        className="w-full md:w-1/2  bg-cover bg-center " >
        <div className="inner_Sec_div">
              <div className='flex flex-col md:flex-row'>
               
                <img src='/Group 805.png' className='w-3/12  p-4 h-1/4 self-end ' />
                <img src='/26.png' className='w-8/12  p-4' />
              </div>

        </div>

      </div>
    </div>

    <div className='w-[80%] mt-[-50px] mx-auto flex flex-col md:flex-row border border-black border-solid'>
    <div className=' flex flex-col md:flex-row w-5/12 bg-white '>
          <div className='w-6/12 bg-[url("/30.png")] bg-cover  w-[256px] h-[313px] top-[1785px] left-[100px] gap-0 border-t border-transparent '>

              </div>
              <div className='w-6/12 pl-[14px] grid justify-center p-[49px]'>
                <h1 className="text-[28px] text-black font-bold">Free workshop</h1>
                <h5 className="text-[12px] text-black font-bold">Please sign up using the link below:</h5>
                <hr />
                <p className="text-[12px] text-black leading-normal">
                Workshops will occur every other month, so check our website for updates!
                </p>
                <p className="text-[14px] text-black leading-normal">
                <b> Date:</b> November 15, 2024 <br />
                <b>Time:</b> 10:00 AM - 12:00 PM
                </p>
             </div>
        </div>

        <div className='w-7/12 flex flex-col md:flex-row ' >
        <div className='w-6/12 pl-[14px] grid justify-center p-[23px] bg-[#224334]'>
        <h3 className="text-[28px] text-white font-bold">Leadership Circle</h3>
        <h5 className="text-[12px] text-white font-bold">Flagship Program</h5>
        <hr />
        <div className='flex flex-col md:flex-row gap-[28px] items-end'>
        
        <button className="w-1/2 float-left bg-[#A1CF5F] h-[39px] rounded-[5px] text-black text-[13px]">Apply Now</button>
        <img src="/30.png" alt="" className='w-1/2 ' />
        </div>
        </div>
        <div className='w-6/12 pl-[14px] grid justify-center p-[23px] bg-[#a1cf5f]'>
        <h3 className="text-[28px] text-black font-bold">VantagePoint™</h3>
        <h5 className="text-[12px] text-black font-bold">A Small Group Discovery Series</h5>
        <hr />
        <div className='flex flex-col md:flex-row gap-[28px] items-end'>
        
        <button className="w-1/2 float-left bg-[#fff] h-[39px] rounded-[5px] text-black text-[13px]">Apply Now</button>
        <img src="/31.png" alt="" className='w-1/2 ' />
        </div>
        </div>
   </div>
   </div>

    <div className="container w-[89%] mx-auto pt-[50px] pb-[50px]">
      <h1 className="text-[32px] text-black font-bold leading-[38.09px] text-center">
      Confused over your calling?<br />
      Is ministry the only work that 'counts'?
        </h1>
      <div className=" pl-[14px] flex items-center p-[23px] ">
      <div className="w-4/12 flex items-center justify-center"><div className="w-6/12 p-2" >
      <img src="/32.png" alt="" className='' />
      </div>

          <div className="w-6/12 ">
            <h3 className="text-[13px] bg-[#a1cf5f] text-black text-center w-[55%] rounded-[20px]">Be Awakened</h3>
            <h5 className="text-[12px] text-black font-bold">Gain a New Perspective</h5>
            <p className="text-[12px] text-black leading-normal">Our programs are built on a bedrock of scripture, 
              designed to help people look at the 
              relationship between faith, work, and their unique place in it all through a new lens.</p>
          </div>

          </div>
      </div>


      <div className=" pl-[14px] flex items-center p-[23px] justify-end mt-[-160px]">
      
      <div className="w-4/12 flex items-center justify-center">
          <div className="w-6/12 float-right">
            <h3 className="text-[13px] bg-[#a1cf5f] text-black text-center w-[55%] rounded-[20px]">BE EQUIPPED</h3>
            <h5 className="text-[12px] text-black font-bold">Live an Integrated Life</h5>
            <p className="text-[12px] text-black leading-normal">Our methods are rich with practical tools for becoming a modern-day apprentice of Jesus, dissolving the false distinction between faith and work.</p>
          </div>
          <div className="w-6/12 p-2" >
      <img src="/33.png" alt="" className='' />
      </div>
      </div >
      </div>


      <div className=" pl-[14px] flex items-center p-[23px]  mt-[-160px]">
      <div className="w-4/12 flex items-center justify-center"> <div className="w-6/12 p-2" >
      <img src="/34.png" alt="" className='' />
      </div>

          <div className="w-6/12 ">
            <h3 className="text-[13px] bg-[#a1cf5f] text-black text-center w-[55%] rounded-[20px]">BE UNLEASHED</h3>
            <h5 className="text-[12px] text-black font-bold">Transform Your City</h5>
            <p className="text-[12px] text-black leading-normal">Our framework is designed to give you actionable steps toward assessing where your city is in need and how you can bring redemption to it.</p>
          </div>
      </div>
      </div>
    </div>



        <div className="flex flex-col md:flex-row w-[89%] mx-auto items-center rounded-[5px]" style={{ backgroundColor: 'rgb(3, 4, 2)' }}>
          <div className="w-4/12 p-[40px]">
          <h3 className="text-[13px] bg-[#a1cf5f] text-white text-center w-[55%] rounded-[20px]">BE UNLEASHED</h3>
            <h5 className="text-[27px] text-white font-bold pt-[10px]">THE INTERSECTION</h5>
            <p className="text-[27px] text-white leading-normal">
                FAITH, WORK,
                AND LIFE</p>
          <img src='/35.png' />
         
          <h5 className="text-[20px] text-white font-bold">Bob Varney</h5>
          <h5 className="text-[12px] text-white font-bold">Cities Project Global CEO, President</h5>
          </div>
          <div className="w-8/12 p-10">
          <img src='/36.png' />
          <div className="float-right mt-[-50px] z-99999 relative" >
            <button className="text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">Buy Now</button><br />< br />
          <button className=" text-black bg-white font-bold p-2 rounded-[5px]">Read a Sample Chapter</button>
          </div>
          </div>
        </div>

        <section className="pt-[150px] border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h5 className="text-[38px] text-black text-center pb-[30px] font-bold pb-2">Our Partners</h5>
        <h5 className="text-[15px] text-black text-center">Be the first to know about Cities Project Global news, programs, and impact</h5>
        <div className="flex flex-col pt-[29px] md:flex-row items-center justify-center gap-9">
  <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/39.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/40.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/41.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
</div>

<div className="flex flex-col pt-[29px] md:flex-row items-center justify-center gap-9">
  <img src="/43.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <div className="bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center">
    <div className="text-left absolute bottom-[15px] w-[89%]">
      <h5 className="text-[12px] font-bold pb-2">Become a Partner</h5>
      <h3 className="text-[10px] font-bold">Join Now!</h3>
    </div>
  </div>
</div>
{/* / */}

<section className="flex w-[85%] mt-[54px] mx-auto  items-center justify-center gap-9 bg-[#000]">
    <div className="w-4/12 p-5">
      <h2 className={`${anton.className} text-[#A1CF5F] text-[40px] uppercase leading-[50px]`}>God cares not <br />only about <br />redeeming souls<br /> but also about<br /> restoring his <br />creation . . .</h2>
      <p className="text-white text-[10px] ">We are called to help sustain and  renew his creation, to uphold the created institutions of family and  society, to pursue science and scholarship, to create works of art and  beauty, and to heal and help those suffering from the results of the  Fall.</p>
      <p className="text-white text-[13px] pt-[29px] ">--- Charles colson & nancy pearcey</p>
      <p className="text-white text-[10px] ">How then shall we live?</p>
    </div>
    <div className="w-8/12">
    <img src="/44.jpg" className="object-contain" />
    </div>

</section>

        </div>
      </section>

    <div className="w-[100%] mx-auto">
    <h2 className="font-inter text-4xl font-bold leading-[58.09px] p-8 text-black text-left text-center decoration-skip-ink-none">Stories of Transformation</h2>
    <div className="flex">
      <div className="w-3/12 relative grid place-items-center"> 
      <img src="/46.png" className="object-contain" /> 
      <p className="absolute top-2 left-7 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
        <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Receiving and Reflecting God’s <br />Inherent Love for Us</h2>
        <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
  <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M1 13 13 1M4 1h9v9"></path>
  </g>
</svg></a>
      </div>
      <div className="w-6/12 relative grid place-items-center"> 
      <img src="/45.png" className="object-contain" />
      <p className="absolute top-2 left-7 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
      <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Healing the Trauma of Homelessness Through<br />
      Affordable Housing</h2>
      <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
  <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M1 13 13 1M4 1h9v9"></path>
  </g>
</svg></a>
       </div>
      <div className="w-3/12 relative grid place-items-center">
      <img src="/47.png" className="object-contain" /> 
      <p className="absolute top-2 left-7 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
      <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">In the Midst of War, Love Comes <br /> Through Action</h2>
      <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
  <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M1 13 13 1M4 1h9v9"></path>
  </g>
</svg></a>
      </div>
    </div>
    <img src='/48.png' className="table p-[61px] items-center m-auto" />
    </div>

    
    {/* <section className="bg-white dark:bg-gray-900 bg-[#F5F5F5] w-[90%] mx-auto">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure className="max-w-screen-md mx-auto">
     <div className="flex mx-auto justify-center"> <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
          </svg>
          <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
</svg></div>

          <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">Leadership Circle has affected my understanding of my journey. It didn’t bring a dramatic change because I was already on the road, but it helped me understand the journey that I was on. </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className=" items-center ">
                  <div className="pr-3  text-gray-900 font-extrabold dark:text-white"> Mona D.</div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">(Education Sphere, Egypt)</div>
              </div>
          </figcaption>
      </figure>
    
  </div>
</section> */}


<Testimonial />
<VideoCarousel />



<div className=" flex w-[80%] mx-auto bg-[#000000] p-5">
      <div className="w-6/12 p-30">
      <strong className={`${anton.className} uppercase text-[55px] text-white font-light leading-[50px]`}>
      Join Our<br /> Community of Culturemakers
      </strong>
      <p className="text-white">Be the first to know about Cities <br / > Project Global news, programs, <br /> and impact</p>
      </div>
      <div className="w-6/12 p-15 border-l border-[#dbdbdb78]">
        <p className="text-white  pb-[20px] font-extrabold text-[18px]">Become a Culturemaker <br /><span className="font-normal text-[#A1CF5F]">Join Us Today!</span></p>
        <form action="#" className="grid gap-[1px]">
          <input type="text" placeholder="Name" className="bg-transparent border border-[#f6f6f626] p-[10px]" /><br/>
          <input type="email" placeholder="Email" className="bg-transparent border border-[#f6f6f626] p-[10px]"  />
          <label className="text-[12px]  pt-2 font-normal  text-left  decoration-slice">Please Confirm</label>
          <p className="text-[15px]  p-2 font-normal  text-left  decoration-slice"><input type="checkbox" /> I want to subscribe to all CPG emails</p>
          <button type='submit' className="w-[18%] bg-[#A1CF5F] p-[8px] text-black rounded-[7px] text-[13px]">Submit</button>
        </form>
      </div>

</div>
{/* body end */}

    </main>
  );
}
