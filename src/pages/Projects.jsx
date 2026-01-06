import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Expand, Building } from 'lucide-react';

const projectsData = [
  { id: 1, title: "Aarav Residency", location: "Vijay Nagar, Indore", status: "Completed", area: "25,000 sq.ft", type: "Residential", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600" },
  { id: 2, title: "Skyline Heights", location: "Bicholi Mardana, Indore", status: "Ongoing", area: "50,000 sq.ft", type: "Commercial", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
  { id: 3, title: "Business Park", location: "Bhawarkua, Indore", status: "Completed", area: "15,000 sq.ft", type: "Office", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" },
  { id: 4, title: "Elite Villas", location: "Rau, Indore", status: "Ongoing", area: "12,000 sq.ft", type: "Luxury Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" },
  { id: 5, title: "Smart IT Hub", location: "Super Corridor, Indore", status: "Completed", area: "1,20,000 sq.ft", type: "IT Park", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600" },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.status === filter);

  return (
    <div className="pt-32 pb-20 px-4 bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <h6 className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-sm">Our Portfolio</h6>
            <h1 className="text-5xl font-black text-[#0f172a] tracking-tighter italic">Building <span className="text-yellow-500">Masterpieces</span></h1>
          </motion.div>

          {/* Improved Filter Buttons */}
          <div className="flex flex-wrap gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
            {['All', 'Ongoing', 'Completed'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                  filter === tab 
                  ? 'bg-[#0f172a] text-white shadow-lg scale-105' 
                  : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0f172a] shadow-sm">
                    {project.status}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-yellow-500 text-[#0f172a] font-bold px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-yellow-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600">
                      <Building size={20} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} className="text-yellow-500" />
                    {project.location}
                  </div>

                  {/* Stats Divider */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Build Area</p>
                      <div className="flex items-center gap-1 font-bold text-gray-700 italic">
                         <Expand size={14} /> {project.area}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Project Type</p>
                      <p className="font-bold text-gray-700 italic">{project.type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-400">No projects found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;