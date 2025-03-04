
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <p className="text-lg mb-2">Sosna Gebremeskel</p>

        <div className="flex space-x-4 mb-2">
          <a
            href="https://github.com/sossygebremeskel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sossy-gebremeskel-b34733326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/sossygebremeskel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://t.me/sossygebremeskel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <i className="fab fa-telegram fa-lg"></i>
          </a>
        </div>

        <p className="text-sm">
          &copy; 2024 Sosna Gebremeskel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
