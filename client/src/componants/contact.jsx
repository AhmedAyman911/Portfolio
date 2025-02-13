    import { useState } from 'react';
    import{Alert, Snackbar} from'@mui/material';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formspree.io/f/mgvwqopr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            if (response.ok) {
                setSuccessAlert(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setErrorAlert(true);
            }
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
            setErrorAlert(true);
        });
    };

    const handleClose = () => {
        setSuccessAlert(false);
        setErrorAlert(false);
    };
    return (
        <div id="contact"  className="w-full flex flex-col md:items-center md:p-10 p-5">
            <p className="md:text-md text-sm text-purple-500 font-bold mb-4 text-center">CONTACT</p>
            <p className="md:text-3xl text-2xl text-black-900 font-bold mb-4 text-center">Getting in Touch With Me</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-2 ml-4 text-left">Thank you for visiting my website! I am happy to help answer any questions</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-2 ml-4 text-left">you may have. Please fill out the form below and we’ll get back to you as</p>
            <p className="md:text-xl text-lg text-gray-500 md:mb-4 ml-4 text-left">soon as possible.</p>
            <div className="flex flex-col w-full max-w-3xl px-4">
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className="flex flex-wrap justify-between md:gap-10 md:py-4">
                    <div className="flex flex-col flex-1 min-w-[300px]">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
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
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full mb-4">
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-md border border-gray-300 bg-gray-200 py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    />
                </div>

                <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                    Send Message
                </button>
            </form>
            <Snackbar open={successAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Your message has been sent successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={errorAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled"  severity="error" sx={{ width: '100%' }}>
                    Error submitting your message. Please try again.
                </Alert>
            </Snackbar>
        </div>
        </div>
    );
}