import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

export const NoResultsMessage = () => {
  return (
    <Card className="animate-fadeIn text-center">
      <CardContent className="pt-6 flex flex-col items-center">
        <InfoIcon className="h-12 w-12 text-gray-400 mb-4" />
        <h2 className="text-xl font-medium mb-2">No Eligible Universities</h2>
        <p className="text-gray-500">
          Based on your Z-Score, district, and stream, you don't meet the cutoff requirements 
          for any university programs in our database.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Try adjusting your Z-Score or checking a different district or stream.
        </p>
      </CardContent>
    </Card>
  );
};
