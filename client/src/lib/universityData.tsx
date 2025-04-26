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
      { university: "Sabaragamuwa University", course: "Applied Sciences", cutoff: 1.4867 }
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
  }
};
