import { motion } from "framer-motion";
import { ProfilePic, GhostPic, ButterflyPic } from "../assets/data";
import { Fragment, useState } from "react"
import "./css/ghost.css"
import "./css/butterfly.css"
import "./css/button.css"
import { FaFacebook, FaInstagram, FaDiscord, FaTiktok, FaGithub } from "react-icons/fa"
import config from "../../package.json"
import { Link } from "react-router-dom"
import { Dialog, Transition } from '@headlessui/react'
import clipboard from 'clipboard-copy';

export default function Profile() {
    const [ghostComeComplete, setGhostComeComplete] = useState(false);
    const [butterflyComeComplete, setButterflyComeComplete] = useState(false);

    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        clipboard("KraSuang#6095");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    function onClose() {
        setCopied(false);
    }

    const Contact = [
        { icon: <FaFacebook />, title: "Thanit Meehatchai", url: "https://www.facebook.com/bak.krasuang/", delay_time: 1.7 },
        { icon: <FaInstagram />, title: "_krasuang", url: "https://www.instagram.com/_krasuang/", delay_time: 1.9 },
        { icon: <FaTiktok />, title: "_krasuang", url: "https://www.tiktok.com/@_krasuang", delay_time: 2.1 },
        { icon: <FaGithub />, title: "TKM_KraSuang", url: "https://github.com/KraSuang", delay_time: 2.3 },
    ]

    const handleGhostComeComplete = () => {
        setGhostComeComplete(true);
    };

    const handleButterflyComeComplete = () => {
        setButterflyComeComplete(true);
    };

    return (
        <>
            <motion.div
                className={`font-chakra-petch relative flex flex-col items-center px-4 py-10 bg-background w-full h-screen overflow-y-auto overflow-x-hidden`}
                transition={{ staggerChildren: 0.3 }}
            >
                <motion.div className={`flex w-full h-fit justify-center relative`}>
                    <motion.img
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                            duration: 0.0,
                            staggerChildren: 0.3
                        }}
                        className="w-[128px] h-[128px] rounded-full shadow-lg"
                        src={ProfilePic}
                    />
                    <motion.img
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ rotate: -14, scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 24,
                            duration: 0.0,
                            delay: 0.5
                        }}
                        className={`absolute top-6 w-[326px] h-[163px] ${ghostComeComplete ? 'ghost-animation' : ''}`}
                        src={GhostPic}
                        onAnimationComplete={handleGhostComeComplete} />
                    <motion.img
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ rotate: 60, scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 24,
                            duration: 0.0,
                            delay: 1.0
                        }}
                        className={`absolute top-0 w-[326px] h-[163px] ${butterflyComeComplete ? 'butterfly-animation' : ''}`}
                        onAnimationComplete={handleButterflyComeComplete}
                        src={ButterflyPic} />
                </motion.div>
                <motion.div
                    className={`flex flex-col w-full h-fit`}
                >
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className={`text-3xl text-white text-center pt-3 font-medium`}
                    >
                        TKM_KraSuang
                    </motion.p>
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className={`text-sm text-white text-center font-medium`}
                    >
                        {"<Cosplayer/>"}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-col w-full items-center px-4 py-4"
                    initial="hidden"
                    animate="visible"
                >
                    {Contact.map((contact) => (
                        <motion.a
                            className={`flex items-center w-full h-fit bg-button/70 hover:bg-button px-4 py-3 mb-4 rounded-2xl relative shadow-sm transition-colors duration-200`}
                            href={contact.url}
                            target="_BLANK"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: contact.delay_time, duration: 0.5 }}
                        >
                            <motion.i className="text-3xl text-white absolute">
                                {contact.icon}
                            </motion.i>
                            <motion.p
                                className="ml-4 text-lg text-white text-center w-full button-wrap-animation">
                                {contact.title}
                            </motion.p>
                        </motion.a>
                    ))}
                    <motion.button
                        className={`flex items-center w-full h-fit bg-button/70 hover:bg-button px-4 py-3 mb-4 rounded-2xl relative shadow-sm`}
                        onClick={handleCopyClick}
                        target="_BLANK"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                    >
                        <motion.i className="text-3xl text-white absolute">
                            <FaDiscord />
                        </motion.i>
                        <motion.p className="ml-4 text-lg text-white text-center w-full button-wrap-animation">
                            KraSuang#6095
                        </motion.p>
                    </motion.button>
                </motion.div>
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.7, duration: 0.5 }}
                    className="text-gray-200/50 font-thin -mt-4 text-xs"
                >
                    {`Contact Banner Version ${config.version}`}
                </motion.p>
                <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.9, duration: 0.5 }}
                    className="text-gray-200/50 font-thin text-xs">
                    {`By ${config.developer}`}
                </motion.p>
                <motion.div
                    className="flex"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.1, duration: 0.5 }}
                >
                    <Link to={"/developer-detail"} className="text-gray-200/50 font-thin text-xs">Detail</Link>
                </motion.div>

            </motion.div>


            <Transition appear show={copied} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-20" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-fit max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-center align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white"
                                    >
                                        Copied to clipboard
                                    </Dialog.Title>
                                    
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
