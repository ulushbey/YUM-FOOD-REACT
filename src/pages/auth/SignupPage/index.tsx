import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SIGN_UP } from "services/auth.service";

const SignupPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await SIGN_UP(
        nameRef.current?.value!,
        phoneRef.current?.value!,
        passwordRef.current?.value!,
        addressRef.current?.value!
      );
      toast.success("User Created!");
      navigate("/auth/signin");
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <div className="relative md:h-screen sm:py-16 py-36 flex items-center bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10">
      <div className="container">
        <div className="flex justify-center items-center lg:max-w-lg">
          <div className="flex flex-col h-full">
            <div className="shrink">
              <div className="pb-10">
                <a className="flex items-center" href="home.html">
                  <img
                    alt="logo"
                    className="h-12 flex dark:hidden"
                    src="assets/logo-dark-6dbab3e1.png"
                  />
                  <img
                    alt="logo"
                    className="h-12 hidden dark:flex"
                    src="assets/logo-light-35c89c2c.png"
                  />
                </a>
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-default-800 mb-2">
                  Register
                </h1>
                <p className="text-sm text-default-500 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod taempor.
                </p>
              </div>
              <form onSubmit={submit} className="pt-16">
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-default-900 mb-2"
                    htmlFor="FullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="block w-full rounded-full py-2.5 px-4 bg-white border border-default-200 focus:ring-transparent focus:border-default-200 dark:bg-default-50"
                    id="FullName"
                    placeholder="Enter your Name"
                    type="text"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-default-900 mb-2"
                    htmlFor="LoggingEmailAddress"
                  >
                    Phone
                  </label>
                  <input
                    className="block w-full rounded-full py-2.5 px-4 bg-white border border-default-200 focus:ring-transparent focus:border-default-200 dark:bg-default-50"
                    id="LoggingEmailAddress"
                    placeholder="Enter your phone number"
                    type="phone"
                    ref={phoneRef}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-default-900 mb-2"
                    htmlFor="LoggingAddress"
                  >
                    Address
                  </label>
                  <input
                    className="block w-full rounded-full py-2.5 px-4 bg-white border border-default-200 focus:ring-transparent focus:border-default-200 dark:bg-default-50"
                    id="LoggingAddress"
                    placeholder="Enter your phone address"
                    type="text"
                    ref={addressRef}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-default-900 mb-2"
                    htmlFor="form-password"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <input
                      className="form-password block w-full rounded-s-full py-2.5 px-4 bg-white border border-default-200 focus:ring-transparent focus:border-default-200 dark:bg-default-50"
                      id="form-password"
                      placeholder="Enter your password"
                      type={visible ? "text" : "password"}
                      ref={passwordRef}
                      required
                    />
                    <button
                      onClick={() => setVisible(!visible)}
                      type="button"
                      id="password-addon"
                      className="password-toggle inline-flex items-center justify-center py-2.5 px-4 border rounded-e-full bg-white -ms-px border-default-200 dark:bg-default-50"
                    >
                      {!visible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="eye-off"
                          className="lucide lucide-eye-off password-eye-off h-5 w-5 text-default-600"
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                          <line x1="2" x2="22" y1="2" y2="22"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="eye"
                          className="lucide lucide-eye password-eye-on h-5 w-5 text-default-600"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-base bg-primary text-white capitalize transition-all hover:bg-primary-500 w-full"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="grow flex items-end justify-center mt-16">
              <p className="text-default-700 text-center mt-auto">
                Already have an account ?
                <Link to="/auth/signin" className="text-primary ms-1">
                  <b>Login</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-1/2 -translate-y-1/3 start-0 end-0 w-full -z-10">
          <img
            className="w-full opacity-50 flex"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="absolute top-0 end-0 hidden xl:flex h-5/6">
          <img
            className="w-full z-0"
            src="https://coderthemes.com/yum/assets/auth-bg-d79436e2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
