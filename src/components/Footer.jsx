import React from "react";
import icons from '../assets/Images/icons.png';


const Footer = () => {
  return (
    <div className="mt-6 bg-black text-white py-6 px-6">
      {/* <h2 className='text-2xl'>This is Footer</h2> */}
      <div class="lg:grid grid-cols-4 gap-4">
        <div className="text-center">
            <h3 className="text-3xl">TalentScout</h3>
            <p className="text-sm text-justify py-2">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            {/* <div className="flex gap-2">
                
                </div> */}
           <div className="flex justify-center">
           <img className="w-32" src={icons} alt="icons" />
           </div>
        </div>
        <div className="text-center my-6 md:my-0">
            <h4 className="text-2xl pb-2">Company</h4>
            <p>About us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Career</p>
        </div>
        <div className="text-center">
            <h4 className="text-2xl pb-2">Product</h4>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
        </div>
        <div className="text-center my-6 md:my-0">
            <h4 className="text-2xl pb-2">Support</h4>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
        </div>        
      </div>
      <hr className="my-4" />
      <p className="text-center">@2023 TalentScout. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
