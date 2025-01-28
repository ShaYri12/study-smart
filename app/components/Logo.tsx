import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-start">
      <div className="flex items-center">
        <div className="relative w-10 h-10">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <path
              d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
              className="fill-blue-600"
            />
          </svg>
        </div>
        <h1 className="ml-2 text-2xl font-bold">
          Study<span className="text-orange-500">Smart</span>
        </h1>
      </div>
      <span className="text-sm text-gray-600 mt-0.5">
        Touch your medical dream!
      </span>
    </Link>
  );
}
