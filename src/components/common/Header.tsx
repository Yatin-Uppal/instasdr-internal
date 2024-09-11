import React from 'react';
import Link from '@docusaurus/Link';
import arrowDown from '../../assets/images/arrow-down.svg'
import Image from '../Image';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Header  = () => {
  return (
    <React.Fragment>
        <nav className='w-full flex justify-center py-10 relative z-10'>
            <div className='w-full max-w-container px-4 m-auto inline-flex items-center justify-between'>
                <div className='inline-flex gap-x-48'>
                <Link href='#' className="font-semibold text-xl	text-white !no-underline hover:text-white">InstaSDR.ai</Link>

                <ul className='flex flex-wrap gap-11'>
                    <li>
                        <Link className="font-bold text-sm text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex">Product 
                            <img src="/img/arrow-down.svg" />
                        </Link>
                    </li>

                    <li>
                    <Link className="font-bold text-sm text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex">Pricing </Link>
                    </li>

                    <li>
                    <Link className="font-bold text-sm text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex">For Marketing teams 
                    <img src="/img/arrow-down.svg" />
                    </Link>
                    </li>

                    <li>
                    <Link className="font-bold text-sm text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex">Blog </Link>
                    </li>
                </ul>
                </div>
                <div>
                    <button type="button" className="cursor-pointer text-sm text-black font-semibold py-2 px-4 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow">
                    Start for Free
                    </button>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header