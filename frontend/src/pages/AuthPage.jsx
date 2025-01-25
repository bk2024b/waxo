// src/pages/AuthPage.jsx
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleAuthMode = () => {
    setShowLogin((prevMode) => !prevMode);
  };

  return (
    <div>
      <Header />
      <main className="flex justify-center items-center h-[calc(100vh-8rem)]">
        {showLogin ? (
          <LoginForm onToggleMode={toggleAuthMode} />
        ) : (
          <RegisterForm onToggleMode={toggleAuthMode} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
