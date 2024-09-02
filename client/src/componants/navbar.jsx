export default function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="w-full absolute top-0 left-0">
            <div className="flex justify-between items-center w-full md:px-16 py-4 px-4">
                <div>
                    <span className="md:text-2xl text-md font-bold text-purple-700">
                        Ahmed Ayman
                    </span>
                </div>
                <div className="flex md:space-x-10 space-x-4">
                    <button
                        className="lg:text-xl sm:text-md text-black-500 md:hover:text-purple-500"
                        onClick={() => scrollToSection('about')}
                    >
                        About me
                    </button>
                    <button className="md:text-xl text-md text-black-500 md:hover:text-purple-500"
                        onClick={() => scrollToSection('projects')}>
                        Projects
                    </button>
                    <button className="md:text-xl text-md text-purple-500"
                        onClick={() => scrollToSection('contact')}>
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}
