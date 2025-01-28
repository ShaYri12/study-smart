import { BiBook, BiMapPin } from "react-icons/bi";
import { FaClipboardList, FaUserSecret } from "react-icons/fa6";
import { FiMoreHorizontal } from "react-icons/fi";
import { SiTarget } from "react-icons/si";

const services = [
  {
    icon: BiBook,
    title: "Training",
    description:
      "Transform your knowledge with our expert-led courses and workshops, designed to prepare you for the USMLE and more.",
  },
  {
    icon: BiMapPin,
    title: "Consulting",
    description:
      "Get expert advice tailored to your needs, guiding you through every step of your educational and professional journey.",
  },
  {
    icon: FaUserSecret,
    title: "Study Groups",
    description:
      "Connect, collaborate, and conquer your goals with our dynamic peer study and research groups.",
  },
  {
    icon: FaClipboardList,
    title: "Coaching Services",
    description:
      "Excel in exams and interviews with personalized coaching from experienced professionals.",
  },
  {
    icon: SiTarget,
    title: "Professional Services",
    description:
      "Navigate your career path with our comprehensive support in project assistance, immigration services, and more.",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-[#1f2937] text-4xl md:text-5xl font-bold">
          Unlock Your Potential with StudySmart
        </h2>
        <p className="text-[#6b7280] text-xl">
          Tailored services to elevate your medical career
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {services.map((service, index) => (
          <div key={index} className="bg-white text-center p-8">
            {/* Icon Container */}
            <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg flex items-center justify-center mx-auto">
              <service.icon className="w-8 h-8 text-[#1a337e]" />
            </div>

            {/* Title */}
            <h3 className="text-[#1f2937] text-2xl font-bold mt-6 mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#6b7280] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}

        {/* Last Cell with More Icon */}
        <div className="bg-white p-8 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
            <FiMoreHorizontal className="w-8 h-8 text-[#1a337e]" />
          </div>
        </div>
      </div>
    </section>
  );
}
