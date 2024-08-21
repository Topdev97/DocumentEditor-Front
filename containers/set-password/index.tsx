'use client';

import { FC, useEffect } from 'react';
interface IResetPasswordProps { }
import React, { useState } from 'react';
import forgetPasswordBg from '@/public/imgs/forget-password.png'
import Image from 'next/image';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Link from 'next/link';
import { confirmForgetPasswordLink, upgradePassword } from '@/services/api';
import { PATH, STORAGE_KEY } from '@/constants';
import BotAlert from '@/components/BotAlert';
import Logo_Image from '@/public/logo/logo.png';

const SetPassword: FC<IResetPasswordProps> = (props: any) => {
    const [email, setEmail] = useState('');
    const [lengthError, setLengthError] = useState<boolean>(false);
    const [characterError, setCharacterError] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetPassword, setResetPassword] = useState<boolean>(false);

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [variant, setVariant] = useState('');
    const handleSetPassword = async () => {
        if (confirmPassword == password) {
            if (lengthError == true && characterError == true) {
                const params = new URLSearchParams(window.location.search);
                const userIdFromUrl: any = params.get('userid');
                const data = await upgradePassword(userIdFromUrl, password);
                if (data) {
                    setResetPassword(true);
                    setAlertMessage('Successfully Password Reset!');
                    setVariant('success');
                    setAlert(true);
                    setTimeout(() => {
                        window.location.href = PATH.LOGIN;
                    }, 2000)
                }
            }
        } else {
            setAlertMessage('Passwords are not same!');
            setVariant('error');
            setAlert(true);
        }
    }
    const init = async (userid: any, secret: any) => {
        const data = await confirmForgetPasswordLink(userid, secret);
        console.log(data.message, 'data');
        if (data.message == "incorrect") {
            window.location.href = PATH.LOGIN;
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const userIdFromUrl = params.get('userid');
            const secretFromUrl = params.get('secret');
            if (secretFromUrl && userIdFromUrl) {
                init(userIdFromUrl, secretFromUrl)
            }
        }
    }, [])
    useEffect(() => {
        if (password.length >= 8) {
            setLengthError(true);
        } else {
            setLengthError(false);
        }

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (specialCharRegex.test(password)) {
            setCharacterError(true)
        } else {
            setCharacterError(false)
        }
    }, [password])
    return (
        <div>
            <div className="flex w-full">
                <div className="xl:w-2/5 w-full relative bg-[#151E36] min-h-[100vh]">
                    <div className="sm:p-14 p-5">
                    <Link href='/'><Image src={Logo_Image} width={166} height={45} alt="logo_file" /></Link>
                        <div className="xl:w-[75%] w-full">
                            <div className="text-left pt-10 pb-5 xl:mt-10 mt-0">
                                <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-12">Set </h1>
                                <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-10">Password </h1>
                                <p className="text-white text-[16px] mt-3">We'll check if you have an account and help you create one if you don't.</p>
                            </div>
                            <div className='text-left'>
                                <Input className="mt-5 w-full mx-auto" type="password" label="Password" name="password-input" placeholder="••••••••" value={password} setValue={setPassword} />
                            </div>
                            <div className='text-left mt-5'>
                                <Input className="mt-5 w-full mx-auto" type="password" label="Confirm password" name="confirm-password-input" placeholder="••••••••" value={confirmPassword} setValue={setConfirmPassword} />
                            </div>
                            <div className='w-full mx-auto mt-5'>
                                <div className='flex justify-start items-center gap-1'>
                                    <div>
                                        {
                                            lengthError ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#7F56D9" />
                                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#D0D5DD" />
                                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        }
                                    </div>
                                    <div className='text-white'>
                                        Must be at least 8 characters
                                    </div>
                                </div>
                                <div className='flex justify-start items-center gap-1 mt-1'>
                                    <div>
                                        {
                                            characterError ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#7F56D9" />
                                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#D0D5DD" />
                                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        }
                                    </div>
                                    <div className='text-white'>
                                        Must contain one special character
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button label="Reset password" className="w-full mt-6" onClick={() => handleSetPassword()} />
                            </div>
                            <div className="flex items-center w-full justify-center mt-5 gap-3">
                                <Link href='/sign-in' className="block"><p className="text-[#5596E5] w-full text-center">Back to login</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:block hidden w-3/5 bg-gradient-to-r from-[#569BE7] to-[#4A60D5] h-screen">

                </div>
                <BotAlert message={alertMessage} show={alert} setShow={setAlert} variant={variant} />
            </div>
        </div>
    );
};

export default SetPassword;
