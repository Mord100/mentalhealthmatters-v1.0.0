import React, { useState } from 'react';
import Member from '../../assets/website/member.jpeg'
import Member1 from '../../assets/website/member1.jpeg'
import Member2 from '../../assets/website/member2.jpeg'
import User from '../../assets/website/user.jpg'

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      image: Member1,
      name: "Howard Bowa",
      title: "Mental Health Advocate",
      specialization: "Psychosocial First Aid",
      description: "Passionate advocate for mental health awareness with extensive experience in community outreach and crisis intervention.",
      credentials: ["Certified Psychosocial First Aider", "Community Mental Health Specialist"],
      experience: "8+ Years"
    },
    {
      id: 2,
      image: Member2,
      name: "Dyzie Magela",
      title: "Social Work Specialist",
      specialization: "Special Needs Education",
      description: "Dedicated social worker specializing in special needs education and family support systems.",
      credentials: ["Licensed Social Worker", "Special Education Specialist"],
      experience: "6+ Years"
    },
    {
      id: 3,
      image: Member,
      name: "Mordecai Chingolo",
      title: "Systems Analyst",
      specialization: "Digital Mental Health Solutions",
      description: "Technology specialist focused on creating innovative digital solutions for mental health accessibility.",
      credentials: ["Computing & Information Systems", "Digital Health Innovation"],
      experience: "5+ Years"
    },
  ];

  return (
    <section id='team' className="relative bg-neutral-50 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-purple-100/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-amber-50/40 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-8 lg:px-16">

        {/* Team Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-display font-light text-neutral-400">05</span>
            <div className="w-12 h-px bg-neutral-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[0.9] text-neutral-900 tracking-tight mb-6">
                Our
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-display font-light italic text-neutral-600 -mt-2 lg:-mt-4">
                  Team
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-md">
                Passionate professionals dedicated to supporting your mental health journey
                with expertise, compassion, and evidence-based care.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative">
                {/* Member Photo */}
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-3xl bg-neutral-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Photo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-xs font-sans font-medium text-white/80 uppercase tracking-wider mb-2">
                        {member.experience} Experience
                      </div>
                      <div className="text-sm font-body text-white/90 leading-relaxed">
                        {member.specialization}
                      </div>
                    </div>
                  </div>

                  {/* Index Number */}
                  <div className="absolute top-6 left-6">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-xs font-display font-bold text-neutral-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  {/* Name & Title */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                      {member.name}
                    </h3>
                    <div className="text-base font-sans font-medium text-primary uppercase tracking-wider">
                      {member.title}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base font-body text-neutral-600 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-2">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span className="text-sm font-sans text-neutral-700">
                          {credential}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`w-0 h-1 bg-primary rounded-full transition-all duration-500 ${
                    hoveredMember === member.id ? 'w-16' : 'w-0'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
