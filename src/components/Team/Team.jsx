import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      name: "Howard Bowa",
      profession: "Mental Health Advocate & Pschosocial first aider",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
      name: "Dyzie Magela",
      profession: "Social Work & Special Needs Education Specialist",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
      name: "Mordecai Chingolo",
      profession: "Computing and Information Systems Analyst",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1623662346448-4fd13f54ffd0?w=600",
      name: "Another Guy",
      profession: "Another Guy's position",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-5 py-8 text-slate-800 xl:px-10 xl:py-20 dark:text-slate-100">
      <h2 className="mb-6 text-3xl font-bold">Meet Our Team</h2>
      <p className="mb-16">
        We're fueled by a passion for our work and a belief in making a positive
        impact. Let our team's dedication and drive accelerate your success.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl">
            <img
              src={member.image}
              className="h-96 w-64 origin-bottom rounded-xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              alt="Team Member"
            />
            <div className="absolute flex h-full w-full flex-col justify-end rounded-xl from-black via-transparent via-25% to-transparent p-4 text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-t">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <h4 className="h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:h-auto group-hover:opacity-100">
                {member.profession}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;