// import React from "react";
// import Image from "next/image";

// function SingleTeacherPage() {
//   return (
//     <div className="flex-1 p-4 flex flex-col xl:flex-row">
//       {/* Left */}
//       <div className="w-full xl:w-2/3">
//         {/* Top */}
//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* User info card  */}
// <div className="bg-sky-200 py-6 px-4 rounded-md flex flex-1 gap-4">
// <div className="w-1/3">
//   <Image
// src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     alt=""
//     width={140}
//     height={140}
//     className="w-36 h-36 rounded-full object-cover"
//   />
// </div>

//             {/* User Info */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>

//               <p className="text-sm text-gray-500 mt-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
//                 illo.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 font-medium text-xs">
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/images/school-management-dashboard/blood.png"
//                     alt="blood image"
//                     width={14}
//                     height={14}
//                   />
//                   <span>A+</span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/images/school-management-dashboard/date.png"
//                     alt="calendar image"
//                     width={14}
//                     height={14}
//                   />
//                   <span>January 2026</span>
//                 </div>

//                 <div className="flex items-center gap-2 min-w-0">
//                   <Image
//                     src="/images/school-management-dashboard/mail.png"
//                     alt="mail image"
//                     width={14}
//                     height={14}
//                   />
//                   <span className="truncate">johndoe@example.com</span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/images/school-management-dashboard/phone.png"
//                     alt="phone image"
//                     width={14}
//                     height={14}
//                   />
//                   <span>+1 123 456 7890</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Small card with some info */}
//           <div className="flex flex-1 gap-6 w-full">
//             {/* Card 1 */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
//               <Image
//                 src="/images/school-management-dashboard/singleAttendance.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />

//               <div className="">
//                 <h1 className="text-xl font-semibold">90%</h1>
//                 <span className="text-sm text-gray-400">Attendance</span>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
//               <Image
//                 src="/images/school-management-dashboard/singleLesson.png"
//                 alt=""
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />

//               <div className="">
//                 <h1 className="text-xl font-semibold">85</h1>
//                 <span className="text-sm text-gray-400">Assignments</span>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
//               <Image
//                 src="/images/school-management-dashboard/singleClass.png"
//                 alt=""
//                 width={20}
//                 height={20}
//                 className="w-6 h-6"
//               />

//               <div className="">
//                 <h1 className="text-xl font-semibold">12</h1>
//                 <span className="text-sm text-gray-400">Total Classes</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="">Schedule</div>
//       </div>

//       {/* Right */}
//       <div className="w-full xl:w-1/3">R</div>
//     </div>
//   );
// }

// export default SingleTeacherPage;
// ================

// import React from "react";
// import Image from "next/image";

// function SingleTeacherPage() {
//   return (
//     <div className="flex flex-col xl:flex-row gap-6 p-4 md:p-6 w-full">
//       {/* Left */}
//       <div className="w-full xl:w-2/3 space-y-6">
//         {/* Top */}
//         <div className="flex flex-col gap-6">
//           {/* User Info Card */}
//           <div className="bg-sky-200 rounded-md p-4 md:p-6 flex flex-col md:flex-row items-start gap-6">
//             {/* <div className="bg-sky-200 py-6 px-4 rounded-md flex flex-1 gap-4"> */}
//             {/* Profile Image */}
//             {/* <div className="shrink-0">
//               <Image
//                 src="/images/school-management-dashboard/teacher.png"
//                 alt="Teacher"
//                 width={120}
//                 height={120}
//                 className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
//               />
//             </div> */}
//             <div className="w-1/3">
//               <Image
//                 src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                 alt=""
//                 width={140}
//                 height={140}
//                 className="w-36 h-36 rounded-full object-cover"
//               />
//             </div>

//             {/* User Info */}
//             <div className="flex-1 min-w-0">
//               <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>

//               <p className="text-sm text-gray-500 mt-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
//                 illo.
//               </p>

//               {/* Teacher Details */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 font-medium text-xs">
//                 {/* Blood Group */}
//                 <div className="flex items-center gap-2 min-w-0">
//                   <Image
//                     src="/images/school-management-dashboard/blood.png"
//                     alt="Blood group"
//                     width={14}
//                     height={14}
//                     className="shrink-0"
//                   />
//                   <span>A+</span>
//                 </div>

