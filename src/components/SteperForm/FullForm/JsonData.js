// Function to get the current date in the format required by the date input
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const day = String(today.getDate()).padStart(2, "0"); // Ensure 2-digit day
  return `${year}-${month}-${day}`;
}
const personalLoanData = [
  {
    // 1
    question: "Select a loan purpose",
    subtitle: "Select the loan reason from below.",
    name: "loan_purpose",
    id: "myselect",
    type: "select",
    // skip: true,
    placeholder: "I Need loan for...",
    options: [
      "Auto Purchase",
      "Auto Repair",
      "Credit Card Consolidation",
      "Debt Consolidation",
      "Debt Settlement",
      "Home Improvement",
      "Small Business",
      "Emergency Situation",
      "Major Purchase",
      "Medical",
      "Moving",
      "Rent Or Mortgage",
      "Renewable Energy",
      "Student Loan Refinance",
      "Vacation",
      "Wedding",
      "Education",
      "Taxes",
      "Other",
    ],

    validation: {
      required: "Loan reason is required",
    },
  },
  {
    question: "When were you born?",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "dob",
    id: "dob",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date of birth is required",
    },
  },

  {
    // 2
    question: "How much would you like to borrow?",
    name: "borrowAmount",
    label: "Enter amount",
    type: "text",
    id: "amount",

    defaultValue: "",
    placeholder: "e.g. $1,250",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },

  {
    // 3
    question: "How quickly do you need the money?",
    id: "Within hours",
    name: "Within hours",
    type: "radio",

    options: [
      { name: "Within 48 hours", value: 48 },
      { name: "Within 2 weeks", value: "2 weeks" },
      { name: "Within a month", value: "a month" },
      { name: "Unsure, just browsing rates", value: "browsing rates" },
    ],

    validation: {
      required: "Time is required",
    },
  },

  {
    // 5
    question: "Type of residence?",
    // subtitle: "Are you currently in the military or you are the spouse, child or dependent of someone in the military?",
    name: "type_of_residence?",
    type: "radio",
    options: [
      { name: "I own my home", value: "home" },
      { name: "I am renting ", value: "rent" },
    ],
    validation: {
      required: "This field is required",
    },
  },

  {
    // 6
    question: "What is your credit score?",
    subtitle: "Your credit score won’t impact your loan request.",
    name: "credit_score",
    type: "radio",
    options: [
      { name: "Excellent (720+)", value: "EXCELLENT" },
      { name: "Good (660-719)", value: "GOOD" },
      { name: "Fair (600-659)", value: "FAIR" },
      { name: "Poor (less than 600)", value: "POOR" },
      { name: "Not Sure", value: "NOT_SURE" },
    ],
    validation: {
      required: "credit Score required",
    },
  },
  {
    // 7
    question: "What's your employment status?",
    id: "income_type",
    name: "income_type",
    type: "radio",
    skip: true,
    options: [
      { name: "Full Time", value: "Full_Time" },
      { name: "Part Time", value: "Part_Time" },
      { name: "Self-Employed", value: "Self_Employed" },
      { name: "Unemployed", value: "Unemployed" },
      { name: "Other", value: "Other" },
    ],
    validation: {
      required: "employment status is required",
    },
  },
  {
    // 8
    question: "What’s your annual income before taxes?",
    name: "annual_income",
    label: "Annual Income",
    type: "text",
    id: "annual_income",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "e.g. $1,250",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 9
    question: "Did you mean to say you make that monthly?",
    name: "making_sure",
    id: "making_sure",
    type: "radio",

    options: [
      { name: "I make $3,333 a year", value: "year_3333" },
      { name: "I make $3,333 a month", value: "month_3333" },
    ],
    validation: {
      required: "this is required",
    },
  },

  {
    // 10
    question: "What is your ZIP code?",
    element: [
      {
        label: "Zip code",
        placeholder: "Zip Code",
        name: "zip_code",
        id: "zip_code",
        type: "text",
        validation: {
          required: "zip code is required",
          pattern: {
            value: /^[0-9]{5}$/,
            message: "Enter valid zipcode",
          },
        },
      },
    ],
  },
  {
    // 11
    question: "Your street address?",
    element: [
      {
        name: "address",
        label: "Full address",
        type: "text",
        placeholder: "e.g. 100 Lemon ave",
        id: "address",

        validation: {
          required: "address is required",
        },
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "City",
        id: "City",

        validation: {
          required: "City is required",
        },
      },
    ],
  },

  {
    // 12
    question: "Your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter First name",

        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
    ],
  },
  {
    // 13
    question: "Phone number?",
    label: "Phone Number",
    subtitle:
      "Enter a phone number where your lender can contact you to discuss your loan agreement.",
    name: "phone_home",
    type: "text",
    placeholder: "e.g. 9164083151",
    id: "phone_home",
    // skip: true,
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number format",
      },
    },
  },
  {
    // 14
    question: "What is your email address",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
  {
    // 15
    question: "Social Security Number",
    subtitle:
      "Many lenders need your Social Security Number to consider you for a loan. This site is secured by SSL256 bit encryption.",
    name: "ssn",
    id: "ssn",
    label: "SSN",
    type: "text",

    placeholder: "Enter SSN",
    validation: {
      required: "SSN is required",
      minLength: {
        value: 9,
        message: "SSN must have a minimum of 9 digits.",
      },
      maxLength: {
        value: 9,
        message: "SSN must have a maximum of 9 digits.",
      },
    },
  },
];

