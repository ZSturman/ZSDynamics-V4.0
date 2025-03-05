"use client";

const RecentProjects = () => {
  return (
    <div className="max-w-[900px] px-10">
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
    subtitle: "Automating Scheduling with Pipelines & Gantt Charts",
    description:
      "A cross-platform production scheduling app that integrates directly with Google Sheets, leveraging a Rust-powered backend and a React frontend to manage and visualize production workflows. With automated Gantt chart generation, and secure authentication, it streamlines scheduling for manufacturers.",
    features: [
      "Cross-Platform Support: Runs on macOS, Windows, and Linux.",
      "Gantt Charts & Scheduling: Auto-generates interactive timelines for production jobs.",
      "Secure Authentication: Uses a Google Cloud service account key for controlled access.",
      "Google Sheets Integration: Uses Google Sheets as a backend, eliminating the need for an extra database.",
      "CI/CD Pipeline: Automated testing & deployment via GitHub Actions & Rust Cargo Build.",
      "Customizable UI & Workflow: Modify job details, filters, and Gantt behaviors to fit specific needs.",
    ],
    githubLink: "https://github.com/ZSturman/rods-sheets_v2",
    videoLink: "https://www.youtube.com/embed/mIDGjtzKFQ0",
  };

  return (
    <div className="p-6 md:p-8 lg:p-10 text-dark-shade flex flex-col items-center max-w-screen-lg mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-2">
        {projectContent.title}
      </h2>
      <h3 className="text-md sm:text-lg md:text-xl text-center mb-3">
        {projectContent.subtitle}
      </h3>

      {/* Description - Hidden on smaller screens */}
      <p className="text-sm md:text-base text-center mb-4 hidden md:block">
        {projectContent.description}
      </p>

      <div className="flex flex-row-reverse items-center justify-center">

        <div className="flex flex-col">

        {/* Features - Prioritized content */}
        <ul className="list-disc text-sm md:text-base ml-4 md:ml-6 mb-4 space-y-2">
          {projectContent.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="mt-4 md:mt-6 mx-auto">
        <a
          href={projectContent.githubLink}
          className="bg-blue-900 text-white text-sm md:text-base py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200"
        >
          Download Latest Release
        </a>
      </div>
          </div>

        {/* Video - Shown only on medium and larger screens */}
        <div className="w-full justify-center mt-4 md:mt-6 hidden md:flex">
          <iframe
            className="w-full max-w-[500px] h-[280px] md:max-w-[650px] md:h-[350px] lg:max-w-[700px] lg:h-[400px] rounded-lg shadow-lg"
            src={projectContent.videoLink}
            title="Production Scheduling App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
