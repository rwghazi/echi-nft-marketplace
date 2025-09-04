import illustration from "../assets/bg-register.png";
import illustrationDesktop from "../assets/bg-register-desktop.png";

export default function Registration() {
  return (
    <div className="w-full h-210 md:h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 lg:h-screen">
        <img
          src={illustration}
          alt="Registration Illustration"
          className="w-full h-full object-cover block lg:hidden"
        />
        <img
          src={illustrationDesktop}
          alt="Registration Illustration"
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>

      {/* Right side: Form */}
      <div className="flex lg:w-1/2 p-6 lg:p-12 mt-8">
        <div className="max-w-md w-full">
          <h2 className="text-[38px] font-bold text-white text-center lg:text-left">
            Create Account
          </h2>
          <p className="text-white text-md text-center lg:text-left mt-2">
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </p>

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="bg-white w-full px-4 py-4 rounded-3xl text-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white w-full px-4 py-4 rounded-3xl text-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white w-full px-4 py-4 rounded-3xl text-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-white w-full px-4 py-4 rounded-3xl text-black focus:outline-none"
            />
            <button className="bg-primary text-white font-semibold px-6 py-4 rounded-3xl w-full hover:bg-primary/90 transition-colors">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
