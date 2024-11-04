
import collegeImage from './assets/college.png';
function App() {
 

  return (
    <>
      <div className="relative flex flex-col h-screen bg-gray-100 text-gray-800">
    {/* Background Gradient Wrapper */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-80 z-0"></div>
    
    {/* Header Content */}
    <header className="relative z-10 flex flex-col items-center justify-center flex-grow text-white p-10">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to Our College Tour</h1>
        <p className="text-lg mb-6 drop-shadow-lg">Experience our college environment through this interactive simulation model.</p>
        
        {/* Button Container */}
        <div className="flex space-x-4">
            {/* Launch Simulation Button */}
            <a 
                href="https://dribbble.com/shots/25013482-Logistics-Website-Design" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-xl 
                hover:bg-blue-500 transition duration-300"
            >
                Launch Simulation
            </a>

            {/* AR Tour Button */}
            <a 
                href="/ar-tour-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-xl 
                hover:bg-blue-500 transition duration-300"
            >
                AR Tour
            </a>
        </div>
    </header>
    
    {/* Footer with White Background */}
    <footer className="relative z-10 py-4 text-center bg-white w-full">
        <p>&copy; 2024 Our College. All Rights Reserved.</p>
    </footer>

    <img 
        src={collegeImage} 
        alt="College" 
        className="absolute inset-0 object-cover w-full h-full opacity-20 z-0" 
    />  
</div>
    </>
  )
}

export default App
