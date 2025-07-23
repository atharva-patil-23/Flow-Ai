import React, { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Zap, Brain, Target } from 'lucide-react';


const LandingPage = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, []);


  return (
    <div>
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <img src="/flowai-logo.png" alt="" />
              </div>
              <span className="text-xl font-bold">Flow AI</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
            
              <button className="text-white hover:bg-gray-800 px-5 py-2 rounded-lg"> Sign In </button>
             
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">Login</button>
            </div>
          </div>
        </div>
      </header>


      <section className="relative min-h-screen flex items-center justify-center">
   
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>

          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            The AI Task Management
            <span className="text-red-500 block">Revolution</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Enterprise-grade AI that learns, adapts, and optimizes your workflow to boost productivity and eliminate chaos.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            <input type="email" 
            placeholder="Enter your Email" 
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 w-full sm:w-80 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md m-2" />
        
            <button className=" flex bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md w-full sm:w-auto">
                Start with Flow AI
            </button>
          </div>
          
          <div className={`flex items-center justify-center space-x-6 text-sm text-gray-400 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>



      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <img src="/flowai-logo.png" alt="" />
              </div>
              <span className="text-xl font-bold">Flow AI</span>
            </div>
            
            
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Flow AI. All rights reserved. Created By Atharva Patil</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default LandingPage