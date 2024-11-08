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
              <span className="block text-3xl md:text-4xl lg:text-5xl font-normal tracking-wider">Meeting current</span>
              needs now
            </strong>
            <p className="mt-2 text-base md:text-lg lg:text-xl leading-6">
              You can prioritize a child’s mental, emotional, <br />
              behavioral, and physical health
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-800 hover:bg-green-600 text-white font-extrabold text-sm lg:text-base py-3 px-6 rounded-full transition duration-300"
            >
              Lend a hand
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
        className="w-full md:w-1/2  bg-cover bg-center" >
        <div className="inner_Sec_div">
              <div className='flex flex-col md:flex-row'>
               
                <img src='/Group 805.png' className='w-3/12  p-4 h-1/4 self-end ' />
                <img src='/26.png' className='w-8/12  p-4' />
              </div>

        </div>

      </div>
    </div>

    <div className='w-full flex flex-col md:flex-row'>
    <div className=' flex flex-col md:flex-row'>
          <div className='w-6/12'>
          <img src='/26.png' className='' />
              </div>
              <div className='w-6/12'>
                <h3>Free workshop</h3>
                <h5>Please sign up using the link below:</h5>
                <hr />
                <p>
                Workshops will occur every other month, so check our website for updates!
                </p>
                <p>
                <b> Date:</b> November 15, 2024 <br />
                <b>Time:</b> 10:00 AM - 12:00 PM
                </p>
             </div>
        </div>

        <div className='w-6/12 flex flex-col md:flex-row'>
        <div className='w-3/6'>
        <h3>Free workshop</h3>
        <h5>Please sign up using the link below:</h5>
        <hr />
        <button className="">Apply Now</button>
        </div>
        <div className='w-3/6'>
        <h3>Free workshop</h3>
        <h5>Please sign up using the link below:</h5>
        <hr />
        <button className="">Apply Now</button>
        
        </div>
   </div>
   </div>


{/* body end */}

    </main>
  );
}
