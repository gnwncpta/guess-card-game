import 'tailwindcss/tailwind.css';
import { useState } from 'react';

// Assets
import Logo from '../../Assets/logo.svg';
import Polygon from '../../Assets/polygon.svg';
import Arrow from '../../Assets/Arrow.svg';

function DropdownLevel(props){
    return (
        <section className="bg-[#6213C8] py-5 absolute">
            <button className="w-full flex items-center justify-between py-[20px] px-[30px] hover:bg-[#530DAE]">Easy <span className="py-1 px-3 rounded-full bg-white text-black text-xs font-medium">5 Tries</span></button>
        </section>
    )
}

export default function Home(props){

    const [ name, setName ] = useState('');
    const [ level, setLevel ] = useState('');

    return (
        <main className="bg-[#6213C8] flex items-center justify-center w-full h-screen">
            <section className="flex flex-col items-center ">
                <img src={Logo} alt="logo-guess-card-game" />

                <div className="mt-[50px] bg-[#7A1CF3] py-[40px] px-[38px] pb-[30px] text-white w-[450px]">
                    <h1 className="leading-9 font-semibold text-[32px]">Welcome to <br/>Guess Card Game.</h1>

                    <section className="mt-[50px]">
                        <div className="flex flex-col">
                            <label htmlFor="yourName" className="font-medium text-[20px]">Your Name</label>
                            <input type="text" name="your" id="yourName" value={name} className="mt-[5px] px-3 py-[6px] text-[20px] bg-transparent border-b border-white focus:outline-none" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mt-[30px] flex flex-col">
                            <label htmlFor="yourName" className="font-medium text-[20px]">Pick Level</label>
                            <button className="px-3 py-[6px] border-b border-white flex items-center justify-between">
                                <p className="text-[20px]">Easy</p>
                                <img src={Polygon} alt="polygon"/>
                            </button>

                            <DropdownLevel />
                        </div>

                        <button className="flex items-center justify-center mt-20 w-full py-4 px-5 bg-white text-black font-semibold text-[18px]">
                            Start The Game
                            <img src={Arrow} alt="arrow-icon" className="ml-3" />
                        </button>
                    </section>

                </div>

            </section>
        </main>
    )
}