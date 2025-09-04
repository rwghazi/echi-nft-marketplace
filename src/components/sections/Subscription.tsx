import illustration from '../../assets/astro.png';
import { Button } from '../ui';

export default function Subscription() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <img
            src={illustration}
            alt="Subscription Illustration"
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-[36px] md:text-3xl font-bold text-white">
            Join our weekly digest
          </h2>
          <p className="text-white text-md mt-1">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white w-full sm:flex-1 px-4 py-4 rounded-3xl text-black focus:outline-none"
            />
            <Button variant="primary" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
