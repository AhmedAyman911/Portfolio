export default function Home() {
    return (
        <div id="home" className="w-full md:h-screen flex flex-col relative py-8">
            <div className="absolute inset-0 h-1/6 bg-gradient-to-r from-purple-200 from-40% to-cyan-100 to-40% blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between px-16 md:mt-48 mt-20 ">
                <div></div>
                <div className="flex flex-col text-left max-w-2xl">
                    <p className="lg:text-7xl text-3xl font-bold my-2">Hello!</p>
                    <p className="lg:text-7xl text-2xl font-bold my-2 text-purple-700">I’m Ahmed Ayman!</p>
                    <p className="lg:text-2xl text-md md:text-balance text-gray-400">A passionate developer specializing in creating seamless, user-friendly web applications that bring ideas to life.</p>
                    <button className="bg-purple-500 w-1/3 md:w-1/6 my-4 text-white font-bold py-4 rounded-lg shadow-md hover:bg-purple-600 focus:ring-purple-400">
                        Resume
                    </button>
                </div>
                <div className="md:w-1/3">
                    <img
                        src="https://raw.githubusercontent.com/ElvinEga/devportfolio/master/public/img/hand_coding.svg"
                        alt="img1"
                        className="w-full h-auto"
                    />
                </div>
                
                <div></div>
            </div>
        </div>
    );
}
