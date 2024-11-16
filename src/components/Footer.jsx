const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto flex flex-wrap justify-between items-start">
                {/* Company Info */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">nasenburg .</h2>
                    <p className="text-gray-400 mb-4">
                        Explore a world of knowledge and skills at your fingertips, from business and technology to the arts and beyond, join the sessions, complete the tasks and be the future you never dreamt.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="link text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="link text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="link text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="link text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Why Us ?</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
    <h3 className="font-semibold mb-4">Contact Information</h3>
    <p className="text-gray-400">Address: Schloss Hohenberg, 12345 Bavaria, Germany</p>
    <p className="text-gray-400">Email: info@hohenbergcastle.de</p>
    <p className="text-gray-400">Phone: (+49) 800 123 4567</p>
</div>


                {/* Newsletter Subscription */}
                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold mb-4">Subscribe to our Newsletter</h3>
                    <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 bg-gray-800 text-gray-400 focus:outline-none"
                        />
                    </div>
                    <button className="mt-4 w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded-full">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4">
                <div className="container mx-auto flex justify-between text-gray-400">
                    <p>© 2024 - 30 <span className="text-lime-400">nasenburg</span>. All rights reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
