export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-xl font-semibold text-white">
              Chicago Outdoor Ads
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Premium outdoor advertising solutions across Chicago. Billboards,
              transit, street furniture, and more — reach your audience where it
              matters.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="hover:text-white transition" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#press">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="hover:text-white transition" href="#help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#locations">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="hover:text-white transition" href="#privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#cookies">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href="#accessibility"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Get updates on inventory, rates, and special offers.
            </p>
            <form
              className="mt-4 flex w-full max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="rounded-r-md bg-amber-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Follow
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="hover:text-white transition" href="#twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#linkedin">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 md:flex-row items-center justify-between text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Chicago Outdoor Ads. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition" href="#privacy">
              Privacy
            </a>
            <a className="hover:text-white transition" href="#terms">
              Terms
            </a>
            <a className="hover:text-white transition" href="#sitemap">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
