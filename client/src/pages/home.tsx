import { useState } from "react";
import { EligibilityForm } from "@/components/EligibilityForm";
import { ResultsTable, EligibleUniversity } from "@/components/ResultsTable";
import { LoadingSpinner } from "@/components/LoadingSpinner";
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
  const processEligibility = (data: FormData) => {
    setIsLoading(true);
    setShowResults(false);
    setFormData(data);

    // Simulate loading delay (1 second)
    setTimeout(() => {
      // Get all universities based on district and stream
      const districtData = universityData[data.district] || {};
      const streamData = districtData[data.stream] || [];
      
      // Show all universities with their margins (positive or negative)
      const universities = streamData
        .map(uni => ({
          ...uni,
          margin: (data.zScore - uni.cutoff).toFixed(4),
          isEligible: data.zScore >= uni.cutoff
        }))
        .sort((a, b) => Number(b.margin) - Number(a.margin)); // Sort by margin (highest first)
      
      setEligibleUniversities(universities);
      setIsLoading(false);

      setShowResults(universities.length > 0);
    }, 1000);
  };

  const handleReset = () => {
    setFormData(null);
    setEligibleUniversities([]);
    setShowResults(false);
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

        {showResults && formData && (
          <ResultsTable 
            universities={eligibleUniversities} 
            zScore={formData.zScore} 
          />
        )}

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Data sourced from University Grants Commission of Sri Lanka</p>
          <p className="mt-1">© 2023 University Eligibility Checker</p>
          <p className="mt-2">Developed by <a href="https://www.facebook.com/UvinduOnline/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Uvindu Rajapakshe</a></p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
