'use client';

import React, { useState } from 'react';
import Link from 'next/link';
export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50  px-4">
      <div className="w-full max-w-md bg-white border rounded-xl shadow-[10px_10px_0px_rgba(0,0,0,0.2)] p-8 text-center">
        <h1 className="font-extrabold text-3xl mb-6 text-gray-800">Login</h1>
        <form>
          <div className="mb-4 text-left">
            <label className="block mb-1 font-semibold text-gray-700">User Name</label>
            <input
              type="text"
              value={username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl hover:bg-blue-600 transition duration-300"
          />
        </form>
        <h1 className='m-5 text-3xl '>OR</h1>
        <input
              type="text"
              value="SCC"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl font-bold text-2xl text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <h3>Did not have an existing account ? <Link href='/register' className='text-blue-500'>Register Now</Link> </h3>
      </div>
    </div>
  );
}
