export default function Contact() {
    return (
        <div id="contact"  className="w-full flex flex-col md:items-center md:p-10 p-5">
            <p className="md:text-md text-sm text-purple-500 font-bold mb-4 text-center">CONTACT</p>
            <p className="md:text-3xl text-2xl text-black-900 font-bold mb-4 text-center">Getting in Touch With Me</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-2 ml-4 text-left">Thank you for visiting my website! I am happy to help answer any questions</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-2 ml-4 text-left">you may have. Please fill out the form below and we’ll get back to you as</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-4 ml-4 text-left">soon as possible.</p>

            <div className="flex flex-col w-full max-w-3xl px-4">
                <div className="flex flex-wrap justify-between md:gap-10 md:py-4">
                    <div className="flex flex-col flex-1 min-w-[300px]">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="block w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        />
                    </div>
                    <div className="flex flex-col flex-1 min-w-[300px]">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="block w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full mb-4"> {/* Added mb-4 for spacing between textarea and button */}
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        className="block w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    />
                </div>

                <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                    Send Message
                </button>
            </div>
        </div>
    );
}
