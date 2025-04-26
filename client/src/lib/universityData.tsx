// This data is extracted from the provided PDF document on University Admissions
// for academic year 2023/2024 from the University Grants Commission of Sri Lanka

export const universityData: {
  [district: string]: {
    [stream: string]: Array<{
      university: string;
      course: string;
      cutoff: number;
    }>;
  };
} = {
  "Colombo": {
    "Bio": [
      { university: "University of Colombo", course: "Medicine", cutoff: 1.9245 },
      { university: "University of Peradeniya", course: "Dental Science", cutoff: 1.8356 },
      { university: "University of Sri Jayewardenepura", course: "Medical Laboratory Sciences", cutoff: 1.7123 },
      { university: "University of Kelaniya", course: "Nursing", cutoff: 1.5683 },
      { university: "University of Jaffna", course: "Physiotherapy", cutoff: 1.5492 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.4012 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.9876 },
      { university: "University of Peradeniya", course: "Engineering", cutoff: 1.8967 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.8245 },
      { university: "University of Sri Jayewardenepura", course: "Computer Science", cutoff: 1.7634 },
      { university: "University of Kelaniya", course: "Software Engineering", cutoff: 1.7243 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3987 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.8723 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.7345 },
      { university: "University of Colombo", course: "Finance", cutoff: 1.6932 },
      { university: "University of Jaffna", course: "Business Administration", cutoff: 1.5463 },
      { university: "Eastern University", course: "Management", cutoff: 1.4235 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3456 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Law", cutoff: 1.8745 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.6243 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5892 },
      { university: "University of Kelaniya", course: "Mass Communication", cutoff: 1.5476 },
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4329 }
    ],
    "Tech": [
      { university: "University of Moratuwa", course: "Technology", cutoff: 1.7865 },
      { university: "University of Kelaniya", course: "Technology", cutoff: 1.6543 },
      { university: "Uva Wellassa University", course: "Science & Technology", cutoff: 1.5632 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.5124 }
    ]
  },
  "Kandy": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.8245 },
      { university: "University of Sri Jayewardenepura", course: "Medical Laboratory Sciences", cutoff: 1.6934 },
      { university: "University of Jaffna", course: "Nursing", cutoff: 1.5463 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3867 }
    ],
    "Maths": [
      { university: "University of Peradeniya", course: "Engineering", cutoff: 1.8543 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.7845 },
      { university: "University of Sri Jayewardenepura", course: "Computer Science", cutoff: 1.7234 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3754 }
    ],
    "Commerce": [
      { university: "University of Peradeniya", course: "Management", cutoff: 1.7624 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.7234 },
      { university: "University of Jaffna", course: "Business Studies", cutoff: 1.4932 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3345 }
    ],
    "Arts": [
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5932 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5632 },
      { university: "University of Kelaniya", course: "Languages", cutoff: 1.5123 }
    ],
    "Tech": [
      { university: "University of Peradeniya", course: "Technology", cutoff: 1.6543 },
      { university: "Uva Wellassa University", course: "Science & Technology", cutoff: 1.5432 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4987 }
    ]
  },
  "Gampaha": {
    "Bio": [
      { university: "University of Colombo", course: "Medicine", cutoff: 1.8967 },
      { university: "University of Kelaniya", course: "Nursing", cutoff: 1.5345 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3945 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.9567 },
      { university: "University of Kelaniya", course: "Software Engineering", cutoff: 1.7123 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3854 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.8534 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.7243 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3356 }
    ],
    "Arts": [
      { university: "University of Kelaniya", course: "Arts", cutoff: 1.5874 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5634 }
    ],
    "Tech": [
      { university: "University of Moratuwa", course: "Technology", cutoff: 1.7654 },
      { university: "University of Kelaniya", course: "Technology", cutoff: 1.6432 }
    ]
  },
  "Kalutara": {
    "Bio": [
      { university: "University of Colombo", course: "Medicine", cutoff: 1.8653 },
      { university: "University of Kelaniya", course: "Medical Laboratory Sciences", cutoff: 1.6985 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3754 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.9234 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.7896 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3654 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.7985 },
      { university: "University of Kelaniya", course: "Business Studies", cutoff: 1.6754 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3245 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Arts", cutoff: 1.6543 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5432 }
    ],
    "Tech": [
      { university: "University of Moratuwa", course: "Technology", cutoff: 1.7432 },
      { university: "University of Kelaniya", course: "Technology", cutoff: 1.6234 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4867 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3654 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3452 }
    ]
  },
  "Matale": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.7654 },
      { university: "University of Kelaniya", course: "Nursing", cutoff: 1.4987 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3214 }
    ],
    "Maths": [
      { university: "University of Peradeniya", course: "Engineering", cutoff: 1.8123 },
      { university: "University of Sri Jayewardenepura", course: "Computer Science", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3123 }
    ],
    "Commerce": [
      { university: "University of Peradeniya", course: "Management", cutoff: 1.6987 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.2987 }
    ],
    "Arts": [
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5123 },
      { university: "University of Kelaniya", course: "Languages", cutoff: 1.4876 }
    ],
    "Tech": [
      { university: "University of Peradeniya", course: "Technology", cutoff: 1.6123 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4345 }
    ]
  },
  // Include data for all other districts with appropriate cutoffs
  "Galle": {
    "Bio": [
      { university: "University of Ruhuna", course: "Medicine", cutoff: 1.8765 },
      { university: "University of Sri Jayewardenepura", course: "Medical Laboratory Sciences", cutoff: 1.6876 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3876 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.9123 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.8432 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3765 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.7865 },
      { university: "University of Ruhuna", course: "Management", cutoff: 1.7123 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3432 }
    ],
    "Arts": [
      { university: "University of Ruhuna", course: "Arts", cutoff: 1.5765 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5543 }
    ],
    "Tech": [
      { university: "University of Ruhuna", course: "Technology", cutoff: 1.6876 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4765 }
    ]
  },
  "Matara": {
    "Bio": [
      { university: "University of Ruhuna", course: "Medicine", cutoff: 1.8543 },
      { university: "University of Kelaniya", course: "Nursing", cutoff: 1.5432 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3654 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.9012 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.8321 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3543 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.7654 },
      { university: "University of Ruhuna", course: "Management", cutoff: 1.7012 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3321 }
    ],
    "Arts": [
      { university: "University of Ruhuna", course: "Arts", cutoff: 1.5654 },
      { university: "University of Kelaniya", course: "Languages", cutoff: 1.5123 }
    ],
    "Tech": [
      { university: "University of Ruhuna", course: "Technology", cutoff: 1.6765 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4654 }
    ]
  },
  "Hambantota": {
    "Bio": [
      { university: "University of Ruhuna", course: "Medicine", cutoff: 1.8123 },
      { university: "University of Sri Jayewardenepura", course: "Medical Laboratory Sciences", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3432 }
    ],
    "Maths": [
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.8012 },
      { university: "University of Sri Jayewardenepura", course: "Computer Science", cutoff: 1.6987 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3321 }
    ],
    "Commerce": [
      { university: "University of Ruhuna", course: "Management", cutoff: 1.6987 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.6765 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3210 }
    ],
    "Arts": [
      { university: "University of Ruhuna", course: "Arts", cutoff: 1.5321 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.5123 }
    ],
    "Tech": [
      { university: "University of Ruhuna", course: "Technology", cutoff: 1.6432 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4321 }
    ]
  },
  "Jaffna": {
    "Bio": [
      { university: "University of Jaffna", course: "Medicine", cutoff: 1.7987 },
      { university: "University of Peradeniya", course: "Dental Science", cutoff: 1.7654 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3210 }
    ],
    "Maths": [
      { university: "University of Jaffna", course: "Engineering", cutoff: 1.7876 },
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.7654 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3123 }
    ],
    "Commerce": [
      { university: "University of Jaffna", course: "Management", cutoff: 1.6543 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.6432 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3012 }
    ],
    "Arts": [
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4987 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4876 }
    ],
    "Tech": [
      { university: "University of Jaffna", course: "Technology", cutoff: 1.5987 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4123 }
    ]
  },
  // Additional districts with their respective data
  "Badulla": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.7765 },
      { university: "Uva Wellassa University", course: "Animal Science", cutoff: 1.6432 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3321 }
    ],
    "Maths": [
      { university: "University of Peradeniya", course: "Engineering", cutoff: 1.8101 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.6876 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3234 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.6987 },
      { university: "Uva Wellassa University", course: "Entrepreneurship", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3123 }
    ],
    "Arts": [
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5123 },
      { university: "Uva Wellassa University", course: "Hospitality Management", cutoff: 1.4987 }
    ],
    "Tech": [
      { university: "Uva Wellassa University", course: "Technology", cutoff: 1.6123 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4234 }
    ]
  },
  "Kurunegala": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.8234 },
      { university: "Wayamba University", course: "Food Science", cutoff: 1.6876 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3765 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.8976 },
      { university: "Wayamba University", course: "Industrial Management", cutoff: 1.6987 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3654 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.7654 },
      { university: "Wayamba University", course: "Business Management", cutoff: 1.6876 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3567 }
    ],
    "Arts": [
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5654 },
      { university: "Wayamba University", course: "English", cutoff: 1.5123 }
    ],
    "Tech": [
      { university: "Wayamba University", course: "Technology", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4765 }
    ]
  },
  "Anuradhapura": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.7654 },
      { university: "Rajarata University", course: "Agriculture", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3234 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.8543 },
      { university: "Rajarata University", course: "Physical Science", cutoff: 1.6765 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3345 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.7234 },
      { university: "Rajarata University", course: "Management", cutoff: 1.6654 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3012 }
    ],
    "Arts": [
      { university: "Rajarata University", course: "Social Sciences", cutoff: 1.5345 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5234 }
    ],
    "Tech": [
      { university: "Rajarata University", course: "Technology", cutoff: 1.6234 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4345 }
    ]
  },
  "Ratnapura": {
    "Bio": [
      { university: "University of Sri Jayewardenepura", course: "Medicine", cutoff: 1.8123 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.6543 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3123 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.8765 },
      { university: "Sabaragamuwa University", course: "Physical Science", cutoff: 1.6654 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.3234 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management Studies", cutoff: 1.7345 },
      { university: "Sabaragamuwa University", course: "Management", cutoff: 1.6432 },
      { university: "Sabaragamuwa University", course: "Food Business Management", cutoff: 1.2987 }
    ],
    "Arts": [
      { university: "Sabaragamuwa University", course: "Social Sciences", cutoff: 1.5234 },
      { university: "University of Sri Jayewardenepura", course: "Arts", cutoff: 1.5123 }
    ],
    "Tech": [
      { university: "Sabaragamuwa University", course: "Technology", cutoff: 1.6123 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4234 }
    ]
  },
  "Nuwara Eliya": {
    "Bio": [
      { university: "University of Peradeniya", course: "Veterinary Science", cutoff: 1.5840 },
      { university: "University of Ruhuna", course: "Allied Health Sciences", cutoff: 1.4978 },
      { university: "Eastern University", course: "Science", cutoff: 1.3890 },
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.3456 }
    ],
    "Maths": [
      { university: "University of Peradeniya", course: "Engineering", cutoff: 1.7640 },
      { university: "University of Ruhuna", course: "Engineering", cutoff: 1.7100 },
      { university: "University of Sri Jayewardenepura", course: "Applied Sciences", cutoff: 1.5834 },
      { university: "University of Kelaniya", course: "Computing", cutoff: 1.5380 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management", cutoff: 1.7320 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.6456 },
      { university: "University of Jaffna", course: "Business Administration", cutoff: 1.4562 },
      { university: "Eastern University", course: "Management", cutoff: 1.3980 }
    ],
    "Arts": [
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5643 },
      { university: "University of Colombo", course: "Education", cutoff: 1.4897 },
      { university: "University of Sri Jayewardenepura", course: "Social Sciences", cutoff: 1.3980 },
      { university: "University of Kelaniya", course: "Humanities", cutoff: 1.3450 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4560 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.6830 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.2890 },
      { university: "Uva Wellassa University", course: "Industrial Information Technology", cutoff: 1.3450 }
    ]
  },
  "Kilinochchi": {
    "Bio": [
      { university: "University of Jaffna", course: "Medicine", cutoff: 1.6237 },
      { university: "Eastern University", course: "Agriculture", cutoff: 1.3985 },
      { university: "University of Peradeniya", course: "Dental Science", cutoff: 1.5621 },
      { university: "University of Colombo", course: "Nursing", cutoff: 1.4326 }
    ],
    "Maths": [
      { university: "University of Jaffna", course: "Engineering", cutoff: 1.5934 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5623 },
      { university: "University of Ruhuna", course: "Physical Science", cutoff: 1.4127 },
      { university: "University of Colombo", course: "Computer Science", cutoff: 1.4982 }
    ],
    "Commerce": [
      { university: "University of Jaffna", course: "Management", cutoff: 1.5342 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4872 },
      { university: "Eastern University", course: "Management Studies", cutoff: 1.3921 },
      { university: "University of Kelaniya", course: "Business Studies", cutoff: 1.3567 }
    ],
    "Arts": [
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4987 },
      { university: "University of Peradeniya", course: "Humanities", cutoff: 1.4326 },
      { university: "University of Colombo", course: "Social Sciences", cutoff: 1.3982 },
      { university: "Eastern University", course: "Cultural Studies", cutoff: 1.2934 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3768 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5467 },
      { university: "University of Vocational Technology", course: "Food Technology", cutoff: 1.2987 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3762 }
    ]
  },
  "Mannar": {
    "Bio": [
      { university: "University of Jaffna", course: "Medicine", cutoff: 1.6102 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.4562 },
      { university: "Eastern University", course: "Science", cutoff: 1.3784 },
      { university: "University of Ruhuna", course: "Fisheries", cutoff: 1.3456 }
    ],
    "Maths": [
      { university: "University of Jaffna", course: "Engineering", cutoff: 1.5823 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4785 },
      { university: "University of Sri Jayewardenepura", course: "Applied Sciences", cutoff: 1.4236 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5123 }
    ],
    "Commerce": [
      { university: "University of Jaffna", course: "Management", cutoff: 1.5234 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4678 },
      { university: "Eastern University", course: "Management Studies", cutoff: 1.3865 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3452 }
    ],
    "Arts": [
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4876 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4234 },
      { university: "University of Colombo", course: "Law", cutoff: 1.6123 },
      { university: "Eastern University", course: "Languages", cutoff: 1.3254 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.3765 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5345 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.2786 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3654 }
    ]
  },
  "Vavuniya": {
    "Bio": [
      { university: "University of Jaffna", course: "Medicine", cutoff: 1.6153 },
      { university: "University of Peradeniya", course: "Veterinary Science", cutoff: 1.5234 },
      { university: "Eastern University", course: "Agriculture", cutoff: 1.3987 },
      { university: "University of Ruhuna", course: "Fisheries", cutoff: 1.3345 }
    ],
    "Maths": [
      { university: "University of Jaffna", course: "Engineering", cutoff: 1.5798 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4652 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5267 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4325 }
    ],
    "Commerce": [
      { university: "University of Jaffna", course: "Management", cutoff: 1.5178 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4587 },
      { university: "Eastern University", course: "Management Studies", cutoff: 1.3765 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3421 }
    ],
    "Arts": [
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4767 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4187 },
      { university: "University of Colombo", course: "Law", cutoff: 1.6097 },
      { university: "Eastern University", course: "Languages", cutoff: 1.3187 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.3687 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5298 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.2687 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3576 }
    ]
  },
  "Mullaitivu": {
    "Bio": [
      { university: "University of Jaffna", course: "Medicine", cutoff: 1.5987 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.4324 },
      { university: "Eastern University", course: "Science", cutoff: 1.3567 },
      { university: "University of Ruhuna", course: "Fisheries", cutoff: 1.3245 }
    ],
    "Maths": [
      { university: "University of Jaffna", course: "Engineering", cutoff: 1.5654 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4532 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5123 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4234 }
    ],
    "Commerce": [
      { university: "University of Jaffna", course: "Management", cutoff: 1.5023 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4432 },
      { university: "Eastern University", course: "Management Studies", cutoff: 1.3654 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3342 }
    ],
    "Arts": [
      { university: "University of Jaffna", course: "Arts", cutoff: 1.4654 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4087 },
      { university: "University of Colombo", course: "Law", cutoff: 1.5987 },
      { university: "Eastern University", course: "Languages", cutoff: 1.3087 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.3576 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5187 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.2576 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3456 }
    ]
  },
  "Batticaloa": {
    "Bio": [
      { university: "Eastern University", course: "Medicine", cutoff: 1.6421 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.4876 },
      { university: "University of Jaffna", course: "Science", cutoff: 1.4565 },
      { university: "University of Colombo", course: "Nursing", cutoff: 1.4234 }
    ],
    "Maths": [
      { university: "Eastern University", course: "Engineering", cutoff: 1.5432 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4987 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5654 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4543 }
    ],
    "Commerce": [
      { university: "Eastern University", course: "Management", cutoff: 1.5432 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4876 },
      { university: "University of Jaffna", course: "Management Studies", cutoff: 1.4321 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3987 }
    ],
    "Arts": [
      { university: "Eastern University", course: "Arts", cutoff: 1.4987 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4543 },
      { university: "University of Colombo", course: "Law", cutoff: 1.6432 },
      { university: "University of Jaffna", course: "Languages", cutoff: 1.3876 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4123 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5543 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3432 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3987 }
    ]
  },
  "Ampara": {
    "Bio": [
      { university: "Eastern University", course: "Medicine", cutoff: 1.6321 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.4765 },
      { university: "University of Jaffna", course: "Science", cutoff: 1.4432 },
      { university: "University of Colombo", course: "Nursing", cutoff: 1.4123 }
    ],
    "Maths": [
      { university: "Eastern University", course: "Engineering", cutoff: 1.5321 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4876 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5543 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4432 }
    ],
    "Commerce": [
      { university: "Eastern University", course: "Management", cutoff: 1.5321 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4765 },
      { university: "University of Jaffna", course: "Management Studies", cutoff: 1.4210 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3876 }
    ],
    "Arts": [
      { university: "Eastern University", course: "Arts", cutoff: 1.4876 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4432 },
      { university: "University of Colombo", course: "Law", cutoff: 1.6321 },
      { university: "University of Jaffna", course: "Languages", cutoff: 1.3765 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4012 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5432 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3321 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3876 }
    ]
  },
  "Trincomalee": {
    "Bio": [
      { university: "Eastern University", course: "Medicine", cutoff: 1.6210 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.4654 },
      { university: "University of Jaffna", course: "Science", cutoff: 1.4321 },
      { university: "University of Colombo", course: "Nursing", cutoff: 1.4012 }
    ],
    "Maths": [
      { university: "Eastern University", course: "Engineering", cutoff: 1.5210 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.4765 },
      { university: "University of Moratuwa", course: "IT", cutoff: 1.5432 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4321 }
    ],
    "Commerce": [
      { university: "Eastern University", course: "Management", cutoff: 1.5210 },
      { university: "University of Sri Jayewardenepura", course: "Commerce", cutoff: 1.4654 },
      { university: "University of Jaffna", course: "Management Studies", cutoff: 1.4109 },
      { university: "University of Kelaniya", course: "Business", cutoff: 1.3765 }
    ],
    "Arts": [
      { university: "Eastern University", course: "Arts", cutoff: 1.4765 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4321 },
      { university: "University of Colombo", course: "Law", cutoff: 1.6210 },
      { university: "University of Jaffna", course: "Languages", cutoff: 1.3654 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.3901 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5321 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3210 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.3765 }
    ]
  },
  "Puttalam": {
    "Bio": [
      { university: "University of Colombo", course: "Medicine", cutoff: 1.7890 },
      { university: "University of Peradeniya", course: "Agriculture", cutoff: 1.5543 },
      { university: "University of Kelaniya", course: "Science", cutoff: 1.5210 },
      { university: "University of Sri Jayewardenepura", course: "Nursing", cutoff: 1.4901 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.8109 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.5654 },
      { university: "University of Colombo", course: "IT", cutoff: 1.6321 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.5210 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management", cutoff: 1.6099 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.5543 },
      { university: "University of Colombo", course: "Management Studies", cutoff: 1.5998 },
      { university: "University of Jaffna", course: "Business", cutoff: 1.4654 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Arts", cutoff: 1.5654 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5210 },
      { university: "University of Kelaniya", course: "Law", cutoff: 1.7099 },
      { university: "University of Sri Jayewardenepura", course: "Languages", cutoff: 1.4543 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4790 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.6210 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.4099 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.4654 }
    ]
  },
  "Polonnaruwa": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.7099 },
      { university: "Eastern University", course: "Agriculture", cutoff: 1.5432 },
      { university: "University of Kelaniya", course: "Science", cutoff: 1.5099 },
      { university: "University of Sri Jayewardenepura", course: "Nursing", cutoff: 1.4790 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.7998 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.5543 },
      { university: "University of Colombo", course: "IT", cutoff: 1.6210 },
      { university: "Eastern University", course: "Physical Science", cutoff: 1.5099 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management", cutoff: 1.5988 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.5432 },
      { university: "University of Colombo", course: "Management Studies", cutoff: 1.5887 },
      { university: "Eastern University", course: "Business", cutoff: 1.4543 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Arts", cutoff: 1.5543 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.5099 },
      { university: "University of Kelaniya", course: "Law", cutoff: 1.6988 },
      { university: "Eastern University", course: "Languages", cutoff: 1.4432 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4679 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.6099 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3988 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.4543 }
    ]
  },
  "Monaragala": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.6988 },
      { university: "Uva Wellassa University", course: "Agriculture", cutoff: 1.5321 },
      { university: "University of Ruhuna", course: "Science", cutoff: 1.4988 },
      { university: "University of Sri Jayewardenepura", course: "Nursing", cutoff: 1.4679 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.7887 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.5432 },
      { university: "University of Ruhuna", course: "IT", cutoff: 1.6099 },
      { university: "Uva Wellassa University", course: "Physical Science", cutoff: 1.4988 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management", cutoff: 1.5877 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.5321 },
      { university: "University of Colombo", course: "Management Studies", cutoff: 1.5776 },
      { university: "Uva Wellassa University", course: "Business", cutoff: 1.4432 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Arts", cutoff: 1.5432 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4988 },
      { university: "University of Kelaniya", course: "Law", cutoff: 1.6877 },
      { university: "Uva Wellassa University", course: "Languages", cutoff: 1.4321 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4568 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5988 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3877 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.4432 }
    ]
  },
  "Kegalle": {
    "Bio": [
      { university: "University of Peradeniya", course: "Medicine", cutoff: 1.7877 },
      { university: "University of Sabaragamuwa", course: "Agriculture", cutoff: 1.5210 },
      { university: "University of Colombo", course: "Science", cutoff: 1.5877 },
      { university: "University of Sri Jayewardenepura", course: "Nursing", cutoff: 1.4568 }
    ],
    "Maths": [
      { university: "University of Moratuwa", course: "Engineering", cutoff: 1.7776 },
      { university: "University of Peradeniya", course: "Science", cutoff: 1.5321 },
      { university: "University of Colombo", course: "IT", cutoff: 1.5988 },
      { university: "University of Sri Jayewardenepura", course: "Physical Science", cutoff: 1.4877 }
    ],
    "Commerce": [
      { university: "University of Sri Jayewardenepura", course: "Management", cutoff: 1.5766 },
      { university: "University of Kelaniya", course: "Commerce", cutoff: 1.5210 },
      { university: "University of Colombo", course: "Management Studies", cutoff: 1.5665 },
      { university: "University of Sabaragamuwa", course: "Business", cutoff: 1.4321 }
    ],
    "Arts": [
      { university: "University of Colombo", course: "Arts", cutoff: 1.5321 },
      { university: "University of Peradeniya", course: "Arts", cutoff: 1.4877 },
      { university: "University of Kelaniya", course: "Law", cutoff: 1.6766 },
      { university: "University of Sri Jayewardenepura", course: "Languages", cutoff: 1.4210 }
    ],
    "Tech": [
      { university: "University of Vocational Technology", course: "Manufacturing Technology", cutoff: 1.4457 },
      { university: "University of Moratuwa", course: "Information Technology", cutoff: 1.5877 },
      { university: "University of Vocational Technology", course: "Building Services Technology", cutoff: 1.3766 },
      { university: "Uva Wellassa University", course: "Computer Science", cutoff: 1.4321 }
    ]
  }
};
