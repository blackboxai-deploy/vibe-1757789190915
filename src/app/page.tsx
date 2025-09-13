export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a37e2911-0035-4625-9138-17f03f136f5c.png')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed">
            An about statement for your business would go right here
          </p>
        </div>
        
        {/* Reserve Date Button - Top Right */}
        <div className="absolute top-8 right-8 z-20">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Reserve your date
          </button>
        </div>
        
        {/* Logo - Bottom Center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-white text-2xl font-serif tracking-widest">
            GEORGIAKAYE
          </div>
        </div>
      </section>

      {/* Intro/Headline Section */}
      <section className="bg-amber-900 py-20 px-4" style={{ backgroundColor: '#8B6F47' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-8 tracking-wide">
            Heading goes here
          </h1>
          <p className="text-lg md:text-xl mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Supporting text paragraph explaining business or services. This is where you would describe your unique approach to capturing life's most precious moments and creating lasting memories for your clients.
          </p>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Our Experience
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bb57b57-cf5f-4468-84f6-8456e1b03e81.png')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center text-white">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Service 1</h3>
              <p className="text-base font-light mb-6 leading-relaxed">
                Short descriptive text about this service offering and what makes it special for your clients.
              </p>
              <a href="#" className="inline-block bg-transparent border border-white text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Learn More
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="text-center text-white">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Service 2</h3>
              <p className="text-base font-light mb-6 leading-relaxed">
                Short descriptive text about this service offering and what makes it special for your clients.
              </p>
              <a href="#" className="inline-block bg-transparent border border-white text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Learn More
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="text-center text-white">
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Service 3</h3>
              <p className="text-base font-light mb-6 leading-relaxed">
                Short descriptive text about this service offering and what makes it special for your clients.
              </p>
              <a href="#" className="inline-block bg-transparent border border-white text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-12 font-light">
            View the galleries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0164ca10-1188-4289-9a9a-ce6273047245.png" 
                alt="Professional wedding photography portfolio showcase with elegant couple and beautiful venue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e3112ec-f533-4f4d-b506-680eec202184.png" 
                alt="Creative portrait photography session with natural lighting and artistic composition"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/55a07d88-7979-461a-b9cb-63b5078a583d.png" 
                alt="Lifestyle photography capturing authentic moments and genuine emotions in beautiful setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
            View the galleries
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#A0845C' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Client Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc2a86da-dd07-4831-997e-3070900c1c15.png" 
                  alt="Happy client couple portrait smiling and embracing in natural outdoor setting after photography session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Testimonial Text */}
            <div className="order-1 lg:order-2 text-white">
              <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-6">
                "This photographer captured our special day perfectly. The attention to detail and artistic vision exceeded all our expectations. We couldn't be happier with our photos."
              </blockquote>
              <p className="text-lg font-light">
                — Sarah & Michael
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          {/* Left Side - Dark */}
          <div className="bg-gray-900 py-20 px-8 flex items-center justify-center">
            <div className="max-w-md text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-wide">
                Welcome, I'm Stephanie!
              </h2>
              <p className="text-lg font-light leading-relaxed">
                Meet your photographer. I specialize in capturing life's most precious moments with an artistic eye and genuine passion for storytelling through images.
              </p>
            </div>
          </div>
          
          {/* Right Side - Light with Image */}
          <div className="bg-stone-100 relative overflow-hidden">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18a89f3c-8d3a-400d-94fa-fe9cee3004e7.png" 
              alt="Professional lifestyle portrait of smiling female photographer with camera in natural outdoor setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="text-center">
          <p className="text-gray-800 text-sm font-medium tracking-widest">
            GEORGIAKAYE.COM
          </p>
        </div>
      </footer>
    </div>
  );
}