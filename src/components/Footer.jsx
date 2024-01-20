import React from 'react'
<<<<<<< HEAD
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer class="bg-black ">
=======
import {
  FaFacebookF,FaInstagram,FaLocationArrow} from "react-icons/fa";

const Footer = () => {
  return (

    <footer class="bg-black">
>>>>>>> 34240bc (footer)
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  
<<<<<<< HEAD
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SushiShogun</span>
=======
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sushi Shogun</span>
>>>>>>> 34240bc (footer)
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
<<<<<<< HEAD
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline">305-123-4567</a>
                      </li>
=======
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Location</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                     <p> Miami<FaLocationArrow /> </p>
                      </li>
                    
>>>>>>> 34240bc (footer)
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
<<<<<<< HEAD
                  <ul class="text-gray-500 dark:text-gray-400 font-medium  ">
                      <li class="mb-4 flex flex-col justify-center">
                        
                          <a href="" class="hover:underline "> Instagram</a> <FaInstagram/>
                          
                      </li>
                      <li>
                          <a href="" class="hover:underline">Facebook</a><FaFacebook/>
=======
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                        
                          <a href="" class="hover:underline ">Instagram <FaInstagram className="text-3xl" /></a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Facebook</a><FaFacebookF className="text-3xl" />
>>>>>>> 34240bc (footer)
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
<<<<<<< HEAD
          
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
      <p className='text-white'>Made by Christiano Gomes Using React & TailWind</p>
      
      
    </div>
</footer>
  )
}

export default Footer
=======
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">SushiShogun™</a> Made by Christiano Gomes
          </span>
    
      </div>
    </div>
</footer>
  );
};

export default Footer;
>>>>>>> 34240bc (footer)
