import { faWhatsapp,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
    return (
        <div className="w-full flex flex-col relative py-8">
            <footer className="flex justify-around text-gray-500 py-4">
                <p className="py-4"> &copy; 2024 Ahmed Ayman.</p>
                <div className="flex flex-col">
                    <p className=''>Follow Me</p>
                    <div className="flex py-1 justify-center space-x-6 text-gray-500">
                        <a href="https://www.linkedin.com/in/ahmed-ayman-26113423b" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-700" />
                        </a>
                        <a href="https://github.com/AhmedAyman911" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-700" />
                        </a>
                        <a href="https://wa.me/+201003553839" target="_blank" >
                            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl hover:text-green-500" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
