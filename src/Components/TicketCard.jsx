import React from 'react';

function TicketCard({ name, email, username, avatarUrl }) {
  return (
    <div className="bg-gradient-to-br from-[#1E0035] to-[#16042C] text-white p-6 rounded-2xl shadow-2xl w-[400px] mx-auto">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">🎟️ Coding Conf</h1>
        <p className="text-sm text-gray-400">Jan 21, 2025 | Austin, TX</p>
      </div>

      <div className="flex items-center gap-4 bg-[#2A003D] p-4 rounded-xl">
        <img src={avatarUrl} alt="avatar" className="w-16 h-16 rounded-full border-2 border-orange-500" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        <p>We’ve emailed your ticket to</p>
        <p className="text-orange-400">{email}</p>
      </div>
    </div>
  );
}

export default TicketCard;
