import { logo } from '../../assets';
import Image from '../common/Image';
import { academyInfo, branchesData } from '../../data/content';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programme', href: '#programme' },
  { name: 'Teachers', href: '#teachers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Branches', href: '#branches' },
  { name: 'Contact', href: '#contact' },
];

// Only Bharatanatyam is taught — no other courses
const whatWeOffer = [
  'Bharatanatyam — Foundation',
  'Bharatanatyam — Development',
  'Bharatanatyam — Expression',
  'Bharatanatyam — Mastery',
  'Arangetram Preparation',
];

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-white/80">
      {/* Top gold line */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Branding */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src={logo.main}
                alt="Nrityangan Dance Academy"
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              Preserving and promoting the authentic art of Bharatanatyam across Maharashtra — guiding students from foundation to Arangetram.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 bg-white/10 hover:bg-gold hover:text-maroon rounded-lg flex items-center justify-center transition-all duration-300 text-white/70"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programme */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Programme
            </h4>
            <ul className="space-y-2">
              {whatWeOffer.map(item => (
                <li key={item} className="text-sm text-white/70 flex items-start gap-2">
                  <span className="w-1 h-1 bg-gold/50 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Branches */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Our Branches
            </h4>
            <ul className="space-y-4">
              {branchesData.map(branch => (
                <li key={branch.id}>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">{branch.city}</p>
                    {branch.admissionsOpen && (
                      <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-medium border border-gold/30">
                        Open
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/50 mt-0.5">Maharashtra</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} <span className="text-white font-medium">{academyInfo.name}</span>. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-4">
          Admissions currently open at <span className="text-gold/70">Loni Branch</span> only
        </p>
      </div>
    </footer>
  );
};

export default Footer;
