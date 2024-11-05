import React, { useState } from "react";
import FoodCard from "../../components/cards/FoodCard";
import NavBar from "../../components/navbar/NavBar";

const HomePage = () => {
  return (
    <div className=" w-full h-auto bg-[#FBFBFB] ">
      <NavBar />
      <div className="w-full h-max px-40 pt-8 pb-16 shadow-xl rounded-b-[8rem] bg-[#FFF0E9] " style={{ backgroundImage: "url(/hero.png)", backgroundSize: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "right"}}>
        <div className="w-full h-full space-y-2 text-6xl font-bold">
          <h1>Order Now,</h1>
          <h1 className="text-primary text-6xl pb-4">Enjoy Later</h1>
          <div className="flex bg-primary w-max rounded-full place-items-center mt-4">
            <div className="m-2  rounded-full bg-alternate">
              <img className="p-2 w-14 h-14" src="./play.png" alt="play"/>
            </div>
            <span className="text-white text-2xl mr-2">How to order?</span>
          </div>
        </div>
      </div>
      <div className="flex drop-shadow-xl place-items-top mx-[10%] h-max mt-[2rem] bg-white relative top-[-5rem] rounded-3xl">
        <div className="flex flex-1 m-6">
          <img className="w-14 h-14 bg-alternate" src="./order.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Online Order</span>
            <span>Customers can pre-order their desired food.</span>
          </div>
        </div>
        <div className="flex flex-1 m-6">
          <img className="w-14 h-14 bg-alternate" src="./bin.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Prevent Waste</span>
            <span>As Canteen estimate of how much to make for a particular day they can make the right amount.</span>
          </div>
        </div>
        <div className="flex flex-1 m-6">
          <img className="w-14 h-14 bg-alternate" src="./bill.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Managed receipt</span>
            <span>Students as well as the business can get detailed report of sales in their canteen</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex w-full h-max px-40 pb-12 justify-between -mt-6">
        <div className="flex-1 my-10">
          <h1 className="black text-4xl font-bold mb-4">What is Hamro Canteen?</h1>
          <p>
          Hamro Canteen is a comprehensive food ordering and billing web application that replaces the traditional KOT-based (Kitchen Order Ticket) and cash-based transaction systems. Designed specifically for college canteen, Hamro Canteen simplifies the process of ordering and billing meals, making it more efficient and user-friendly.
          </p>
        </div>
        <div className="flex-1 rounded-3xlg" style={{ backgroundImage: "url(/whatis-right.jpeg)", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right" }} >
        
        </div>
      </div>

      <div className="container mx-auto w-full h-max px-40 pb-12">
        <h1 className="black text-4xl font-bold mb-4 text-center">What is Hamro Canteen?</h1>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-between py-2 px-6">
            <img src="./step1.png" alt="step 1"/>
            <span className="bg-secondary text-2xl font-semibold px-4 py-2 text-center">Login to Hamro Canteen</span>
          </div>
          <div className="flex-1 flex flex-col justify-between py-2 px-6">
            <img className="mt-5" src="./step2.png" alt="step 2"/>
            <span className="bg-secondary text-2xl font-semibold px-4 py-2 text-center">Add your desired food to cart</span>
          </div>
          <div className="flex-1 flex flex-col justify-between py-2 px-6">
            <img src="./step3.png" alt="step 3"/>
            <span className="bg-secondary text-2xl font-semibold px-4 py-2 text-center">Make payments and get receipt</span>
          </div>
        </div>
      </div>
      <div id="about" className="container mx-auto w-full h-max px-40 pb-12">
        <h1 className="black text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg leading-relaxed text-center">
          <b>Hamro Canteen</b> is a modern food ordering and billing platform designed exclusively for college canteens. 
          Our goal is to streamline the ordering process, eliminate waste, and make food service faster and more reliable. 
          With our web application, students can conveniently pre-order meals, reducing wait times and ensuring availability.
          Meanwhile, canteen staff benefit from detailed sales reports, enabling them to manage inventory more efficiently and 
          make data-driven decisions.
        </p>
        <p className="text-lg leading-relaxed text-center mt-4">
          <b>Hamro Canteen</b> combines simplicity with practicality, making the entire ordering experience smooth for both students and 
          canteen operators. We are committed to enhancing the college dining experience, fostering convenience, and supporting 
          sustainability through reduced food waste.
        </p>
      </div>

      <div id="contact" className="container w-full h-max px-40 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Contact Information */}
          <div className="flex-1">
            <h1 className="text-black text-4xl font-bold mb-4 text-center md:text-left">Contact Us</h1>
            <p className="text-lg leading-relaxed text-center md:text-left mb-6">
              Have any questions or need assistance? We’re here to help! Reach out to us through any of the following methods:
            </p>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex-1">
            <img src="./contact.jpg" alt="Contact Us Image" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>

        
      </div>
      {/* Footer-style Contact Information */}
      <div className="mt-8 py-4 bg-alternate flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="flex items-center space-x-4">
          <a href="https://hamrocanteen.com" target="_blank" rel="noopener noreferrer">
            <img src="./Logo.png" alt="Hamro Canteen Logo" className="w-24 h-24" />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="mailto:info@hamrocanteen.com" className="text-primary" target="_blank" rel="noopener noreferrer">
            <img src="./email.png" alt="Email Icon" className="w-10 h-10" />
          </a>
          <span className="text-lg text-primary font-bold">info@hamrocanteen.com</span>
        </div>

        <div className="flex items-center space-x-4">
          <a href="tel:+977-9813758998" target="_blank" rel="noopener noreferrer">
            <img src="./phone.png" alt="Phone Icon" className="w-10 h-10" />
          </a>
          <span className="text-lg text-primary font-bold">+977-9813758998</span>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://maps.app.goo.gl/dmaVuKzRetZxtbyF6" target="_blank" rel="noopener noreferrer">
            <img src="./maps.png" alt="Location Icon" className="w-10 h-10" />
          </a>
          <span className="text-lg text-primary font-bold">Swoyambhu, Kathmandu</span>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
