function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://facebook.com/SwordOrhan" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">YouTube</a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Kuruluş Orhan | This website is not affiliated with 
          <img src="https://i.postimg.cc/D0MTDDcB/atv-logo.png" alt="ATV" className="inline h-5 ml-1" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
