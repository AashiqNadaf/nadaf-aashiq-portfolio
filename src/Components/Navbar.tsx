import { Button, Drawer } from 'antd';
import './Styles.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'hero' | 'about' | 'skills' | 'work' | 'contact'
  >('hero');
  return (
    <>
      <div className="w-full h-14 fixed flex flex-row justify-between items-center px-32 bg-white z-10 text-[#000] navbar--md">
        <Link
          to="hero"
          spy
          smooth
          offset={-60}
          duration={500}
          className={`font-bold text-xl h-full flex items-center px-2 cursor-pointer  ${
            activeTab === 'hero'
              ? 'text-[#4D7CF4] border-b-4 border-[#4D7CF4]'
              : 'text-black'
          }`}
          onClick={() => setActiveTab('hero')}
        >
          Nadaf Aashiq
        </Link>
        <div className="flex flex-row justify-between gap-12 h-full items-center">
          <Link
            to="about"
            spy
            smooth
            offset={-60}
            duration={500}
            className={`font-semibold text-l cursor-pointer h-full flex items-center px-2 ${
              activeTab === 'about'
                ? 'text-[#4D7CF4] border-b-4 border-[#4D7CF4]'
                : 'text-black'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About
          </Link>
          <Link
            to="skills"
            spy
            smooth
            offset={-60}
            duration={500}
            className={`font-semibold text-l cursor-pointer h-full flex items-center px-2 ${
              activeTab === 'skills'
                ? 'text-[#4D7CF4] border-b-4 border-[#4D7CF4]'
                : 'text-black'
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </Link>
          <Link
            to="work"
            spy
            smooth
            offset={-60}
            duration={500}
            className={`font-semibold text-l cursor-pointer h-full flex items-center px-2 ${
              activeTab === 'work'
                ? 'text-[#4D7CF4] border-b-4 border-[#4D7CF4]'
                : 'text-black'
            }`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-60}
            duration={500}
            className={`font-semibold text-l cursor-pointer h-full flex items-center px-2 ${
              activeTab === 'contact'
                ? 'text-[#4D7CF4] border-b-4 border-[#4D7CF4]'
                : 'text-black'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full h-14 fixed text-[#000] navbar--sm">
        <div className="w-full h-14  flex flex-row justify-end items-center">
          <Button
            onClick={() => setIsDrawerOpen(true)}
            style={{ marginRight: '10px' }}
          >
            <i className="fa-solid fa-bars"></i>
          </Button>
        </div>
      </div>
      <Drawer
        title="Navigation bar"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <div className="w-full h-full flex flex-col gap-4">
          <Link
            to="hero"
            spy
            smooth
            offset={0}
            duration={500}
            onClick={() => {
              setActiveTab('hero');
              setIsDrawerOpen(false);
            }}
            className={`font-bold text-xl w-full h-10 px-3.5 flex flex-row justify-start items-center border-2 border-[#4D7CF4] rounded-xl cursor-pointer contact--button ${
              activeTab === 'hero'
                ? '!bg-[#4D7CF4] !text-white'
                : '!bg-white !text-black'
            }`}
          >
            Nadaf Aashiq
          </Link>
          <Link
            to="about"
            spy
            smooth
            offset={20}
            duration={500}
            onClick={() => {
              setActiveTab('about');
              setIsDrawerOpen(false);
            }}
            className={`font-semibold text-l w-full h-9 px-3.5 flex flex-row justify-start items-center border-2 border-[#4D7CF4] rounded-xl cursor-pointer contact--button ${
              activeTab === 'about'
                ? '!bg-[#4D7CF4] !text-white'
                : '!bg-white !text-black'
            }`}
          >
            About
          </Link>
          <Link
            to="skill"
            spy
            smooth
            offset={0}
            duration={500}
            onClick={() => {
              setActiveTab('skills');
              setIsDrawerOpen(false);
            }}
            className={`font-semibold text-l w-full h-9 px-3.5 flex flex-row justify-start items-center border-2 border-[#4D7CF4] rounded-xl cursor-pointer contact--button ${
              activeTab === 'skills'
                ? '!bg-[#4D7CF4] !text-white'
                : '!bg-white !text-black'
            }`}
          >
            Skills
          </Link>
          <Link
            to="work"
            spy
            smooth
            offset={20}
            duration={500}
            onClick={() => {
              setActiveTab('work');
              setIsDrawerOpen(false);
            }}
            className={`font-semibold text-l w-full h-9 px-3.5 flex flex-row justify-start items-center border-2 border-[#4D7CF4] rounded-xl cursor-pointer contact--button ${
              activeTab === 'work'
                ? '!bg-[#4D7CF4] !text-white'
                : '!bg-white !text-black'
            }`}
          >
            Work
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={20}
            duration={500}
            onClick={() => {
              setActiveTab('contact');
              setIsDrawerOpen(false);
            }}
            className={`font-semibold text-l w-full h-9 px-3.5 flex flex-row justify-start items-center border-2 border-[#4D7CF4] rounded-xl cursor-pointer contact--button ${
              activeTab === 'contact'
                ? '!bg-[#4D7CF4] !text-white'
                : '!bg-white !text-black'
            }`}
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
