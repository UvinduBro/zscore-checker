import { useState } from "react";
import { EligibilityForm } from "@/components/EligibilityForm";
import { ResultsTable, EligibleUniversity } from "@/components/ResultsTable";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { NoResultsMessage } from "@/components/NoResultsMessage";
import { universityData } from "@/lib/universityData";

export type FormData = {
  fullName: string;
  district: string;
  stream: string;
  zScore: number;
};

const Home = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [eligibleUniversities, setEligibleUniversities] = useState<EligibleUniversity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  const processEligibility = (data: FormData) => {
    setIsLoading(true);
    setShowResults(false);
    setShowNoResults(false);
    setFormData(data);

    // Simulate loading delay (1 second)
    setTimeout(() => {
      // Get the eligible universities based on district, stream, and Z-Score
      const districtData = universityData[data.district] || {};
      const streamData = districtData[data.stream] || [];
      
      // Filter eligible universities
      const eligible = streamData
        .filter(uni => data.zScore >= uni.cutoff)
        .map(uni => ({
          ...uni,
          margin: (data.zScore - uni.cutoff).toFixed(4)
        }))
        .sort((a, b) => b.cutoff - a.cutoff);
      
      setEligibleUniversities(eligible);
      setIsLoading(false);

      if (eligible.length === 0) {
        setShowNoResults(true);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const handleReset = () => {
    setFormData(null);
    setEligibleUniversities([]);
    setShowResults(false);
    setShowNoResults(false);
  };

  return (
    <div className="bg-background min-h-screen font-sans text-textPrimary">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold mb-2">Sri Lanka University Eligibility Checker</h1>
          <p className="text-gray-600">Enter your details to find out which universities you are eligible for based on your Z-Score</p>
        </header>

        <EligibilityForm onSubmit={processEligibility} onReset={handleReset} />

        {isLoading && <LoadingSpinner />}
        
        {showNoResults && <NoResultsMessage />}

        {showResults && formData && (
          <ResultsTable 
            universities={eligibleUniversities} 
            zScore={formData.zScore} 
          />
        )}

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Data sourced from University Grants Commission of Sri Lanka</p>
          <p className="mt-1">© 2023 University Eligibility Checker</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
