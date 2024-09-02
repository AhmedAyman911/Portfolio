export default function About() {
    return (
        <div id="about" className="flex-col">
            <div className="relative flex flex-col md:flex-row items-center justify-between px-16 mb-4">
                <div></div>
                <div className="flex flex-col text-left max-w-2xl">
                    <p className="md:text-md text-xl font-bold my-2 text-purple-500">About Me</p>
                    <p className="md:text-4xl text-xl font-bold text-black-500">Who am I?</p>
                    <p className="md:text-2xl text-xl font-bold my-2 text-black-500">I’m Ahmed Ayman, a Software Engnieer</p>
                    <p className="md:text-2xl text-md text-balance text-gray-500">I am a software engineer in my final year of a Bachelor of Computer Science
                        at October University for Modern Sciences and Arts. I have a strong foundation in software development and problem-solving,
                        with experience in various programming languages and tools. I’m eager to apply my skills to real-world projects,
                        aiming to contribute to innovative solutions and continue growing in the tech industry.</p>

                </div>
                <div className="md:w-1/3 w-full">
                    <div className="flex-col mt-12">
                        <div className="flex justify-between py-1">
                            <p className="text-purple-900 md:text-xl text-lg font-bold">REACT </p>
                            <p className="text-purple-900 md:text-2xl text-lg font-bold">60%</p>
                        </div>
                        <div className="container h-4 border-0 rounded-xl bg-gray-200">
                            <div className="container h-4 w-3/6 border-0 rounded-xl bg-purple-900" />
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex justify-between py-1">
                            <p className="text-purple-900 text-xl font-bold">JAVASCRIBT </p>
                            <p className="text-purple-900 text-2xl font-bold">75%</p>
                        </div>
                        <div className="container h-4 border-0 rounded-xl bg-gray-200">
                            <div className="container h-4 w-4/5 border-0 rounded-xl bg-purple-900" />
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex justify-between py-1">
                            <p className="text-purple-900 text-xl font-bold">TAILWIND CSS </p>
                            <p className="text-purple-900 text-2xl font-bold">70%</p>
                        </div>
                        <div className="container h-4 border-0 rounded-xl bg-gray-200">
                            <div className="container h-4 w-2/3 border-0 rounded-xl bg-purple-900" />
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex justify-between py-1">
                            <p className="text-purple-900 text-xl font-bold">Python </p>
                            <p className="text-purple-900 text-2xl font-bold">70%</p>
                        </div>
                        <div className="container h-4 border-0 rounded-xl bg-gray-200">
                            <div className="container h-4 w-2/3 border-0 rounded-xl bg-purple-900" />
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="relative flex justify-around items-center mb-4 flex-col">

                <div className="flex items-center w-3/5 py-6">
                    <hr className="flex-grow border-t-2 border-gray-300" />
                    <p className="text-md font-bold mx-4 text-purple-500">Tools</p>
                    <hr className="flex-grow border-t-2 border-gray-300" />
                </div>
                <div className="flex md:space-x-20 space-x-1 ml-4 flex-wrap">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" className="md:h-12 md:w-12 h-8 w-8"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" alt="Firebase" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" alt="Postman" className="md:h-12 md:w-12 h-8 w-8" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="md:h-12 md:w-12 h-8 w-8" />
                </div>
                <div className="flex items-center w-3/5 py-6">
                    <hr className="flex-grow border-t-2 border-gray-300" />
                </div>

            </div>
        </div>
    );
}