//                 {/* Date */}
//                 <div className="flex items-center gap-2 min-w-0">
//                   <Image
//                     src="/images/school-management-dashboard/date.png"
//                     alt="Calendar"
//                     width={14}
//                     height={14}
//                     className="shrink-0"
//                   />
//                   <span>January 2026</span>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-center gap-2 min-w-0">
//                   <Image
//                     src="/images/school-management-dashboard/mail.png"
//                     alt="Email"
//                     width={14}
//                     height={14}
//                     className="shrink-0"
//                   />
//                   <span className="truncate">johndoe@example.com</span>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-center gap-2 min-w-0">
//                   <Image
//                     src="/images/school-management-dashboard/phone.png"
//                     alt="Phone"
//                     width={14}
//                     height={14}
//                     className="shrink-0"
//                   />
//                   <span className="truncate">+1 123 456 7890</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Small Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//             {/* Card 1 */}
//             <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full min-h-[80px]">
//               <Image
//                 src="/images/school-management-dashboard/singleAttendance.png"
//                 alt="Attendance"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6 shrink-0"
//               />

//               <div className="min-w-0">
//                 <h1 className="text-xl font-semibold">90%</h1>
//                 <span className="text-sm text-gray-400">Attendance</span>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full min-h-[80px]">
//               <Image
//                 src="/images/school-management-dashboard/singleLesson.png"
//                 alt="Assignments"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6 shrink-0"
//               />

//               <div className="min-w-0">
//                 <h1 className="text-xl font-semibold">85</h1>
//                 <span className="text-sm text-gray-400">Assignments</span>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full min-h-[80px]">
//               <Image
//                 src="/images/school-management-dashboard/singleClass.png"
//                 alt="Total Classes"
//                 width={20}
//                 height={20}
//                 className="w-6 h-6 shrink-0"
//               />

//               <div className="min-w-0">
//                 <h1 className="text-xl font-semibold">12</h1>
//                 <span className="text-sm text-gray-400">Total Classes</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="bg-white rounded-md p-4 md:p-6 min-h-[300px]">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedule</h2>

//           <div className="text-sm text-gray-400">
//             Schedule content goes here.
//           </div>
//         </div>
//       </div>

//       {/* Right */}
//       <div className="w-full xl:w-1/3">
//         <div className="bg-white rounded-md p-4 md:p-6 min-h-[300px]">
//           <h2 className="text-lg font-semibold text-gray-800">R</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleTeacherPage;

// ====================
import React from "react";
import Image from "next/image";

function SingleTeacherPage() {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
      {/* Left */}
      <div className="w-full xl:w-2/3 space-y-4 md:space-y-6 min-w-0">
        {/* Top */}
        <div className="w-full space-y-4">
          {/* User Info Card */}
          <div className="bg-sky-200 rounded-md p-3 sm:p-4 md:p-6 w-full">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Profile Image */}
              <div className="shrink-0">
                <Image
                  // src="/images/school-management-dashboard/teacher.png"
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Teacher"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
                />
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0 w-full">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  John Doe
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, illo.
                </p>

                {/* Teacher Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-5 font-medium text-xs">
                  {/* Blood Group */}
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src="/images/school-management-dashboard/blood.png"
                      alt="Blood group"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    <span>A+</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src="/images/school-management-dashboard/date.png"
                      alt="Calendar"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    <span className="truncate">January 2026</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src="/images/school-management-dashboard/mail.png"
                      alt="Email"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    <span className="truncate">johndoe@example.com</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2 min-w-0">
                    <Image
                      src="/images/school-management-dashboard/phone.png"
                      alt="Phone"
                      width={14}
                      height={14}
                      className="shrink-0"
                    />
                    <span className="truncate">+1 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
            {/* Card 1 */}
            <div className="bg-white p-3 sm:p-4 rounded-md flex items-center gap-3 sm:gap-4 w-full min-w-0 min-h-[72px] sm:min-h-[80px]">
              <Image
                src="/images/school-management-dashboard/singleAttendance.png"
                alt="Attendance"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
              />

              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold">90%</h1>

                <span className="text-xs sm:text-sm text-gray-400">
                  Attendance
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-3 sm:p-4 rounded-md flex items-center gap-3 sm:gap-4 w-full min-w-0 min-h-[72px] sm:min-h-[80px]">
              <Image
                src="/images/school-management-dashboard/singleLesson.png"
                alt="Assignments"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
              />

              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold">85</h1>

                <span className="text-xs sm:text-sm text-gray-400">
                  Assignments
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-3 sm:p-4 rounded-md flex items-center gap-3 sm:gap-4 w-full min-w-0 min-h-[72px] sm:min-h-[80px]">
              <Image
                src="/images/school-management-dashboard/singleClass.png"
                alt="Total Classes"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
              />

              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold">12</h1>

                <span className="text-xs sm:text-sm text-gray-400">
                  Total Classes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-white rounded-md p-3 sm:p-4 md:p-6 min-h-[300px] w-full">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Teacher&#39;s Schedule
          </h2>

          <div className="text-xs sm:text-sm text-gray-400">
            Schedule content goes here.
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3 min-w-0">
        <div className="bg-white rounded-md p-3 sm:p-4 md:p-6 min-h-[300px] w-full">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            R
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SingleTeacherPage;
