import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface EligibleUniversity {
  university: string;
  course: string;
  cutoff: number;
  margin: string;
  isEligible: boolean;
}

interface ResultsTableProps {
  universities: EligibleUniversity[];
  zScore: number;
}

export const ResultsTable = ({ universities, zScore }: ResultsTableProps) => {
  // Count eligible universities
  const eligibleCount = universities.filter(uni => uni.isEligible).length;

  return (
    <section className="animate-fadeIn">
      <Card>
        <CardHeader className="pb-3">
          <h2 className="text-xl font-medium">University Eligibility Results</h2>
          <p className="text-sm text-gray-500 mt-1">
            Based on your Z-Score of <span className="font-medium">{zScore.toFixed(4)}</span>, 
            you are eligible for <span className="font-medium text-[#34a853]">{eligibleCount}</span> out of {universities.length} university programs.
          </p>
        </CardHeader>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>University</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Cut-off Z-Score</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {universities.map((uni, index) => {
                const marginValue = parseFloat(uni.margin);
                const isEligible = uni.isEligible;
                
                return (
                  <TableRow key={index} className={isEligible ? "" : "bg-gray-50"}>
                    <TableCell className="font-medium">{uni.university}</TableCell>
                    <TableCell>{uni.course}</TableCell>
                    <TableCell>{uni.cutoff.toFixed(4)}</TableCell>
                    <TableCell>
                      {isEligible ? (
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-[#34a853]">
                          Eligible (+{uni.margin})
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-600">
                          Not Eligible ({uni.margin})
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        
        <CardFooter className="bg-gray-50 border-t border-gray-200 mt-0">
          <p className="text-sm text-gray-500">
            Note: This is an eligibility estimation based on previous year's data. Official selections may vary.
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
