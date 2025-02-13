"use client";

const RecentProjects = () => {

  return (
    <div className="max-w-[900px] px-10">
      {/* <HowsMyEatingAd /> */}
      <ProductionSchedulingAppAd />
    </div>
  );
};

export default RecentProjects;


const HowsMyEatingAd = () => {
  const projectContent = {
    title: "How's My Eating?",
    subtitle: "An App to Slow Down Binge Eating",
    description:
      "'How's My Eating?' is an iOS application designed to help users develop healthier eating habits by slowing down their eating pace. The app uses kinetic data collected from devices like AirPods to monitor your eating speed and provide real-time notifications if eating too fast.",
    features: [
      "Real-Time Notifications: Get instant alerts to slow down if you're eating too fast.",
      "Kinetic Data Monitoring: Analyze your eating habits using motion data from AirPods.",
      "Privacy-Friendly: Focuses on kinetic data, ensuring a less intrusive experience.",
    ],
  };

  return (
    <div className="p-10 text-dark-shade">
      <h2 className="text-3xl  mb-4 text-center">
        Recent:
        <strong className="font-bold">{projectContent.title}</strong>
      </h2>
      <h3 className="text-2xl   mb-4 text-center">{projectContent.subtitle}</h3>

      <div className="flex flex-row items-center justify-center">
        <a
          href="https://zacharysturman.hashnode.dev/hows-my-eating"
          className="bg-dark-shade text-light-shade px-2 py-1s m-1 rounded-md"
        >
          View Article
        </a>
      </div>

      <div className=" mb-4">
      {projectContent.description}
      </div>
      <div className=" mb-4 hidden">
        <strong>Key Features:</strong>
        <div className="list-disc ml-6">
          <ul>
            {projectContent.features.map((feature) => (
              <li key={feature} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="flex space-x-4">
        <a
          href="https://github.com/ZSturman/Hows-My-Eating"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Download
        </a>
        <a
          href="https://www.linkedin.com/in/zacharysturman/"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Connect
        </a>
      </div>
    </div>
  );
};



const ProductionSchedulingAppAd = () => {
  const projectContent = {
    title: "Production Scheduling Desktop App",
    subtitle: "Streamline Your Production Scheduling",
    description:
      "The Production Scheduling Desktop App leverages Google Sheets as a database to streamline production scheduling with cross-platform support, interactive Gantt charts, and role-based access control. This app simplifies production workflows with a minimal, extensible UI.",
    features: [
      "Cross-Platform Support: Works on macOS, Windows, and Linux.",
      "Google Sheets Integration: No extra database needed.",
      "Interactive Gantt Charts: Automatically generate visual timelines.",
      "Role-Based Access: Customizes access and views by roles.",
    ],
  };

  return (
    <div className="p-10 text-dark-shade">
      <h2 className="text-3xl mb-4 text-center">
        Recent:
        <strong className="font-bold"> {projectContent.title}</strong>
      </h2>
      <h3 className="text-2xl mb-4 text-center">{projectContent.subtitle}</h3>

      <div className=" mb-4">{projectContent.description}</div>

      <div className=" mb-4 hidden">
        <strong>Key Features:</strong>
        <div className="list-disc ml-6">
          <ul>
            {projectContent.features.map((feature) => (
              <li key={feature} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <a
          href="/macOS/rods-sheets_0.1.0_aarch64.dmg"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Download for macOS
        </a>
        <a
          href="https://github.com/ZSturman/rods-sheets_v2"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          GitHub (Windows & Linux)
        </a>
      </div>

      <p className="mt-4 text-sm text-white opacity-50">
        Note: Windows users may encounter warnings when installing the app as the application is not signed for Windows at this time.
      </p>
    </div>
  );
};