import React from 'react';

function Certificates() {
  return (
    <div className="bg-black text-white py-20" id="certificates">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificate 1 */}
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_WGYG8ahvLRRZXsBbA_1754358765754_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
             Technology Job Simulation
            </h3>
            <p className="text-gray-400">Deloitte August 5th ,2025</p>
          </a>

          {/* Certificate 2 */}
          <a
            href="https://coursera.org/share/e44d84b0777ba907fe226f38b756aa80"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
             Getting Started with Git and GitHub
            </h3>
            <p className="text-gray-400">IBM July ,2025</p>
          </a>

          {/* Certificate 3 */}
          <a
            href="https://coursera.org/share/efd713713f2cbc3d2b95b9d9bda94da0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
              Python for Everybody
            </h3>
            <p className="text-gray-400">University of Michigan June 2025</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
