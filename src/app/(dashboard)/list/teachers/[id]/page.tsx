import React from "react";
import Image from "next/image";

function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User info card  */}
          <div className="bg-sky-400 py-6 px-4 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-2xl font-semibold">John Doe</h1>

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                illo.
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap font-medium text-xs">
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/blood.png"
                    alt="blood image"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/date.png"
                    alt="calendar image"
                    width={14}
                    height={14}
                  />
                  <span>January 2026</span>
                </div>

                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/mail.png"
                    alt="mail image"
                    width={14}
                    height={14}
                  />
                  <span>johndoe@example.com</span>
                </div>

                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/phone.png"
                    alt="phoneimage"
                    width={14}
                    height={14}
                  />
                  <span>+1 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small card with some info */}
          <div className="flex flex-1"></div>
        </div>

        {/* Bottom */}
        <div className="">Schedule</div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3">R</div>
    </div>
  );
}

export default SingleTeacherPage;
