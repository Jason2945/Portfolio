import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import './NavBar.css';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import GoogleIcon from '../../assets/icons/google_icon.svg?react';
import LinkedInIcon from '../../assets/icons/linkedin_icon.svg?react';
import GmailIcon from '../../assets/icons/gmail_icon.svg?react';
import GithubIcon from '../../assets/icons/github_icon.svg?react';

const NavBar = () => {
  // Check if the login box is open or not. Default state is closed
  const [LoginOpen, setLoginOpen] = useState(false);

  // Google login success and failure handlers
  const handleLoginSuccess = (response) => {
    console.log("Google login success:", response);
    // You can send the `response.credential` to your backend for authentication
  };

  const handleLoginFailure = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <div className="NavBar_Component">
        <div className="LeftSide_Stuff">
            <button>Home</button>
            <button>Projects</button>
            <button>About Me</button>
        </div>

        <div className="RightSide_Stuff">
            {/* When GoogleIcon is clicked, Login is opened. When closed out, Login is closed */}
            <GoogleIcon className="Icons" onClick={() => setLoginOpen(true)}/>
            <LinkedInIcon className="Icons"/>
            <GithubIcon className="Icons"/>
            <GmailIcon className="Icons"/>

            {/* Dialog for login */}
            <Dialog open={LoginOpen} onClose={() => setLoginOpen(false)}>

            {/* Dialog Panel */}
            <DialogPanel className="DialogPanel">
                {/* Google Login Button */}
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLECLIENTID}>
                    <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    />
                </GoogleOAuthProvider>
            </DialogPanel>
            </Dialog>
        </div>

      
    </div>
  );
};

export default NavBar;
