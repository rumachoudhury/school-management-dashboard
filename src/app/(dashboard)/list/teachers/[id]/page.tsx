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
          <div className="bg-sky-200 py-6 px-4 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>

              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                illo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 font-medium text-xs">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/blood.png"
                    alt="blood image"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/date.png"
                    alt="calendar image"
                    width={14}
                    height={14}
                  />
                  <span>January 2026</span>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <Image
                    src="/images/school-management-dashboard/mail.png"
                    alt="mail image"
                    width={14}
                    height={14}
                  />
                  <span className="truncate">johndoe@example.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/images/school-management-dashboard/phone.png"
                    alt="phone image"
                    width={14}
                    height={14}
                  />
                  <span>+1 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small card with some info */}
          <div className="flex flex-1">
            {/* Card */}
            <div className="">
              <Image
                src="/images/school-management-dashboard/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />

              <div className="">
                <h1>90%</h1>
                <span className="">Attendance</span>
              </div>
            </div>
          </div>
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
