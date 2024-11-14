// app/new-page/page.js
import {  Anton } from "next/font/google";
const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default function Programs() {
    return (
        <main className="md:w-[91%] mx-auto"> 
                    <h1 className="md:py-[42px] py-[30px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%] p-5 mx-auto md:leading-[49px] ">Unlock Your Purpose
                    Expand Your Impact</h1>
                  <section className="py-[42px] relative">
                  <img src="/85.png" className=" mx-auto" alt="" />
                  <div className="flex  ">
                    <div className="w-2/5 relative p-10">
                    <div className="absolute bottom-[5%]"> <p className="text-[16px] text-[#000000] italic font-normal leading-[24px] text-left">Leadership Circle gives life to the idea that ministry can be bourne out in a multitude of manners, helps individuals connect with their purpose and the heart behind that purpose, and provides a framework for challenging brokenness and bringing shalom. </p>
                        <h2 className="pt-[20px] text-[#000000] text-[20px] font-bold leading-[30.62px] text-left">Jervis D.</h2>
                        <p className=" pt-[10px] w-[57%] text-[#000000] text-[20px] font-normal leading-[30.62px] text-left">Executive VP, (Economics Sphere, United States)</p>
                        <img src="" />
                        </div></div>
                    <div className="w-3/5 p-10">
                        <h2 className=" text-[#000000] text-[29px] font-normal leading-[43px] text-left">
                        The  Leadership Circle is a 9-month deep dive into faith, culture, God’s  story of redemption – and your place in it all. Join other leaders and  change-makers on a journey of discovery and transformation, in which you  will clarify your calling and gain tools to bring restoration to your  city.
                        </h2>
                        <h4 className="pt-[20px] text-[#000000] text-[16px] font-bold leading-[23px] text-left">Join the Leadership Circle: A 9-Month Journey to Discover Your Calling, Strengthen Your Faith, and Bring Restoration to Your City</h4>
                        <a href="#" className=" flex  items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">Apply Now<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                               
                          </div>
                  </div>
                  <div className="absolute top-[45%] left-5  pt-50 p-2 bg-[#A1CF5F]">
                    <img src='/84.png' alt="" />
                    <h2 className="text-white">Testimonials</h2>
                  </div>
                  </section >

               <section>
                <h1>Transformative Programs for Leaders Empowering You to Impact Cities and Communities</h1>
                <div className="">
                  <div className="w-1/3">
                    <h4>Our programs empower leaders to make a meaningful impact on cities and communities through deep engagement with faith and purpose.</h4>
                      <img src='' alt='' />
                  </div>
                  <div className="w-2/3 flex">
                      <div className="">

                      </div>
                      <div className="">
                        
                      </div>
                  </div>
                </div>
               </section>
          
          <section>
          <div className=" md:flex  mx-auto bg-[#000000] p-5">
                    <div className="md:w-6/12 md:p-30">
                    <strong className={`${anton.className} uppercase md:text-[55px] text-[41px] text-white font-light leading-[50px]`}>
                    Join Our<br /> Community of Culturemakers
                    </strong>
                    <p className="text-white">Be the first to know about Cities <br / > Project Global news, programs, <br /> and impact</p>
                    </div>
                    <div className="md:w-6/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
                      <p className="text-white  pb-[20px] font-extrabold text-[18px]">Become a Culturemaker <br /><span className="font-normal text-[#A1CF5F]">Join Us Today!</span></p>
                      <form action="#" className="grid gap-[1px]">
                        <input type="text" placeholder="Name" className="bg-transparent border border-[#f6f6f626] p-[10px]" /><br/>
                        <input type="email" placeholder="Email" className="bg-transparent border border-[#f6f6f626] p-[10px]"  />
                        <label className="text-[12px]  pt-2 font-normal  text-left  decoration-slice">Please Confirm</label>
                        <p className="text-[15px]  p-2 font-normal  text-left  decoration-slice"><input type="checkbox" /> I want to subscribe to all CPG emails</p>
                        <button type='submit' className="md:w-[18%] w-[25%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[13px]">Submit</button>
                      </form>
                    </div>

                  </div>
          </section>
      </main>
    );
  }
  