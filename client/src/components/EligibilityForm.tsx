import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FormData } from "@/pages/home";
import { ChevronDown } from "lucide-react";

interface EligibilityFormProps {
  onSubmit: (data: FormData) => void;
  onReset: () => void;
}

export const EligibilityForm = ({ onSubmit, onReset }: EligibilityFormProps) => {
  const [fullName, setFullName] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [stream, setStream] = useState<string>("");
  const [zScore, setZScore] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const districts = [
    "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle", 
    "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu", 
    "Batticaloa", "Ampara", "Trincomalee", "Kurunegala", "Puttalam", "Anuradhapura", 
    "Polonnaruwa", "Badulla", "Monaragala", "Ratnapura", "Kegalle"
  ];

  const streams = [
    { value: "Arts", label: "Arts" },
    { value: "Bio", label: "Biological Science" },
    { value: "Maths", label: "Physical Science" },
    { value: "Commerce", label: "Commerce" },
    { value: "Tech", label: "Technology" }
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    
    if (!district) {
      newErrors.district = "District is required";
    }
    
    if (!stream) {
      newErrors.stream = "Stream is required";
    }
    
    if (!zScore) {
      newErrors.zScore = "Z-Score is required";
    } else {
      const score = parseFloat(zScore);
      if (isNaN(score)) {
        newErrors.zScore = "Z-Score must be a valid number";
      } else if (score < 0) {
        newErrors.zScore = "Z-Score cannot be negative";
      } else if (score > 3) {
        newErrors.zScore = "Z-Score cannot exceed 3.0000";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        fullName,
        district,
        stream,
        zScore: parseFloat(zScore)
      });
    }
  };

  const handleReset = () => {
    setFullName("");
    setDistrict("");
    setStream("");
    setZScore("");
    setErrors({});
    onReset();
  };

  const handleZScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    // Only allow up to 4 decimal places
    const regex = /^\d*\.?\d{0,4}$/;
    
    if (regex.test(value) || value === "") {
      const numValue = parseFloat(value);
      
      if (isNaN(numValue)) {
        setZScore(value);
      } else if (numValue > 3) {
        setZScore("3.0000");
      } else if (numValue < 0) {
        setZScore("0.0000");
      } else {
        setZScore(value);
      }
    }
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className={errors.fullName ? "text-red-500" : ""}>
              Full Name
            </Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={errors.fullName ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="district" className={errors.district ? "text-red-500" : ""}>
              District
            </Label>
            <Select
              value={district}
              onValueChange={setDistrict}
            >
              <SelectTrigger className={errors.district ? "border-red-500 focus:ring-red-500" : ""}>
                <SelectValue placeholder="Select your district" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.district && (
              <p className="text-red-500 text-sm mt-1">{errors.district}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="stream" className={errors.stream ? "text-red-500" : ""}>
              Stream
            </Label>
            <Select
              value={stream}
              onValueChange={setStream}
            >
              <SelectTrigger className={errors.stream ? "border-red-500 focus:ring-red-500" : ""}>
                <SelectValue placeholder="Select your stream" />
              </SelectTrigger>
              <SelectContent>
                {streams.map((s) => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.stream && (
              <p className="text-red-500 text-sm mt-1">{errors.stream}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zScore" className={errors.zScore ? "text-red-500" : ""}>
              Z-Score
            </Label>
            <Input
              id="zScore"
              type="number"
              step="0.0001"
              min="0"
              max="3.0000"
              value={zScore}
              onChange={handleZScoreChange}
              className={errors.zScore ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.zScore && (
              <p className="text-red-500 text-sm mt-1">{errors.zScore}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button type="submit" className="flex-1 bg-[#1a73e8] hover:bg-[#1765cc]">
              Check Eligibility
            </Button>
            <Button 
              type="button" 
              onClick={handleReset} 
              variant="outline" 
              className="flex-1"
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
