import React from 'react';

const data = [
  {
    id: 1,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  },
  {
    id: 2,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  },
  {
    id: 3,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  },
  {
    id: 4,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  },
  {
    id: 5,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  },
  {
    id: 6,
    img: "/doctors/doctor-1.jpg",
    star: "⭐⭐⭐⭐⭐",
    feedback: "I am using this application and it is very accurate"
  }
];

export default function FeedbackDoctor() {
  return (
    <div className="bg-green-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase">Feedback from your patient</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center">
            <h3 className="text-xl font-bold mb-2">RATING</h3>
            <div className="text-yellow-400 text-2xl mb-3">{item.star}</div>
            <img src={item.img} alt="Doctor" className="w-full h-48 object-cover rounded-md mb-3" />
            <p className="text-gray-700 font-medium">{item.feedback}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-16 mb-10 uppercase">The doctor's recommendations on this application</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index + 100} className="bg-white shadow-md rounded-xl p-4 text-center">
            <h3 className="text-xl font-bold mb-2">RATING</h3>
            <div className="text-yellow-400 text-2xl mb-3">{item.star}</div>
            <img src={item.img} alt="Doctor" className="w-full h-48 object-cover rounded-md mb-3" />
            <p className="text-gray-700 font-medium">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
