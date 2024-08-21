"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import { createUser, verifyEmail } from "@/services/api";
import Logo_Image from '@/public/logo/logo.png'
import BotAlert from '@/components/BotAlert'

const SignUp = () => {
    const today = new Date;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [fullName, setFullName] = useState<string>('');
    const [emailError, setEmailError] = useState('');
    const [zipcodeError, setZipcodeError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [variant, setVariant] = useState('');

    const onClickSignUp = async (action: string) => {
        if (action == "credentials") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setEmailError('Please enter a valid email address.');
            } else {
                setEmailError('');
            }

            if (fullName == "") {
                setFullNameError('Please enter a valid name.');
            } else {
                setFullNameError('');
            }

            if (password.length < 8) {
                setPasswordError('Must be at least 8 characters.');
            } else {
                setPasswordError('');
            }

            if (zipcode == "") {
                setZipcodeError('Please enter a zipcode.');
            } else {
                setZipcodeError('');
            }

            if (emailError == "" && fullNameError == "" && passwordError == "" && zipcodeError == "") {
                const userInfo = await createUser(fullName, email, password, zipcode);
                if (userInfo) {
                    if (userInfo.message == 'exist') {
                        setAlertMessage('Exist User!');
                        setVariant('error');
                        setAlert(true);
                    } else {
                        setAlertMessage('Successfully Signed Up!');
                        setVariant('success');
                        setAlert(true);
                        setTimeout(() => {
                            window.location.href = '/sign-in';
                        }, 2000)
                    }
                }
            }
        }
    }

    return (
        <div className="flex w-full">
            <div className="xl:w-2/5 w-full relative bg-[#151E36] min-h-[100vh]">
                <div className="sm:p-14 p-5">
                    <Link href='/'><Image src={Logo_Image} width={166} height={45} alt="logo_file" /></Link>
                    <div className="xl:w-[75%] w-full ">
                        <div className="text-left py-10">
                            <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-12">Start making </h1>
                            <h1 className="text-white xl:text-[50px] text-[40px] font-[900] leading-10">Replies <span className="text-[#4A60D5]">Today</span> </h1>
                        </div>
                        <Input className="" type="text" label="Full Name" name="email-input" placeholder="Full Name" value={fullName} setValue={setFullName} />
                        {fullNameError != '' && (<p className="text-[red] mt-1">{fullNameError}</p>)}
                        <Input className="mt-5" type="mail" label="Email" name="password-input" placeholder="Email Adress" value={email} setValue={setEmail} />
                        {emailError != '' && (<p className="text-[red] mt-1">{emailError}</p>)}
                        <Input className="mt-5" type="password" label="Password" name="password-input" placeholder="Password" value={password} setValue={setPassword} />
                        {passwordError != '' && (<p className="text-[red] mt-1">{passwordError}</p>)}
                        <Input className="mt-5" type="text" label="Billing ZIP Code" name="password-input" placeholder="ZIP" value={zipcode} setValue={setZipcode} />
                        {zipcodeError != '' && (<p className="text-[red] mt-1">{zipcodeError}</p>)}
                        <Button label="Get Started" className="w-full mt-10" onClick={() => onClickSignUp("credentials")} />
                        <div className="flex items-center w-full justify-center mt-5 gap-3">
                            <p className="text-white">Already have an account?</p>  <Link href='/sign-in' className="block"><p className="text-[#5596E5] w-full text-center">Log In</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:block hidden w-3/5 bg-gradient-to-r from-[#569BE7] to-[#4A60D5] h-screen">
            </div>
            <BotAlert message={alertMessage} show={alert} setShow={setAlert} variant={variant} />
        </div>

    )
}


export default SignUp;