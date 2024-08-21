'use client';

import { FC } from 'react';
interface IResetPasswordProps { }
import React, { useState } from 'react';
import forgetPasswordBg from '@/public/imgs/forget-password.png';
import Image from 'next/image';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Link from 'next/link';
import { forgotPassword } from '@/services/api';
import Logo_Image from '@/public/logo/logo.png'
import BotAlert from '@/components/BotAlert'

const ResetPassword: FC<IResetPasswordProps> = (props: any) => {
    const [email, setEmail] = useState('');
    const [sentMail, setSentMail] = useState<boolean>(false);
    const [emailError, setEmailError] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [variant, setVariant] = useState('');
    const init = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please input the valid mail!')
        } else {
            const data = await forgotPassword(email);
            if (data) {
                setEmailError('');
                setEmail('');
                setSentMail(true);
                setAlertMessage('Sent! Please check the mail inbox!');
                setVariant('success');
                setAlert(true);
            }
        }
    }
    const handleResetPassword = async () => {
        init();
    }
    return (
        <div className="flex w-full">
            <div className="xl:w-2/5 w-full relative bg-[#151E36] min-h-[100vh]">
                <div className="sm:p-14 p-5">
                    <Link href='/'><Image src={Logo_Image} width={166} height={45} alt="logo_file" /></Link>
                    <div className="xl:w-[75%] w-full">
                        <div className="text-left py-10 xl:mt-10 mt-0">
                            <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-12">Reset </h1>
                            <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-10">Password </h1>
                            <p className="text-white text-[16px] mt-3">We'll check if you have an account and help you create one if you don't.</p>
                        </div>
                        <Input className="" type="text" label="Email" name="email-input" placeholder="Enter you email" value={email} setValue={setEmail} />
                        {emailError != '' && (<p className="text-[red] mt-1">{emailError}</p>)}
                        <Button label="Reset Password" className="w-full mt-10" onClick={() => handleResetPassword()} />
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
    );
};

export default ResetPassword;