const loanEquity = [
  {
    // 1
    question: "What type of property do you have?",
    id: "propertyType",
    name: "propertyType",
    type: "radio",

    options: [
      { name: "Single Family Home", value: "single-family-home" },
      { name: "Townhome", value: "townhomes" },
      { name: "Condominium", value: "condominium" },
      { name: "Multi Family Home", value: "multi-family-home" },
      { name: "Manufactured or Mobile Home", value: "manufactured" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 2
    question: "How do you use this property?",

    id: "useProperty",
    name: "useProperty",
    type: "radio",

    options: [
      { name: " Primary Home", value: " primary-home" },
      { name: " Secondary Home", value: " secondary-home" },
      { name: " Rental Property", value: "rental-property" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 3
    question: "What is the ZIP code of the property?",
    element: [
      {
        label: "Zip code",
        placeholder: "Zip Code",
        name: "zip_code",
        id: "zip_code",
        type: "text",
        validation: {
          required: "zip code is required",
          pattern: {
            value: /^[0-9]{5}$/,
            message: "Enter valid zipcode",
          },
        },
      },
    ],
  },
  {
    // 4
    question: "What are you using this loan for?",
    id: "loan_reson",
    name: "loan_reson",
    type: "radio",

    options: [
      { name: "Home Improvement", value: "home_improvement" },
      { name: "Retirement Income", value: "retirement_income" },
      { name: "Debt Consolidation", value: "debt_consolidation" },
      { name: "Investment Purposes", value: "investmentpurposes" },
      { name: "Other", value: "other" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 5
    question: "Please estimate the value of the property",
    name: "estimate_value",
    label: "Estimate Value",
    type: "text",
    id: "estimate_value",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "$375,001 to $400,000",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 6
    question: "Do you have a mortgage on this property?",
    id: "property_mortgage",
    name: "property_mortgage",
    type: "radio",

    options: [
      { name: "No, it's paid off", value: "paid_offt" },
      { name: "One Mortgage", value: "one_mortgage" },
      { name: "Two Mortgages", value: "two_mortgages" },
    ],

    validation: {
      required: "this field is required",
    },
  },
  {
    // 7
    question: "How much would you like to borrow?",
    name: "amunt",
    label: "Amount",
    type: "text",
    id: "amunt",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 6
    question:
      "For requests of $10,000 or less, we do not have matching lenders.",
    id: "button-redirect",
    name: "button-redirect",
    type: "button",

    options: [{ name: "Button redirect", redirect: "personal-loans" }],
    redirect: "personal-loans",
    validation: {
      required: "this field is required",
    },
  },
];

const HomePurchaseLoan = [
  {
    // 1
    question: "Where are you in the home buying process?",

    id: "home_buying_process",
    name: "home_buying_process",
    type: "radio",

    options: [
      { name: "I’m under contract", value: " under_contract" },
      { name: "I’m ready to make an offer", value: "make_an_offer" },
      {
        name: "I’m researching rates & prices",
        value: "researching_rate_prices",
      },
      {
        name: "I’m looking at homes & listings",
        value: " homes_and_listingse",
      },
    ],

    validation: {
      required: "THis field is required",
    },
  },
  {
    // 2
    question: "Would you like to get pre‑qualified or pre‑approved?",
    id: "pre‑approved",
    name: "pre‑approved",
    type: "radio",

    options: [
      { name: "Get Pre‑Qualified", value: "get_pre_qualified" },
      { name: "Get Pre‑Approved", value: "get_pre_approved" },
      { name: "Not Sure Yet", value: "not_sure_yet" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 3
    question: "What type of property do you have?",
    id: "propertyType",
    name: "propertyType",
    type: "radio",

    options: [
      { name: "Single Family Home", value: "single-family-home" },
      { name: "Townhome", value: "townhomes" },
      { name: "Condominium", value: "condominium" },
      { name: "Multi Family Home", value: "multi-family-home" },
      { name: "Manufactured or Mobile Home", value: "manufactured" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 4
    question: "How do you use this property?",

    id: "useProperty",
    name: "useProperty",
    type: "radio",

    options: [
      { name: " Primary Home", value: " primary-home" },
      { name: " Secondary Home", value: " secondary-home" },
      { name: " Rental Property", value: "rental-property" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    //5
    name: "city",
    label: "City",
    type: "text",
    placeholder: "City",
    id: "City",

    validation: {
      required: "City is required",
    },
  },
  {
    // 6
    question: "Have you already found your new home?",

    id: "home_status",
    name: "home_status",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 7
    question: "Have you already found your new home?",

    id: "home_status",
    name: "home_status",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 8
    question: "Are you currently working with a real estate agent?",

    id: "working_with_a_real_estate_agent",
    name: "working_with_a_real_estate_agent",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 9
    question: "What is the estimated purchase price?",
    name: "purchase_price",
    label: "Purchase Price",
    type: "text",
    id: "purchase_price",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 10
    question: "How much are you putting down as a down payment?",
    name: "down_payment",
    label: "Down Payment",
    type: "text",
    id: "down_payment",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 11
    question: "Is this your first time buying a home?",

    id: "first_time_buying",
    name: "first_time_buying",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 12
    question: "Will you have a co-borrower?",

    id: "a_co-borrower",
    name: "a_co-borrower",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 13
    question: "What is your combined annual household income?",
    name: "annual_household_income",
    label: "Annual Household Income",
    type: "text",
    id: "annual_household_income",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 14
    question: "Are you currently employed?",
    id: "employed_type",
    name: "employed_type",
    type: "radio",
    skip: true,
    options: [
      { name: "Full Time", value: "full_time" },
      { name: "Part Time", value: "part_time" },
      { name: "Self-Employed", value: "self_employed" },
      { name: "Unemployed", value: "unemployed" },
    ],
    validation: {
      required: "employment status is required",
    },
  },
  {
    // 15
    question: "Estimate your credit score",
    name: "estimate_credit_score",
    type: "radio",
    options: [
      { name: "Excellent (720+)", value: "EXCELLENT" },
      { name: "Good (660-719)", value: "GOOD" },
      { name: "Fair (600-659)", value: "FAIR" },
      { name: "Poor (less than 600)", value: "POOR" },
      { name: "Not Sure", value: "NOT_SURE" },
    ],
    validation: {
      required: "credit Score required",
    },
  },
  {
    question: "When were you born??",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "dob",
    id: "dob",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date of birth is required",
    },
  },
  {
    // 16
    question: "Have you or your spouse served in the military?",

    id: "military_status",
    name: "military_status",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 17
    question: "Have you had a bankruptcy or foreclosure in the last 7 years?",

    id: "foreclosure_last_seven_year",
    name: "foreclosure_last_seven_year",
    type: "radio",

    options: [
      { name: "No", value: "no" },
      { name: " Bankruptcy", value: "bankruptcy" },
      { name: "Foreclosure", value: "foreclosure" },
      { name: "Both", value: "both" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 18
    question: "How long ago was the foreclosure?",
    name: "foreclosure_years",
    label: "Foreclosure Years",
    type: "text",
    id: "foreclosure_years",

    defaultValue: "",
    placeholder: "Enter years 1 to 7",
    validation: {
      required: "This fiels is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid year with digits only.",
      },
    },
  },

  {
    // 19
    question: "What is your current street address?",
    element: [
      {
        name: "stret_address",
        id: "stret_address",
        label: "Street Address",
        type: "text",

        placeholder: "Street Address",

        validation: {
          required: "Street Address name is required",
        },
      },
      {
        name: "zip",
        id: "zip",
        label: "Zip",
        type: "text",

        placeholder: "Enter zip code",
        validation: {
          required: "Zip code is required",
        },
      },
      {
        name: "city",
        id: "city",
        label: "City",
        type: "text",

        placeholder: "Enter city",
        validation: {
          required: "City is required",
        },
      },
    ],
  },
  {
    // 20
    question: "What is your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",

        placeholder: "Enter First name",

        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        type: "text",

        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
    ],
  },
  {
    // 21
    question: "What is your email address",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
  {
    // 22
    question: "Do you want to receive your free credit report?",

    id: "receive_credit_peport",
    name: "receive_credit_peport",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 23
    question:
      "Great! Create a password to access and secure your free credit report.",
    name: "password",
    label: "Password",
    type: "text",
    id: "password",

    defaultValue: "",
    placeholder: "Enter Password",
    validation: {
      required: "Password is required",
      pattern: {
        // value: /^\d+$/,
        message: "Please enter password ",
      },
    },
  },
  {
    // 24
    question: "Mobile or home phone number",
    label: "Phone Number",
    subtitle:
      "Enter a phone number where your lender can contact you to discuss your loan agreement.",
    name: "phone_number",
    type: "text",
    placeholder: "e.g. 9164083151",
    id: "phone_number",
    // skip: true,
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number format",
      },
    },
  },
  {
    // 25
    question: "Social Security Number",
    subtitle:
      "Many lenders need your Social Security Number to consider you for a loan. This site is secured by SSL256 bit encryption.",
    name: "ssn",
    id: "ssn",
    label: "SSN",
    type: "text",

    placeholder: "Enter SSN",
    validation: {
      required: "SSN is required",
      minLength: {
        value: 9,
        message: "SSN must have a minimum of 9 digits.",
      },
      maxLength: {
        value: 9,
        message: "SSN must have a maximum of 9 digits.",
      },
    },
  },
];

const BusinessLoanData = [
  {
    // 1
    question: "What type of business do you own?",

    id: "type_of_business",
    name: "type_of_business",
    type: "radio",

    options: [
      { name: "Sole Proprietor", value: " sole_proprietor" },
      { name: "Partnership", value: "partnership" },
      {
        name: "Limited Liability Company (LLC)",
        value: "limited_liability_company",
      },
      {
        name: "C Corporation",
        value: " c_corporation",
      },
      {
        name: "S Corporation",
        value: "s_corporation",
      },
    ],

    validation: {
      required: "THis field is required",
    },
  },
  {
    // 2
    question: "How much money do you need?",
    name: "need_amount",
    label: "Enter amount",
    type: "text",
    id: "amount",

    defaultValue: "",
    placeholder: "e.g. $1,250",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },

  {
    // 3
    question: "What are you getting financing for?",
    // subtitle: "Select the loan reason from below.",
    name: "BusinessLoanPurpos",
    id: "BusinessLoanPurpos",
    type: "select",
    // skip: true,
    placeholder: "Select One...",
    options: [
      "Expansion",
      "Equipment purchase",
      "Purchase a vehicle",
      "Inventory",
      "Payroll",
      "Marketing",
      "Commercial real estate",
      "Remodel my location",
      "Refinance debt",
      "Finance Accounts Receivable",
      "Buy a business/franchise",
      "Start a business",
      "Other",
    ],

    validation: {
      required: "Loan reason is required",
    },
  },
  {
    // 4
    question: "How quickly do you need the money?",
    id: "need_moany",
    name: "need_moany",
    type: "radio",

    options: [
      { name: "Within a week", value: "1_week" },
      { name: "Within 2 weeks", value: "2_weeks" },
      { name: "Within a month", value: "a_month" },
      { name: "Unsure", value: "Unsure" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 5
    question: "What's your average monthly revenue?",
    name: "monthly_revenue",
    label: "Enter amount",
    type: "text",
    id: "monthly_revenue",

    defaultValue: "",
    placeholder: "e.g. $56656",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 6
    question: "What is your credit score?",
    subtitle: "Your credit score won’t impact your loan request.",
    name: "credit_score",
    type: "radio",
    options: [
      { name: "Excellent (720+)", value: "EXCELLENT" },
      { name: "Good (660-719)", value: "GOOD" },
      { name: "Fair (600-659)", value: "FAIR" },
      { name: "Poor (less than 600)", value: "POOR" },
      { name: "Not Sure", value: "NOT_SURE" },
    ],
    validation: {
      required: "credit Score required",
    },
  },
  {
    // 7
    question: "Tell us about your business",
    element: [
      {
        name: "business_name",
        id: "business_name",
        label: "About Business",
        type: "text",

        placeholder: "Business Address",

        validation: {
          required: "Business Address name is required",
        },
      },
      {
        name: "business_zip",
        id: "business_zip",
        label: "Business Zip",
        type: "text",

        placeholder: "Enter zip code",
        validation: {
          required: "Zip code is required",
        },
      },
    ],
  },
  {
    //8
    question: "When did you start your business?",
    // subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "business_start_date",
    id: "business_start_date",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date is required",
    },
  },

  {
    // 9
    question: "What industry are you in?",
    // subtitle: "Select the loan reason from below.",
    name: "industry",
    id: "industry",
    type: "select",
    // skip: true,
    placeholder: "Select An Industry...",

    options: [
      "Accommodation and Food Services",
      "Administrative &amp; Support and Waste Management &amp; Remediation Services",
      "Agriculture, Forestry, Fishing and Hunting",
      "Arts, Entertainment, and Recreation",
      "Construction",
      "Educational Services",
      "Finance and Insurance",
      "Health Care and Social Assistance",
      "Information",
      "Management of Companies and Enterprises",
      "Manufacturing",
      "Mining",
      "Other Services (except Public Administration)",
      "Professional, Scientific, and Technical Services",
      "Public Administration",
      "Real Estate Rental and Leasing",
      "Retail Trade",
      "Transportation and Warehousing",
      "Utilities",
      "Wholesale Trade",
    ],

    validation: {
      required: "industry is required",
    },
  },

  {
    // 12
    question: "Your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter First name",

        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
      {
        label: "Phone Number",
        subtitle:
          "Enter a phone number where your lender can contact you to discuss your loan agreement.",
        name: "phone_home",
        type: "text",
        placeholder: "e.g. 9164083151",
        id: "phone_home",
        // skip: true,
        validation: {
          required: "Phone Number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid phone number format",
          },
        },
      },
    ],
  },
  {
    // 14
    question: "What is your email address",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
];

const debtReliefLoanData = [
  {
    // 1
    question: "Which option best describes your situation?",

    id: "your_situation",
    name: "your_situation",
    type: "radio",

    options: [
      { name: "Reduce debt", value: "reduce_debt" },
      { name: "Need cash", value: "need_cash" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 2
    question: "What's your employment status?",
    id: "income_type",
    name: "income_type",
    type: "radio",
    skip: true,
    options: [
      { name: "Full Time", value: "Full_Time" },
      { name: "Part Time", value: "Part_Time" },
      { name: "Self-Employed", value: "Self_Employed" },
      { name: "Unemployed", value: "Unemployed" },
      { name: "Other", value: "Other" },
    ],
    validation: {
      required: "employment status is required",
    },
  },
  {
    // 3
    question: "What's your annual pre-tax income?",
    name: "annual_pre-tax_income",
    label: "annual pre-tax income",
    type: "text",
    id: "annual_pre-tax_income",

    defaultValue: "",
    placeholder: "Enter your income",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 4
    question: "Your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter First name",

        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
    ],
  },
  {
    // 5
    question: "What is your current street address?",
    element: [
      {
        name: "stret_address",
        id: "stret_address",
        label: "Street Address",
        type: "text",

        placeholder: "Street Address",

        validation: {
          required: "Street Address name is required",
        },
      },
      {
        name: "zip",
        id: "zip",
        label: "Zip",
        type: "text",

        placeholder: "Enter zip code",
        validation: {
          required: "Zip code is required",
        },
      },
      {
        name: "city",
        id: "city",
        label: "City",
        type: "text",

        placeholder: "Enter city",
        validation: {
          required: "City is required",
        },
      },
    ],
  },
  {
    // 13
    question: "Phone number?",
    label: "Phone Number",
    subtitle:
      "Enter a phone number where your lender can contact you to discuss your loan agreement.",
    name: "phone_home",
    type: "text",
    placeholder: "e.g. 9164083151",
    id: "phone_home",
    // skip: true,
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number format",
      },
    },
  },
  {
    question: "When were you born?",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "dob",
    id: "dob",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date of birth is required",
    },
  },
  {
    // 14
    question: "What is your email address",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
  {
    // 23
    question:
      "Great! Create a password to access and secure your free credit report.",
    name: "password",
    label: "Password",
    type: "text",
    id: "password",

    defaultValue: "",
    placeholder: "Enter Password",
    validation: {
      required: "Password is required",
      pattern: {
        // value: /^\d+$/,
        message: "Please enter password ",
      },
    },
  },
  {
    // 3
    question: "Please confirm your unsecured debt",
    name: "unsecured_debt",
    label: "Unsecured Debt",
    type: "text",
    id: "unsecured_debt",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
];

const HomeRefinanceData = [
  {
    // 1
    question: "Great! What type of property are you refinancing?",
    id: "propertyType",
    name: "propertyType",
    type: "radio",

    options: [
      { name: "Single Family Home", value: "single-family-home" },
      { name: "Townhome", value: "townhomes" },
      { name: "Condominium", value: "condominium" },
      { name: "Multi Family Home", value: "multi-family-home" },
      { name: "Manufactured or Mobile Home", value: "manufactured" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 2
    question: "How will this property be used?",

    id: "useProperty",
    name: "useProperty",
    type: "radio",

    options: [
      { name: " Primary Home", value: " primary-home" },
      { name: " Secondary Home", value: " secondary-home" },
      { name: " Rental Property", value: "rental-property" },
    ],

    validation: {
      required: "Time is required",
    },
  },
  {
    // 3
    question: "What is the ZIP code of the property?",
    element: [
      {
        label: "Zip code",
        placeholder: "Zip Code",
        name: "zip_code",
        id: "zip_code",
        type: "text",
        validation: {
          required: "zip code is required",
          pattern: {
            value: /^[0-9]{5}$/,
            message: "Enter valid zipcode",
          },
        },
      },
    ],
  },
  {
    // 4
    question: "Please estimate the value of the property",
    name: "estimate_value",
    label: "Estimate Value",
    type: "text",
    id: "estimate_value",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "$375,001 to $400,000",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 5
    question: "What is the remaining 1st mortgage balance?",
    name: "remaining_1st_mortgage",
    label: "Remaining 1st Mortgage",
    type: "text",
    id: "remaining_1st_mortgage",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "$320,000",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 6
    question: "Do you have a second mortgage?",

    id: "second_mortgage",
    name: "second_mortgage",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 7
    question: "What is the remaining balance on the 2nd mortgage?",
    name: "remaining_2st_mortgage",
    label: "Remaining 2nd Mortgage",
    type: "text",
    id: "remaining_2st_mortgage",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "$10,000 or less",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 8
    question: "Estimate your credit score",

    name: "estimate_credit_score",
    type: "radio",
    options: [
      { name: "Excellent (720+)", value: "EXCELLENT" },
      { name: "Good (660-719)", value: "GOOD" },
      { name: "Fair (600-659)", value: "FAIR" },
      { name: "Poor (less than 600)", value: "POOR" },
      { name: "Not Sure", value: "NOT_SURE" },
    ],
    validation: {
      required: "credit Score required",
    },
  },
  {
    //9
    question: "When were you born?",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "dob",
    id: "dob",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date of birth is required",
    },
  },

  {
    // 10
    question: "Have you or your spouse served in the military?",

    id: "military_status",
    name: "military_status",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 11
    question: "Do you currently have a VA loan?",

    id: "currently_laon",
    name: "currently_laon",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "Noe", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 12
    question: "Have you had a bankruptcy or foreclosure in the last 7 years?",

    id: "foreclosure_last_seven_year",
    name: "foreclosure_last_seven_year",
    type: "radio",

    options: [
      { name: "No", value: "no" },
      { name: " Bankruptcy", value: "bankruptcy" },
      { name: "Foreclosure", value: "foreclosure" },
      { name: "Both", value: "both" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 13
    question: "How long ago was the bankruptcy?",
    name: "bankruptcy",
    label: "Bankruptcy",
    type: "text",
    id: "bankruptcy",

    // defaultValue: `${amount || ""}`,
    defaultValue: "",
    placeholder: "e.g.2 Years",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 14
    question: "Your street address?",
    element: [
      {
        name: "address",
        label: "Full address",
        type: "text",
        placeholder: "e.g. 100 Lemon ave",
        id: "address",

        validation: {
          required: "address is required",
        },
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "City",
        id: "City",

        validation: {
          required: "City is required",
        },
      },
    ],
  },
  {
    // 15
    question: "What is your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",
        placeholder: "Enter First name",
        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
    ],
  },
  {
    // 16
    question: "What is your email address",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
  {
    // 17
    question: "Phone number?",
    label: "Phone Number",
    subtitle:
      "Enter a phone number where your lender can contact you to discuss your loan agreement.",
    name: "phone_home",
    type: "text",
    placeholder: "e.g. 9164083151",
    id: "phone_home",
    // skip: true,
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number format",
      },
    },
  },
  {
    // 15
    question: "Social Security Number",
    subtitle:
      "Providing your SSN is optional, but it will allow us to get more personalized rates.",
    name: "ssn",
    id: "ssn",
    label: "SSN",
    type: "text",

    placeholder: "Enter SSN",
    validation: {
      required: "SSN is required",
      minLength: {
        value: 9,
        message: "SSN must have a minimum of 9 digits.",
      },
      maxLength: {
        value: 9,
        message: "SSN must have a maximum of 9 digits.",
      },
    },
  },
];

const AutoLoanData = [
  // {
  //   // 1
  //   question: "Type Of Loan",
  //   id: "loan_type ",
  //   name: "loan_type ",
  //   type: "radio",

  //   options: [
  //     { name: "Purchase", value: "purchase" },
  //     { name: "Refinance", value: "refinance" },
  //     { name: "Lease Buy Out", value: "lease_buy_out" },
  //   ],

  //   validation: {
  //     required: "Loan Type is required",
  //   },
  // },
  {
    // 2
    question: "How quickly do you want to pay off your loan?",
    id: "loan_term ",
    name: "loan_term ",
    type: "radio",

    options: [
      { name: "7 Years (84 Months)", value: 84 },
      { name: "6 Years (72 Months)", value: 72 },
      { name: "5 Years (60 Months)", value: 60 },
      { name: "4 Years (48 Months)", value: 48 },
      { name: "3 Years (36 Months)", value: 36 },
      { name: "2 Years (24 Months)", value: 24 },
      { name: "1 Year (12 Months)", value: 12 },
    ],

    validation: {
      required: "Loan Term is required",
    },
  },
  {
    // 3
    question: "How quickly do you need the money?",
    id: "need_money_time",
    name: "need_money_time",
    type: "radio",

    options: [
      { name: "Within 48 hours", value: "48_hours" },
      { name: "Within 2 weeks", value: "2_weeks" },
      { name: "Within a month", value: "a_month" },
      { name: "Unsure, just browsing rates", value: "Unsure" },
    ],

    validation: {
      required: "Loan Term is required",
    },
  },
  {
    // 4
    question: "What's the make of the car?",
    id: "car_brand",
    name: "car_brand",
    type: "radio",

    options: [
      { name: "Chevrolet", value: "chevrolet" },
      { name: "Dodge", value: "dodge" },
      { name: "Ford", value: "ford" },
      { name: "Honda", value: "honda" },
      { name: "Nissan", value: "nissan" },
      { name: "Toyota", value: "toyota" },
      { name: "Other", value: "other" },
    ],

    validation: {
      required: "Car Name is required",
    },
  },
  {
    //5
    question: "What year and model car?",
    name: "car_model",
    id: "car_model",
    label: "Car",
    type: "text",

    placeholder: "Enter Car Model Year and Model",

    validation: {
      required: "Car Model Year is required",
    },
  },
  {
    // 6
    question: "And what about the car's trim?",
    id: "vehicleTrimName",
    name: "vehicleTrimName",
    type: "radio",

    options: [
      { name: "2dr Stingray Cpe w/1LT", value: "2dr_Stingray_Cpe_w/1LT" },
      { name: "2dr Stingray Cpe w/2LT", value: "2dr_Stingray_Cpe_w/2LT" },
      { name: "2dr Stingray Cpe w/3LT", value: "2dr_Stingray_Cpe_w/3LT" },
      { name: "2dr E-Ray Cpe w/1LZ", value: "2dr_E-Ray_Cpew/1LZ" },
      { name: "2dr E-Ray Cpe w/1LZ", value: "2drE-Ray_Cpe_w/1LZ" },
      { name: "2dr E-Ray Cpe w/2LZ", value: "2dr_E-Ray_Cpe_w/2LZ" },
      { name: "2dr E-Ray Cpe w/3LZ", value: "2dr_E-Ray_Cpe_w/3LZ" },
      { name: "2dr Z06 Cpe w/1LZ", value: "2dr_Z06_Cpe_w/1LZ" },
      { name: "2dr Z06 Cpe w/2LZ", value: "2dr_Z06_Cpe_w/2LZ" },
      { name: "2dr Z06 Cpe w/3LZ", value: "2dr_Z06_Cpe_w/3LZ" },
      { name: "2dr Stingray Conv w/1LT", value: "2dr_Stingray_Conv_w/1LT" },
      { name: "2dr Stingray Conv w/2LT", value: "2dr_Stingray_Conv_w/2LT" },
      { name: "2dr Stingray Conv w/3LT", value: "2dr_Stingray_Conv_w/3LT" },
      { name: "2dr E-Ray Conv w/1LZ", value: "2dr_E-Ray_Conv_w/1LZ" },
      { name: "2dr E-Ray Conv w/2LZ", value: "2dr_E-Ray_Conv_w/2LZ" },
      { name: "2dr E-Ray Conv w/3LZ", value: "2dr_E-Ray_Conv_w/3LZ" },
      { name: "2dr Z06 Conv w/1LZ", value: "2dr_Z06_Conv_w/1LZ" },
      { name: "2dr Z06 Conv w/2LZ", value: "2dr_Z06_Conv_w/2LZ" },
      { name: "2dr Z06 Conv w/3LZ", value: "2dr_Z06_Conv_w/3LZ" },
      { name: "I don’t know", value: "I_don’t_know" },
    ],

    validation: {
      required: "Car Name is required",
    },
  },
  {
    // 7
    question: "Mileage (ok to estimate)",
    name: "mileage",
    label: "Mileage",
    type: "text",
    id: "mileage",

    defaultValue: "",
    placeholder: "Enter Mileage",
    validation: {
      required: "KM is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid km with digits only.",
      },
    },
  },
  {
    // 8
    question: "Current Payoff Amount?",
    name: "payoff_amount",
    label: "Payoff Amount",
    type: "text",
    id: "payoff_amount",

    defaultValue: "",
    placeholder: "Enter Amount",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid Amount with digits only.",
      },
    },
  },
  {
    // 9
    question: "Any Bankruptcy In The Past 7 Years?",

    id: "Bankruptcy_past_seven_year",
    name: "Bankruptcy_past_seven_year",
    type: "radio",

    options: [
      { name: "Yes", value: "yes" },
      { name: "No", value: "no" },
    ],

    validation: {
      required: "This field is required",
    },
  },
  {
    // 10
    question: "When Was it Discharged?",
    name: "discharged",
    label: "Discharged",
    type: "text",
    id: "discharged",

    defaultValue: "",
    placeholder: "Enter Year 0 - 7",
    validation: {
      required: "Year is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid Year with digits only.",
      },
    },
  },
  {
    // 11
    question: "What is your estimated credit score?",

    name: "credit_score",
    type: "radio",
    options: [
      { name: "Excellent (720+)", value: "EXCELLENT" },
      { name: "Good (660-719)", value: "GOOD" },
      { name: "Fair (600-659)", value: "FAIR" },
      { name: "Poor (less than 600)", value: "POOR" },
      { name: "Not Sure", value: "NOT_SURE" },
    ],
    validation: {
      required: "credit Score required",
    },
  },
  {
    // 12
    question: "What's your employment status?",
    id: "income_type",
    name: "income_type",
    type: "radio",

    options: [
      { name: "Full Time", value: "Full_Time" },
      { name: "Part Time", value: "Part_Time" },
      { name: "Homemaker", value: "homemaker" },
      { name: "Retired", value: "retired" },
      { name: "Self-Employed", value: "Self_Employed" },
      { name: "Unemployed", value: "Unemployed" },
      { name: "Other", value: "Other" },
    ],
    validation: {
      required: "employment status is required",
    },
  },
  {
    //13
    question: "When Did You Start?",

    name: "start_date",
    id: "start_date",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date is required",
    },
  },
  {
    // 14
    question: "Who is your Current Employer?",
    element: [
      {
        name: "company_name",
        id: "company_name",
        label: "Company Name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Company Name ",

        validation: {
          required: "Company Name is required",
        },
      },
      {
        name: "job_title",
        id: "job_title",
        label: "Job Title",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Job Title",
        validation: {
          required: "Job Title is required",
        },
      },
    ],
  },
  {
    // 15
    question: "What's your annual income before taxes?",
    element: [
      {
        question: "Your Pre-tax Yearly Income",
        name: "Pre-tax_yearly_income",
        label: "Annual Salary Before Taxes",
        type: "text",
        id: "Pre-tax_yearly_income",

        defaultValue: "",
        placeholder: "e.g. $1,250",
        validation: {
          required: "Amount is required",
          pattern: {
            value: /^\d+$/,
            message: "Please enter a valid amount with digits only.",
          },
        },
      },
      {
        question: "Any other yearly income?",
        name: "other_yearly_income?",
        label: "Additional Income",
        type: "text",
        id: "other_yearly_income?",

        defaultValue: "",
        placeholder: "e.g. $1,250",
        validation: {
          required: "Amount is required",
          pattern: {
            value: /^\d+$/,
            message: "Please enter a valid amount with digits only.",
          },
        },
      },
    ],
  },
  {
    //16
    question: "Total Liquid Assets?",
    name: "liquid_assets?",
    label: "Enter amount",
    type: "text",
    id: "liquid_assets?",

    defaultValue: "",
    placeholder: "e.g. $1,250",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    // 17
    question: "What's Your Address?",
    element: [
      {
        name: "stret_address",
        id: "stret_address",
        label: "Street Address",
        type: "text",

        placeholder: "Street Address",

        validation: {
          required: "Street Address name is required",
        },
      },
      {
        name: "zip",
        id: "zip",
        label: "Zip",
        type: "text",

        placeholder: "Enter zip code",
        validation: {
          required: "Zip code is required",
        },
      },
      {
        name: "city",
        id: "city",
        label: "City",
        type: "text",

        placeholder: "Enter city",
        validation: {
          required: "City is required",
        },
      },
    ],
  },
  {
    // 18
    question: "Type of residence?",
    // subtitle: "Are you currently in the military or you are the spouse, child or dependent of someone in the military?",
    name: "type_of_residence?",
    type: "radio",

    options: [
      { name: "I Own My Home", value: "home" },
      { name: "I Rent My Home", value: "rent" },
      { name: "Other", value: "other" },
    ],
    validation: {
      required: "This field is required",
    },
  },
  {
    //19
    question: "How Long Have You Lived Here?",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "ResidenceInYears",
    id: "ResidenceInYears",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date  is required",
    },
  },
  {
    //20
    question: "Monthly Housing Payment",
    name: "monthly_housing_payment",
    label: "Enter amount",
    type: "text",
    id: "monthly_housing_payment",

    defaultValue: "",
    placeholder: "e.g. $1,250",
    validation: {
      required: "Amount is required",
      pattern: {
        value: /^\d+$/,
        message: "Please enter a valid amount with digits only.",
      },
    },
  },
  {
    //21
    question: "When were you born?",
    subtitle: "To qualify for a loan, you must be over 18 years old.",
    name: "dob",
    id: "dob",
    defaultValue: getCurrentDate(), // Set default value to current date
    type: "date",
    validation: {
      required: "Date of birth is required",
    },
  },
  {
    // 22
    question: "Your name?",
    element: [
      {
        name: "first_name",
        id: "first_name",
        label: "First name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter First name",

        validation: {
          required: "First name is required",
        },
      },
      {
        name: "last_name",
        id: "last_name",
        label: "Last name",
        type: "text",
        minLength: 2,
        maxLength: 15,
        placeholder: "Enter Last name",
        validation: {
          required: "Last name is required",
        },
      },
    ],
  },
  {
    // 23
    question: "Great! Your rates are ready to view.",
    name: "email_address",
    label: "Email address",
    type: "text",
    placeholder: "Joycane@gmail.com",
    id: "email_address",
    // defaultValue: `${email || ""}`,
    defaultValue: "",
    validation: {
      required: "Email address is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: "Enter valid Email address",
      },
    },
  },
  {
    // 24
    question: "Phone number?",
    label: "Phone Number",
    subtitle:
      "Enter a phone number where your lender can contact you to discuss your loan agreement.",
    name: "phone_home",
    type: "text",
    placeholder: "e.g. 9164083151",
    id: "phone_home",
    // skip: true,
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid phone number format",
      },
    },
  },
  {
    // 25
    question: "Social Security Number",
    subtitle:
      "Many lenders need your Social Security Number to consider you for a loan. This site is secured by SSL256 bit encryption.",
    name: "ssn",
    id: "ssn",
    label: "SSN",
    type: "text",

    placeholder: "Enter SSN",
    validation: {
      required: "SSN is required",
      minLength: {
        value: 9,
        message: "SSN must have a minimum of 9 digits.",
      },
      maxLength: {
        value: 9,
        message: "SSN must have a maximum of 9 digits.",
      },
    },
  },
];

export {
  personalLoanData,
  loanEquity,
  HomePurchaseLoan,
  BusinessLoanData,
  debtReliefLoanData,
  HomeRefinanceData,
  AutoLoanData,
};
