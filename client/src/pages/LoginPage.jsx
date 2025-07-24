import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Login attempt:', { email, password });
    };
  
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        </div>
  
        <div className="relative z-10 w-full max-w-md">
          
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
  
          {/* Login Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-gray-400 text-center mb-8">Sign in to your Flow AI account</p>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
        
                <label htmlFor="email">Email</label>
                
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                    required />
              </div>
  
              <div className="space-y-2">
               
                <label htmlFor="password">Password</label>
                
                <input 
                    type="password"
                    name="password" 
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 w-full my-2 p-2 rounded-md"
                    required
                />
              </div>
  
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <Link to="#" className="text-sm text-red-500 hover:text-red-400 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button 
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3">
                Sign In
              </button>
            </form>
  
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/signup" className="text-red-500 hover:text-red-400 transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  