import Header from '@/components/layout/Header';
import Image from 'next/image';
import codingImage from '../assets/coding-2.png';

export default function Home() {
  const headerItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div>
      <main>
        <div
          style={{ backgroundColor: '#d6c4ae' }}
          className="w-screen h-screen"
        >
          <Header items={headerItems} />

          <div className="flex flex-col w-fit mx-auto pt-20">
            <div className="flex space-x-10 items-end  px-10 justify-center border-b-2 border-black">
              <div className="text-4xl text-gray-700 mb-6 animate-float">
                Hello, I&apos;m
                <div className="text-6xl text-black hover:scale-120">
                  Igor Oluić.
                </div>
              </div>

              <Image
                src={codingImage}
                alt="Example Image"
                width={250}
                height={198}
                className="mb-2"
              />
            </div>
            <div
              className="px-10 text-2xl tracking-extra-wide flex mt-2"
              style={{ lineHeight: 1 }}
            >
              FRONTEND ENGINEE
              <div className="relative w-fit">
                <span
                  style={{
                    display: 'inline-block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    color: 'white',
                    lineHeight: 1,
                    transformOrigin: 'bottom left',
                    marginLeft: '-1.5px',
                    zIndex: 0,
                  }}
                >
                  R
                </span>

                <div
                  className="relative w-fit falling-object"
                  style={{
                    display: 'inline-block',
                    lineHeight: 1,
                    padding: '0',
                    margin: '0',
                    transformOrigin: 'bottom left',
                    height: '20px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      lineHeight: 1,
                      transformOrigin: 'bottom left',
                      marginLeft: '-2px',
                      zIndex: 1,
                      animation: 'rotate 2s infinite ease-in-out',
                    }}
                  >
                    R
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
