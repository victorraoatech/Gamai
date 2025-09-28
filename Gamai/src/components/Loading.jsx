import  React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
             <div className="text-center">
                  <div
                      className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
                  <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
             </div>
        </div>
    );
}
export default Loading;