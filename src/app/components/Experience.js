import React from "react";

function Experience() {
  return (
    <section className=" py-10 px-6">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Experience
      </h1>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line for Timeline */}
        <div className="absolute top-10 left-2.5 w-[2px] bg-white h-[420px]"></div>

        {/* Experience Item 0 */}
        <div className="relative mb-12 pl-12 ">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-4 w-6 h-6 bg-purple-500 border-4 border-white rounded-full animate-bounce"></div>
          <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Sutradhar Pvt. Ltd.
              </h3>
              <span className="text-sm text-gray-400">Dec 2024 - Present</span>
            </div>
            <p className="mt-2 text-gray-400 italic">Jr. Software Developer</p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>
                Developed React forms for collecting defaulter details,
                including photo and ID proof uploads, with seamless API
                integration for data handling.
              </li>
              <li>
                Built an admin panel in React for viewing, editing, and managing
                defaulter and membership data, improving administrative control.
              </li>
              <li>
                Integrated APIs for efficient data flow between frontend forms
                and backend services, ensuring accurate data processing and
                submission.
              </li>
              <li>
                Created a book recommendation app using React Native, which
                provides personalized suggestions based on user goals and
                interests, with a backend developed in Express.js.
              </li>
              <li>
                Designed and developed the backend in Express.js to support the
                React Native mobile app, optimizing performance and scalability.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Item 1 */}
        <div className="relative mb-12 pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-4 w-6 h-6 bg-purple-600 border-2 border-white rounded-full"></div>
          <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Sutradhar Pvt. Ltd.
              </h3>
              <span className="text-sm text-gray-400">
                July 2024 - Dec 2024
              </span>
            </div>
            <p className="mt-2 text-gray-400 italic">
              Software Developer - Intern
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>
                Contributed to a live project for the Maharashtra Federation,
                built and maintained responsive dashboards and components.
              </li>
              <li>
                Developed a multi-user login system with separate dashboards for
                different user types (federation and society logins).
              </li>
              <li>
                Built dynamic, responsive UIs in ReactJS using state management,
                React Hooks, Context API, and React Router for efficient app
                functionality.
              </li>
              <li>
                Integrated RESTful APIs using Axios and Fetch API for seamless
                data fetching. Designed and implemented APIs for the feedback
                form project, utilizing the Django REST framework.
              </li>
              <li>
                Executed raw SQL queries in MySQL for optimized data retrieval.
              </li>
              <li>Utilized Postman for API testing and documentation.</li>
            </ul>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="relative mb-12 pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-4 w-6 h-6 bg-white border-2 border-white rounded-full"></div>
          <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Codera Embedded Systems and Softwares Pvt. Ltd.
              </h3>
              <span className="text-sm text-gray-400">Aug 2023 - Mar 2024</span>
            </div>
            <p className="mt-2 text-gray-400 italic">
              Full Stack Developer - Intern
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>
                Developed an Enterprise Resource Planning system using Python
                and Django.
              </li>
              <li>
                Integrated AWS services such as AWS EC2, AWS RDS, and S3 bucket
                for seamless data processing.
              </li>
              <li>
                Implemented user authentication and authorization using AWS IAM.
              </li>
              <li>
                Conducted thorough testing and debugging to ensure system
                reliability.
              </li>
              <li>
                Collaborated with a team to design and implement the system
                architecture.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
