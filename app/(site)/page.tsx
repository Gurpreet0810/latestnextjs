import { Metadata } from "next";
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

export default function Home() {
  return (
    <main>
     
     {/* body start */}

<section className="w-full">
      <div className="container-fluid mx-auto">
        <div className="relative w-full">
          <img src="/banner.jpg" alt="banner" className="w-full" />
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white">
            <strong className="block text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
            Live Life<br />
            With < br />
            Purpose
            </strong>
            <p className="mt-2 text-base md:text-lg lg:text-xl leading-6">
            Cities Project Global helps people discover and <br /> live out their God-given purpose to transform < br />communities.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-[#A1CF5F] hover:bg-green-600 text-white font-extrabold text-sm lg:text-base py-3 px-6 rounded-full transition duration-300"
            >
             Join Our Community of Culturemakers
            </a>
          </div>
        </div>
      </div>
    </section>


    <div className="flex flex-col md:flex-row h-full bg-cover bg-center bg-[url('/28.png')]">
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

    <div className='w-[89%] mx-auto flex flex-col md:flex-row border border-black border-solid'>
    <div className=' flex flex-col md:flex-row w-5/12'>
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

    <div className="container pt-[50px] pb-[50px]">
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


      <div className=" pl-[14px] flex items-center p-[23px] ">
      
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


      <div className=" pl-[14px] flex items-center p-[23px] ">
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
          <div className="float-right" >
            <button className="text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">Buy Now</button><br />< br />
          <button className=" text-black bg-white font-bold p-2 rounded-[5px]">Read a Sample Chapter</button>
          </div>
          </div>
        </div>

        <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h5 className="text-[38px] text-black text-center font-bold pb-2">Our Partners</h5>
        <h5 className="text-[18px] text-black text-center font-bold">Be the first to know about Cities Project Global news, programs, and impact</h5>
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
    <div className="text-center">
      <h5 className="text-[15px] font-bold pb-2">Become a Partner</h5>
      <h3 className="text-[12px] font-bold">Join Now!</h3>
    </div>
  </div>
</div>
{/* / */}

<section className="flex w-[85%] mt-[54px] mx-auto  items-center justify-center gap-9 bg-[#000]">
    <div className="w-4/12 p-5">
      <h2 className="text-[#A1CF5F] text-[40px] leading-[50px]">God cares not <br />only about <br />redeeming souls<br /> but also about<br /> restoring his <br />creation . . .</h2>
      <p className="text-white text-[10px] ">We are called to help sustain and  renew his creation, to uphold the created institutions of family and  society, to pursue science and scholarship, to create works of art and  beauty, and to heal and help those suffering from the results of the  Fall.</p>
      <p className="text-white text-[12px] ">--- Charles colson & nancy pearcey</p>
      <p className="text-white text-[10px] ">How then shall we live?</p>
    </div>
    <div className="w-8/12">
    <img src="/44.jpg" className="object-contain" />
    </div>

</section>

        </div>
      </section>




{/* body end */}

    </main>
  );
}
