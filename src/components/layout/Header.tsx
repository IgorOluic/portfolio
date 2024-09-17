import Link from 'next/link';

interface HeaderProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          <Link href="/">
            <p>{'<IO />'}</p>
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              {items.map((item) => {
                return (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <p className="text-gray-700 hover:text-black text-lg">
                        {item.label}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a href="/Igor_Oluic_Resume.pdf" download="Igor_Oluic_Resume.pdf">
            <button className="bg-black text-white rounded px-4 py-2">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
