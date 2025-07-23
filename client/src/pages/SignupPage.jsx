import { useState } from 'react';
import { Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import React from 'react'

const SignupPage = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Signup attempt:', formData);
        };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Get Started</h1>
          <p className="text-gray-400 text-center mb-8">Create your Flow AI account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">

                <label htmlFor="name">Full Name</label>
                <br />
                <input 
                type="text" 
                name="name" 
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                required />
            </div>

            <div className="space-y-2">
              
              <label htmlFor="name">Email</label>
              
              <input 
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              
              <label htmlFor="password">Password</label>
              
              <input 
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                required />
            </div>

            <div className="space-y-2">

              <label htmlFor="confirmPassword">Confirm Password</label>

              <input type="password" 
                name="password"
                id="confirmpassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                required
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" required />
              <span className="text-sm text-gray-400">
                I agree to the{' '}
                <Link to="#" className="text-red-500 hover:text-red-400 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-red-500 hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>


            <button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md">
                Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-red-500 hover:text-red-400 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        </div>
    </div>


  )
}

export default SignupPage