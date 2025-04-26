export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
      <div className="w-12 h-12 border-4 border-[#1a73e8] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-500">Processing your eligibility...</p>
    </div>
  );
};
