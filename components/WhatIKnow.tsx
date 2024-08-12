const WhatIKnow = () => {
  return (
    <div className="text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
    <div className="flex flex-col items-center p-10  mt-10  max-w-[900px] mx-auto">
      <h2 className="text-4xl font-bold mb-6">What I Know</h2>
        <div className="text-lg font-medium text-left">
          <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8  pl-5">
            <li className="mb-2">Next.js</li>
            <li className="mb-2">React / React Native</li>
            <li className="mb-2">TypeScript / JavaScript</li>
            <li className="mb-2">Node.js / Flask</li>
            <li className="mb-2">Python / Rust / Swift</li>
            <li className="mb-2">MySQL / Postgres / Firebase</li>
            <li className="mb-2">AWS / Google Cloud / Azure</li>
            <li className="mb-2">Three.js / WebGL / 3D Modeling</li>
            <li className="mb-2">CI/CD Pipelines / Docker</li>
            <li className="mb-2">D3.js / Data Visualization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIKnow;
