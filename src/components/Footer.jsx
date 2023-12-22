import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer class="bg-black ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SushiShogun</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline">305-123-4567</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium  ">
                      <li class="mb-4 flex flex-col justify-center">
                        
                          <a href="" class="hover:underline "> Instagram</a> <FaInstagram/>
                          
                      </li>
                      <li>
                          <a href="" class="hover:underline">Facebook</a><FaFacebook/>
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
          
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
      <p className='text-white'>Made by Christiano Gomes Using React & TailWind</p>
      
      
    </div>
</footer>
  )
}

export default Footer
