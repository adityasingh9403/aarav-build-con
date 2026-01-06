import React from 'react';
import { ShieldCheck, Target, Eye, HardHat, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 bg-white">
      {/* 1. SEO Header Section */}
      <section className="bg-[#0f172a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Best Construction Company in <span className="text-yellow-500">Indore</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Aarav Build Con is a premier name in the real estate and infrastructure industry of Madhya Pradesh. 
            With over 12 years of excellence, we have been delivering high-quality residential, commercial, 
            and civil engineering projects across Indore.
          </p>
        </div>
      </section>

      {/* 2. Detailed Company History (Keyword Rich) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-[#0f172a] border-b-4 border-yellow-500 inline-block pb-2">
              Our Legacy & Expertise
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Established in 2012, **Aarav Build Con** started with a vision to redefine the skyline of **Indore**. 
              As leading **civil contractors in Vijay Nagar**, we have successfully completed 150+ projects, 
              ranging from luxury independent villas to sprawling commercial complexes.
            </p>
            <p className="text-gray-600">
              Our team consists of highly skilled **architects, structural engineers, and project managers** who ensure that every brick laid meets global safety and quality standards. We specialize in 
              **turnkey construction solutions**, providing everything from floor planning and 3D design 
              to final interior execution and handover.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <ShieldCheck className="text-yellow-600" />
                <span className="font-bold text-sm">ISO Certified Quality</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <HardHat className="text-yellow-600" />
                <span className="font-bold text-sm">Strict Safety Protocols</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" 
              alt="Aarav Build Con Construction Site Indore" 
            />
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values (Long-form Content) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-6 text-white">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide affordable yet luxurious housing and commercial infrastructure in Indore by 
                utilizing sustainable building materials and cutting-edge construction technology.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center mb-6 text-white">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted construction partner in Madhya Pradesh, known for 
                uncompromising quality, timely delivery, and ethical business practices.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-6 text-white">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Core Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparency, Integrity, and Innovation are the pillars of Aarav Build Con. 
                We believe in long-term relationships with our clients and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (SEO Bullets) */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-12 uppercase tracking-widest italic">Why Choose Aarav Build Con?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { t: "RERA Registered", d: "All our residential projects in Indore are RERA approved." },
             { t: "Vastu Compliant", d: "Expert consultation for Vastu-based home designs." },
             { t: "Direct Supervision", d: "Engineers present on-site for daily quality checks." },
             { t: "No Cost Overruns", d: "Transparent pricing with no hidden charges during execution." }
           ].map((item, i) => (
             <div key={i} className="text-left space-y-2 border-l-2 border-yellow-500 pl-4">
               <h4 className="font-bold text-primary">{item.t}</h4>
               <p className="text-sm text-gray-500">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 5. Team / Leadership Intro (Local Trust) */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Globe className="mx-auto text-yellow-500 mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-6 italic">Committed to Developing Indore</h2>
          <p className="text-gray-400 text-lg">
            Our leadership team brings together decades of experience in **Urban Planning and Real Estate**. 
            From the bustling streets of **Bhawarkua** to the modern hubs of **Super Corridor**, 
            Aarav Build Con is committed to the development of Indore as a Smart City.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;