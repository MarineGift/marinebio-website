import type { NextPage } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

// --- SVG Icon Components ---
const LeafIcon = ({ className = "h-10 w-10 text-teal-600" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9h-9v9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 019 9h-9V3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 009 9v-9H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 019-9v9H3z" />
  </svg>
);

const PaperIcon = ({ className = "h-10 w-10 text-teal-600" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ShieldIcon = ({ className = "h-10 w-10 text-teal-600" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 009 2.056a11.955 11.955 0 009-2.056c0-1.344-.333-2.622-.94-3.816z" />
    </svg>
);

const DropletIcon = ({ className = "h-10 w-10 text-teal-600" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5C7.5 5.015 9.515 3 12 3s4.5 2.015 4.5 4.5c0 1.96-1.272 3.638-3 4.243V18a1.5 1.5 0 01-3 0v-6.257c-1.728-.605-3-2.283-3-4.243zM12 18h.01" />
    </svg>
);


// --- Data for Page Sections (Content derived from provided documents) ---
const technologies = [
  {
    icon: <DropletIcon />,
    title: "BioSAP (Natural Absorbent)",
    description: "A revolutionary 100% biodegradable natural absorbent designed to replace microplastic SAPs in diapers and sanitary pads. After use, it recycles into organic fertilizer, creating a perfect circular economy.",
  },
  {
    icon: <PaperIcon />,
    title: "Papermaking Filler",
    description: "An innovative filler technology that dramatically reduces wood pulp usage, solving a decades-old challenge in the paper industry. A U.S. patent is pending, with a pilot project agreed upon with Western Michigan University.",
  },
  {
    icon: <ShieldIcon />,
    title: "Biodegradable Barrier Coating",
    description: "A breakthrough technology to replace non-degradable plastic films in food packaging. Its scientific merit has been validated by a publication in a world-renowned Elsevier academic journal.",
  },
  {
    icon: <LeafIcon />,
    title: "Eco-Friendly Marine Materials",
    description: "Advanced materials designed to replace existing sources of ocean pollution, such as styrofoam buoys and other plastic equipment, protecting marine ecosystems from microplastic contamination.",
  },
];

const achievements = [
  {
    title: "KSEA IR Competition Winner",
    description: "Awarded Second Place at the prestigious Investor Relations competition hosted by the Korean-American Scientists and Engineers Association (KSEA) in Fairfax, VA, validating our business plan among U.S. experts.",
    logo: "KSEA"
  },
  {
    title: "Shark Tank Validation",
    description: "Successfully passed the preliminary interview for ABC's acclaimed TV show \"Shark Tank,\" with a standing invitation to appear once our U.S. corporation is formally established.",
    logo: "Shark Tank"
  },
  {
    title: "U.S. Registered Trademark",
    description: "Our brand 'MARINE GIFT' is a registered trademark with the U.S. Patent and Trademark Office (Reg. No. 7,153,311), securing our brand's legal protection in the American market.",
    logo: "USPTO"
  },
];

const featuredLogos = [
    { name: "Forbes", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Forbes_logo.svg/200px-Forbes_logo.svg.png" },
    { name: "Bloomberg", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bloomberg_logo.svg/200px-Bloomberg_logo.svg.png" },
    { name: "Business Insider", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Business_Insider_logo.svg/200px-Business_Insider_logo.svg.png" },
    { name: "Shark Tank", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shark_Tank_logo.svg/200px-Shark_Tank_logo.svg.png" },
];


// --- Page Component ---
const HomePage: NextPage = () => {
  return (
    <div className={`bg-white text-gray-800 ${inter.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LeafIcon className="h-8 w-8 text-teal-600"/>
            <span className="text-2xl font-bold text-gray-800">MarineBio Group</span>
          </div>
          <div className="space-x-8 hidden md:flex items-center">
            <a href="#technology" className="text-gray-600 hover:text-teal-600 transition-colors">Technology</a>
            <a href="#validation" className="text-gray-600 hover:text-teal-600 transition-colors">Validation</a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-white text-center px-6 pt-20">
           <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1437482078695-7cb3a70c0f86?q=80&w=2070&auto=format&fit=crop')" }}></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight drop-shadow-lg">Engineering Nature's Solutions.</h1>
              <p className="mt-4 text-lg md:text-xl font-light text-slate-200 max-w-2xl mx-auto drop-shadow-md">
                  We solve the global plastic pollution crisis with a portfolio of four proprietary, paradigm-shifting eco-friendly material technologies.
              </p>
              <a href="#technology" className="mt-10 inline-block bg-teal-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-transform hover:scale-105 shadow-xl">
                  Discover Our Innovations
              </a>
           </div>
        </section>

        {/* As Featured In */}
        <div className="bg-slate-100 py-12">
          <div className="container mx-auto px-6">
              <p className="text-center text-gray-500 font-semibold uppercase tracking-widest mb-8">Recognized By</p>
              <div className="flex justify-center items-center flex-wrap gap-x-10 md:gap-x-16">
                  {featuredLogos.map(logo => (
                      <img key={logo.name} src={logo.src} alt={logo.name} className="h-6 md:h-8 object-contain my-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  ))}
              </div>
          </div>
        </div>

        {/* Technology Section */}
        <section id="technology" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Four Pillars of Innovation</h2>
              <p className="mt-4 text-lg text-gray-600">Our technologies address the root causes of plastic pollution across critical industries, offering solutions where global giants have yet to succeed.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {technologies.map((tech) => (
                <div key={tech.title} className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full">{tech.icon}</div>
                  <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{tech.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* U.S. Market Validation Section */}
        <section id="validation" className="py-24 md:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Validated by U.S. Experts</h2>
              <p className="mt-4 text-lg text-slate-300">Our vision isn't just a plan; it's a proven business model recognized by leading platforms and authorities in the United States.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {achievements.map((ach) => (
                 <div key={ach.title} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500 transition-colors duration-300 transform hover:scale-105">
                   <div className="text-3xl font-black text-teal-400 mb-4 tracking-tighter">{ach.logo}</div>
                   <h3 className="text-2xl font-bold mb-3 text-white">{ach.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{ach.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-5 items-center gap-12">
              <div className="md:col-span-2">
                  {/* Placeholder for an actual image of Mr. Heo */}
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-slate-200 rounded-full shadow-2xl bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop')"}}>
                  </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Visionary Leader</h2>
                  <p className="mt-6 text-2xl text-gray-800 font-semibold">Yun Young Heo, Founder & CEO</p>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                      Mr. Heo is the inventor and driving force behind MarineBio Group's entire technology portfolio. As the founder of 'Marinepad' and 'Arame Material,' he has led the journey from scientific discovery to commercial application. His work has been recognized by the KGCCI, the South Korean Government, and major international media. His vision is to establish the United States as the undisputed global leader in the sustainable materials industry.
                  </p>
              </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-slate-100">
           <div className="container mx-auto px-6 text-center max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Join Us in Building a Sustainable Future.</h2>
              <p className="mt-4 text-lg text-gray-600">
                  We are actively seeking strategic partners, investors, and collaborators to accelerate the adoption of our technologies. Let's make a global impact, together.
              </p>
              <a href="mailto:ceo@marinebiogroup.com" className="mt-10 inline-block bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-transform hover:scale-105 shadow-lg">
                  Contact Us
              </a>
              <p className="mt-8 text-gray-500 font-semibold">MarineBio Group Inc.</p>
              <p className="text-gray-500">Fairfax County, Virginia, USA</p>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="container mx-auto px-6 text-center">
              <p>&copy; {new Date().getFullYear()} MarineBio Group Inc. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default HomePage;

