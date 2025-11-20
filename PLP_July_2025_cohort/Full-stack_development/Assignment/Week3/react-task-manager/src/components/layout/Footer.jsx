import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 React Demo App. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
