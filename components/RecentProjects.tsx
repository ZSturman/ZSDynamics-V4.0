"use client";

const RecentProjects = () => {

  return (
    <div className="max-w-[900px] px-10">
      <HowsMyEatingAd />
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

      <p className=" mb-4">
      {projectContent.description}
      </p>
      <p className=" mb-4 hidden">
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
      </p>


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
