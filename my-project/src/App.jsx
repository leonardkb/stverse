
import collegeImage from './assets/college.png';
function App() {
 

  return (
    <>
     <div className="relative flex flex-col h-screen bg-gray-100 text-gray-800">
    {/* Background Gradient Wrapper */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-80 z-0"></div>
    
    {/* Header Content */}
    <header className="relative z-10 flex flex-col items-center justify-center flex-grow text-white p-6 sm:p-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md text-center">Welcome to Our College Tour</h1>
        <p className="text-md sm:text-lg mb-6 drop-shadow-lg text-center">Experience our college environment through this interactive simulation model.</p>
        
        {/* Button Container */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Launch Simulation Button */}
            <a 
                href="https://sahrdaya.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-xl 
                hover:bg-blue-500 transition duration-300 text-center"
            >
                Launch VR Simulation
            </a>

            {/* AR Tour Button */}
            <a
    href="/ar-tour-link"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-xl 
              hover:bg-blue-500 transition duration-300 text-center"
    onClick={(e) => {
        e.preventDefault(); // Prevent default link action
        // Open AR Tour link in a new tab
        window.open("/ar-tour-link", "_blank", "noopener,noreferrer");

        // Trigger APK download
        const apkLink = document.createElement("a");
        apkLink.href = "/STVerse.apk"; // replace with your APK file path
        apkLink.download = "AR-Tour-App.apk"; // specify file name
        apkLink.click();
    }}
>
    AR Tour
</a>

        </div>
    </header>
    
    {/* Footer with White Background */}
    <footer className="relative z-10 py-4 text-center bg-white w-full">
        <p className="text-gray-800">&copy; 2024 Our College. All Rights Reserved.</p>
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
