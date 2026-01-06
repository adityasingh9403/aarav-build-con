import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 italic tracking-tighter">
                        GET IN <span className="text-yellow-500">TOUCH</span>
                    </h1>
                    <div className="w-24 h-2 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Visit our Indore office or connect with us directly via phone or email.
                        We are ready to build your vision.
                    </p>
                </div>

                {/* Info Grid - Three Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* Office Address Card */}
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 text-center group">
                        <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-yellow-500 mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-4 uppercase tracking-wider">Our Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                            102, Silver Heights, Vijay Nagar, <br />
                            Indore, Madhya Pradesh 452010
                        </p>
                    </div>

                    {/* Direct Support Card */}
                    <div className="bg-[#0f172a] p-10 rounded-3xl text-white shadow-2xl scale-105 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Globe size={100} />
                        </div>
                        <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center text-[#0f172a] mx-auto mb-6">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Direct Contact</h3>
                        <div className="space-y-2">
                            <p className="text-yellow-500 font-black text-2xl">+91 98765 43210</p>
                            <p className="text-gray-400">info@aaravbuildcon.com</p>
                        </div>
                    </div>

                    {/* Working Hours Card */}
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 text-center group">
                        <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-yellow-500 mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-4 uppercase tracking-wider">Work Hours</h3>
                        <p className="text-gray-600">
                            Mon - Sat: 10:00 AM - 07:00 PM <br />
                            <span className="text-yellow-600 font-bold">Sunday: Closed</span>
                        </p>
                    </div>
                </div>

                {/* Full Width Action Buttons (Instead of Form) */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="tel:+919977267799"
                        className="w-full md:w-auto bg-[#0f172a] text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition shadow-xl"
                    >
                        <Phone size={24} /> CALL HEAD OFFICE
                    </a>
                    <a
                        href="https://wa.me/919977267799"
                        className="w-full md:w-auto bg-green-500 text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition shadow-xl"
                    >
                        <MessageCircle size={24} /> CHAT ON WHATSAPP
                    </a>
                </div>

                {/* Map Section */}
                <div className="mt-20 h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9616039572975!2d75.836159!3d22.766787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303ba5dc8557d%3A0x8d0a4084401096f0!2sAarav%20Construction!5e0!3m2!1sen!2sin!4v1704533000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;