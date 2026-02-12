import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background py-6 text-center text-sm font-mono text-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <p>
                    <a href="https://github.com/anjalivarshney8923" className="hover:text-neonBlue transition duration-300">
                        Designed & Built by Anjali Varshney
                    </a>
                </p>
                <div className="mt-2 text-xs">
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
