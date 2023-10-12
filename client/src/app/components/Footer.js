const Footer = ({disable=false}) => {
  return (
    <section className={`${disable?"hidden":""} mt-5 bg-footer cursor-default`}>
        <div className="flex w-5/6 mx-auto py-10">
            <div className="w-4/6 sm:w-3/12">
                <div className="mb-4 text-slate-100 text-2xl font-semibold uppercase font-sans">NREMT and NCLEX Mastery Hub</div>
                <div className="text-xs text-slate-300">All of our practice questions are written by industry experts, and each question comes with a detailed explanation.</div>
            </div>
            {/* Later  */}
            <div></div>
        </div>
        <div className="h-20 w-5/6 mx-auto flex items-center justify-between">
            <div className="text-white text-[9px] sm:text-xs">&copy; 2023 NREMT and NCLEX Mastery Hub, Inc. All Rights Reserved.</div>
            <ul className="flex space-x-2">
                <li className="w-6 h-6 hover:-translate-y-1 duration-100 cursor-pointer rounded-full bg-white flex justify-center items-center">
                    <svg className="w-4/6 h-4/6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 64 64">
                       <path className="fill-footer" d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                    </svg>
                </li>
                <li className="w-6 h-6 hover:-translate-y-1 duration-100 cursor-pointer rounded-full bg-white flex justify-center items-center">
                    <svg className="w-4/6 h-4/6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
                        <path  className="fill-footer"  d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"></path>
                    </svg>
                </li>
                <li className="w-6 h-6 hover:-translate-y-1 duration-100 cursor-pointer rounded-full bg-white flex justify-center items-center">
                    <svg className="w-4/6 h-4/6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                        <path className="fill-footer" d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"></path>
                    </svg>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer