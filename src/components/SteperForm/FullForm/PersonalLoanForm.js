import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import Accordion from "react-bootstrap/Accordion";

import "../css/SidesectionAccordian.css";
import "../css/Forminput.css";
import "../css/InputFloat.css";
import "../css/Formquestion.css";
import "../../../App.css";
import back from "../../SteperForm/assets/back.svg";
import next from "../../SteperForm/assets/next.svg";
// import useQuery from "../../../utils/useQuery";
import Loader from "../Loader/Loader.js";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Progressbar from "../../progress/Progress.js";
import { personalLoanData, loanEquity } from "./JsonData.js";

const PersonalLoanForm = (props) => {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   setIsOpen(false);
  // };

  // const toggleCalendar = () => {
  //   setIsOpen(!isOpen);
  // };

  // const query = useQuery();
  const navigate = useNavigate();
  // const email = query.get("email");
  // const amount = query.get("amount");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formBtnSty = {
    backgroundCOlor: "red !important",
  };

  const { progress } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  const [formData, setFormData] = useState(setCurrentStep + 1);
  const [isLoadingSub, setIsLoadingSub] = useState(false);
  // let abaval = formData.aba || "";

  const ip = props.IP;

  const NEXTPAYCHECK = formData.nextPaycheck;
  const nextDataValue = new Date(NEXTPAYCHECK);
  const nextPayYear = nextDataValue.getFullYear();
  const nextPayMonth = nextDataValue.getMonth() + 1;
  const nextPayDate = nextDataValue.getDate();

  const DOB = formData.dob;
  const dateValue = new Date(DOB);
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const date = dateValue.getDate();

  const SSN = formData.ssn;
  const ssn1 = SSN && SSN.substring(0, 3);
  const ssn2 = SSN && SSN.substring(3, 5);
  const ssn3 = SSN && SSN.substring(5, 9);

  // Date Logic
  const validateDate = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    if (selectedDate > minAgeDate) {
      return "You must be at least 18 years old.";
    }

    return true;
  };

  const [minAgeDate, setMinAgeDate] = useState("");

  // Function to get the current date in the format required by the date input
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
    const day = String(today.getDate()).padStart(2, "0"); // Ensure 2-digit day
    return `${year}-${month}-${day}`;
  }

  const steps = personalLoanData;

  // const steps = [
  //   {
  //     // 1
  //     question: "Select a loan purpose",
  //     subtitle: "Select the loan reason from below.",
  //     name: "loan_purpose",
  //     id: "myselect",
  //     type: "select",
  //     // skip: true,
  //     placeholder: "I Need loan for...",
  //     options: [
  //       "Auto Purchase",
  //       "Auto Repair",
  //       "Credit Card Consolidation",
  //       "Debt Consolidation",
  //       "Debt Settlement",
  //       "Home Improvement",
  //       "Small Business",
  //       "Emergency Situation",
  //       "Major Purchase",
  //       "Medical",
  //       "Moving",
  //       "Rent Or Mortgage",
  //       "Renewable Energy",
  //       "Student Loan Refinance",
  //       "Vacation",
  //       "Wedding",
  //       "Education",
  //       "Taxes",
  //       "Other",
  //     ],

  //     validation: {
  //       required: "Loan reason is required",
  //     },
  //   },
  //   {
  //     question: "When were you born?",
  //     subtitle: "To qualify for a loan, you must be over 18 years old.",
  //     name: "dob",
  //     id: "dob",
  //     defaultValue: getCurrentDate(), // Set default value to current date
  //     type: "date",
  //     validation: {
  //       required: "Date of birth is required",
  //     },
  //   },

  //   {
  //     // 2
  //     question: "How much would you like to borrow?",
  //     name: "borrowAmount",
  //     label: "Enter amount",
  //     type: "text",
  //     id: "amount",

  //     defaultValue: "",
  //     placeholder: "e.g. $1,250",
  //     validation: {
  //       required: "Amount is required",
  //       pattern: {
  //         value: /^\d+$/,
  //         message: "Please enter a valid amount with digits only.",
  //       },
  //     },
  //   },

  //   {
  //     // 3
  //     question: "How quickly do you need the money?",
  //     id: "Within hours",
  //     name: "Within hours",
  //     type: "radio",

  //     options: [
  //       { name: "Within 48 hours", value: 48 },
  //       { name: "Within 2 weeks", value: "2 weeks" },
  //       { name: "Within a month", value: "a month" },
  //       { name: "Unsure, just browsing rates", value: "browsing rates" },
  //     ],

  //     validation: {
  //       required: "Time is required",
  //     },
  //   },

  //   {
  //     // 5
  //     question: "Type of residence?",
  //     // subtitle: "Are you currently in the military or you are the spouse, child or dependent of someone in the military?",
  //     name: "type_of_residence?",
  //     type: "radio",
  //     options: [
  //       { name: "I own my home", value: "home" },
  //       { name: "I am renting ", value: "rent" },
  //     ],
  //     validation: {
  //       required: "This field is required",
  //     },
  //   },

  //   {
  //     // 6
  //     question: "What is your credit score?",
  //     subtitle: "Your credit score won’t impact your loan request.",
  //     name: "credit_score",
  //     type: "radio",
  //     options: [
  //       { name: "Excellent (720+)", value: "EXCELLENT" },
  //       { name: "Good (660-719)", value: "GOOD" },
  //       { name: "Fair (600-659)", value: "FAIR" },
  //       { name: "Poor (less than 600)", value: "POOR" },
  //       { name: "Not Sure", value: "NOT_SURE" },
  //     ],
  //     validation: {
  //       required: "credit Score required",
  //     },
  //   },
  //   {
  //     // 7
  //     question: "What's your employment status?",
  //     id: "income_type",
  //     name: "income_type",
  //     type: "radio",
  //     skip: true,
  //     options: [
  //       { name: "Full Time", value: "Full_Time" },
  //       { name: "Part Time", value: "Part_Time" },
  //       { name: "Self-Employed", value: "Self_Employed" },
  //       { name: "Unemployed", value: "Unemployed" },
  //       { name: "Other", value: "Other" },
  //     ],
  //     validation: {
  //       required: "employment status is required",
  //     },
  //   },
  //   {
  //     // 8
  //     question: "What’s your annual income before taxes?",
  //     name: "annual_income",
  //     label: "Annual Income",
  //     type: "text",
  //     id: "annual_income",

  //     // defaultValue: `${amount || ""}`,
  //     defaultValue: "",
  //     placeholder: "e.g. $1,250",
  //     validation: {
  //       required: "Amount is required",
  //       pattern: {
  //         value: /^\d+$/,
  //         message: "Please enter a valid amount with digits only.",
  //       },
  //     },
  //   },
  //   {
  //     // 9
  //     question: "Did you mean to say you make that monthly?",
  //     name: "making_sure",
  //     id: "making_sure",
  //     type: "radio",

  //     options: [
  //       { name: "I make $3,333 a year", value: "year_3333" },
  //       { name: "I make $3,333 a month", value: "month_3333" },
  //     ],
  //     validation: {
  //       required: "this is required",
  //     },
  //   },

  //   {
  //     // 10
  //     question: "What is your ZIP code?",
  //     element: [
  //       {
  //         label: "Zip code",
  //         placeholder: "Zip Code",
  //         name: "zip_code",
  //         id: "zip_code",
  //         type: "text",
  //         validation: {
  //           required: "zip code is required",
  //           pattern: {
  //             value: /^[0-9]{5}$/,
  //             message: "Enter valid zipcode",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     // 11
  //     question: "Your street address?",
  //     element: [
  //       {
  //         name: "address",
  //         label: "Full address",
  //         type: "text",
  //         placeholder: "e.g. 100 Lemon ave",
  //         id: "address",

  //         validation: {
  //           required: "address is required",
  //         },
  //       },
  //       {
  //         name: "city",
  //         label: "City",
  //         type: "text",
  //         placeholder: "City",
  //         id: "City",

  //         validation: {
  //           required: "City is required",
  //         },
  //       },
  //     ],
  //   },

  //   {
  //     // 12
  //     question: "Your name?",
  //     element: [
  //       {
  //         name: "first_name",
  //         id: "first_name",
  //         label: "First name",
  //         type: "text",
  //         minLength: 2,
  //         maxLength: 15,
  //         placeholder: "Enter First name",

  //         validation: {
  //           required: "First name is required",
  //         },
  //       },
  //       {
  //         name: "last_name",
  //         id: "last_name",
  //         label: "Last name",
  //         type: "text",
  //         minLength: 2,
  //         maxLength: 15,
  //         placeholder: "Enter Last name",
  //         validation: {
  //           required: "Last name is required",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     // 13
  //     question: "Phone number?",
  //     label: "Phone Number",
  //     subtitle:
  //       "Enter a phone number where your lender can contact you to discuss your loan agreement.",
  //     name: "phone_home",
  //     type: "text",
  //     placeholder: "e.g. 9164083151",
  //     id: "phone_home",
  //     // skip: true,
  //     validation: {
  //       required: "Phone Number is required",
  //       pattern: {
  //         value: /^[0-9]{10}$/,
  //         message: "Invalid phone number format",
  //       },
  //     },
  //   },
  //   {
  //     // 14
  //     question: "What is your email address",
  //     name: "email_address",
  //     label: "Email address",
  //     type: "text",
  //     placeholder: "Joycane@gmail.com",
  //     id: "email_address",
  //     // defaultValue: `${email || ""}`,
  //     defaultValue: "",
  //     validation: {
  //       required: "Email address is required",
  //       pattern: {
  //         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  //         message: "Enter valid Email address",
  //       },
  //     },
  //   },
  //   {
  //     // 15
  //     question: "Social Security Number",
  //     subtitle:
  //       "Many lenders need your Social Security Number to consider you for a loan. This site is secured by SSL256 bit encryption.",
  //     name: "ssn",
  //     id: "ssn",
  //     label: "SSN",
  //     type: "text",

  //     placeholder: "Enter SSN",
  //     validation: {
  //       required: "SSN is required",
  //       minLength: {
  //         value: 9,
  //         message: "SSN must have a minimum of 9 digits.",
  //       },
  //       maxLength: {
  //         value: 9,
  //         message: "SSN must have a maximum of 9 digits.",
  //       },
  //     },
  //   },
  // ];

  const totalSteps = steps.length - 1;

  console.log("Total Steps", totalSteps);
  const isLastStep = currentStep === totalSteps;

  console.log(maxProgress, "1");

  const handleProgress = () => {
    const progress = isLastStep
      ? maxProgress
      : Math.round((currentStep / totalSteps) * 100);

    if (progress > maxProgress) {
      setMaxProgress(progress);
    }
    props.changeProgress(maxProgress);
  };

  const onSubmit = async (data) => {
    setFormData(data);

    let sortFormData = {
      ...data,
      ssn_1: ssn1,
      ssn_2: ssn2,
      ssn_3: ssn3,
      ip_address: ip,
      dob_year: year,
      dob_month: month,
      dob_date: date,
      payday1_year: nextPayYear,
      payday1_month: nextPayMonth,
      payday1_date: nextPayDate,
    };

    if (isLastStep) {
      setIsLoadingSub(true);

      setTimeout(() => {
        // alert(JSON.stringify(data));
        setIsLoadingSub(false);

        // window.location.href = "submited";

        navigate("/");
      }, 9000);
    }

    // else if()

    // setTimeout(() => {
    //   setIsLoadingSub(false);
    //   window.location.href =
    //     "https://us.everybuckcounts.com/loan-for-bad-credit/?camp=Reject";
    // }, 300000);
    else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleNext = (optionValue) => {
    console.log("NEXT", steps);

    if (currentStep < totalSteps) {
      // Call handleProgress function passing the selected option value
      handleProgress();
    }
  };
  // const handleNext = () => {
  //   console.log("NEXT", steps);

  //   if (currentStep < totalSteps) {
  //     handleProgress();
  //   }

  //   // else if ((formData.loanReason === "Small Business")) {
  //   //   setCurrentStep((prevStep) => prevStep + 2);

  //   // }
  // };
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const TextHandler = ({ steps }) => {
    return (
      <>
        <div className="inputMain">
          <div className="field">
            {/* <input
              className={`custom-input answer_selection input_sty ${
                errors[steps[currentStep].name] ? "invalid" : ""
              }form_options`}
              type="text"
             
              defaultValue={steps[currentStep].defaultValue || ""}
              {...register(steps[currentStep].name, {
                required: steps[currentStep].validation.required,
                pattern: steps[currentStep].validation.pattern,
                min: steps[currentStep].validation.min,
                max: steps[currentStep].validation.max,
                minLength: steps[currentStep].validation.minLength,
                maxLength: steps[currentStep].validation.maxLength,
                validation: steps[currentStep].validation.minLength,
              })}
              placeholder={steps[currentStep].placeholder}
              id={steps[currentStep].id}
              onChange={handleChange}
            /> */}
            <input
              className={`custom-input answer_selection input_sty ${
                errors[steps[currentStep].name] ? "invalid" : ""
              } form_options`}
              type="text"
              defaultValue={steps[currentStep].defaultValue || ""}
              {...register(steps[currentStep].name, {
                ...(!steps[currentStep].skip && {
                  required: steps[currentStep].validation.required,
                  pattern: steps[currentStep].validation.pattern,
                  // min: steps[currentStep].validation.min,
                  // max: steps[currentStep].validation.max,
                  // minLength: steps[currentStep].validation.minLength,
                  // maxLength: steps[currentStep].validation.maxLength,
                  // validation: steps[currentStep].validation.minLength, // Remove this line, it's not necessary
                }),
              })}
              placeholder={steps[currentStep].placeholder}
              id={steps[currentStep].id}
              onChange={handleChange}
            />

            <label htmlFor={steps[currentStep].id} className="lable_sty">
              {steps[currentStep].label}
            </label>
          </div>

          {errors[steps[currentStep].name] && (
            <p className="error-message">
              {errors[steps[currentStep].name].message}
            </p>
          )}
        </div>
      </>
    );
  };

  const SelectHandler = ({ steps }) => {
    return (
      <>
        <div className="inputMain">
          <select
            className={`custom-select-trigger classic answer_selection ${
              errors[steps[currentStep].name] ? "invalid" : ""
            }form_options`}
            {...register(steps[currentStep].name, {
              ...(!steps[currentStep].skip && {
                required: steps[currentStep].validation.required,
              }),
            })}
            id={steps[currentStep].id}
          >
            <span class="custom-select-trigger">Select Loan Purpose</span>
            <option class="optionDef" value="">
              {steps[currentStep].placeholder}
            </option>
            {steps[currentStep].options.map((option, optionIndex) => (
              <option
                className="optiondropdownOpen"
                key={optionIndex}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
          {errors[steps[currentStep].name] && (
            <p className="error-message">
              {errors[steps[currentStep].name].message}
            </p>
          )}
        </div>
      </>
    );
  };

  const RadioHandler = ({ steps }) => {
    return (
      <>
        <div className="radio-main">
          <div className="radio-options radioBtn_design form_options ">
            {steps[currentStep].options.map((option, optionIndex) => (
              <div key={optionIndex} className="radio-option ">
                <input
                  type="radio"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  id={`${steps[currentStep].name}-${optionIndex}`}
                  value={option.value}
                  {...register(steps[currentStep].name, {
                    ...(!steps[currentStep].skip && {
                      required: steps[currentStep].validation.required,
                    }),
                  })}
                />
                <label
                  htmlFor={`${steps[currentStep].name}-${optionIndex}`}
                  className="radio-label"
                >
                  {option.name}
                </label>
              </div>
            ))}
          </div>
          {errors[steps[currentStep].name] && (
            <p className="error-message">
              {errors[steps[currentStep].name].message}
            </p>
          )}
        </div>
      </>
    );
  };

  const CheckboxHandler = ({ steps }) => {
    return (
      <>
        <div className="checkbox-options checkBtn_design form_options">
          {steps[currentStep].options.map((option, optionIndex) => (
            <div key={optionIndex} className="checkbox-option">
              <input
                type="checkbox"
                id={`${steps[currentStep].name}-${optionIndex}`}
                value={option}
                {...register(steps[currentStep].name, {
                  ...(!steps[currentStep].skip && {
                    required: steps[currentStep].validation.required,
                  }),
                })}
              />
              <label
                htmlFor={`${steps[currentStep].name}-${optionIndex}`}
                className="checkbox-label"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors[steps[currentStep].name] && (
          <p className="error-message">
            {errors[steps[currentStep].name].message}
          </p>
        )}
      </>
    );
  };

  const DateHandler = ({ steps }) => {
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
      const day = String(today.getDate()).padStart(2, "0"); // Ensure 2-digit day
      return `${year}-${month}-${day}`;
    };

    // State to store the default date
    const [defaultDate, setDefaultDate] = useState(getCurrentDate());
    return (
      <>
        <div className="inputMain">
          <div className="field">
            <TextField
              sx={{ color: "#fff", background: "#fff" }}
              type="date"
              className={`custom-input answer_selection ${
                errors[steps[currentStep].name] ? "invalid" : ""
              } form_options`}
              id={steps[currentStep].id}
              defaultValue={defaultDate} // Pass the default value here
              {...register(steps[currentStep].name, {
                ...(!steps[currentStep].skip && {
                  required: steps[currentStep].validation.required,
                  validate: steps[currentStep].validation.validate,
                }),
              })}
            />

            <label htmlFor={steps[currentStep].id} className="lable_sty">
              {steps[currentStep].label}
            </label>
          </div>
          {errors[steps[currentStep].name] && (
            <p className="error-message">
              {errors[steps[currentStep].name].message}
            </p>
          )}
        </div>
      </>
    );
  };

  const TextHandlerElement = ({ steps }) => {
    return (
      <>
        <div className="inputMain">
          <div className="field">
            <input
              className={`custom-input answer_selection input_sty  ${
                errors[steps.name] ? "invalid" : ""
              }form_options`}
              type="text"
              {...register(steps.name, {
                // ...(!steps[currentStep].skip && {
                required: steps.validation.required,
                pattern: steps.validation.pattern,
                validate: steps.validation.validate,
                // }),
              })}
              placeholder={steps.placeholder}
              id={steps.id}
              onChange={handleChange}
              // autoFocus
            />

            <label htmlFor={steps.id} className="lable_sty">
              {steps.label}
            </label>
          </div>
          {errors[steps.name] && (
            <p className="error-message">{errors[steps.name].message}</p>
          )}
        </div>
      </>
    );
  };

  const SelectHandlerElement = ({ steps }) => {
    return (
      <>
        <div className="wrapper">
          <select
            className={`custom-select-trigger classic answer_selection ${
              errors[steps.name] ? "invalid" : ""
            }form_options`}
            {...register(steps.name, {
              ...(!steps[currentStep].skip && {
                required: steps.validation.required,
              }),
            })}
          >
            <option value="">{steps.placeholder}</option>
            {steps.options.map((option, optionIndex) => (
              <option
                className="optiondropdownOpen"
                key={optionIndex}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        {errors[steps.name] && (
          <p className="error-message">{errors[steps.name].message}</p>
        )}
      </>
    );
  };

  const RadioHandlerElement = ({ steps }) => {
    return (
      <div className="radio-main">
        <div className="radio-options radioBtn_design form_options">
          {steps.options.map((option, optionIndex) => (
            <div key={optionIndex} className="radio-option">
              <input
                type="radio"
                id={`${steps.name}-${optionIndex}`}
                value={option}
                {...register(steps.name, {
                  ...(!steps[currentStep].skip && {
                    required: steps.validation.required,
                  }),
                })}
              />
              <label
                htmlFor={`${steps.name}-${optionIndex}`}
                className="radio-label"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const CheckboxHandlerElement = ({ steps }) => {
    return (
      <>
        <div className="checkbox-options checkBtn_design form_options">
          {steps.subtitle && (
            <p className="checkbox-subtitle">{steps.subtitle}</p>
          )}
          {steps.options.map((option, optionIndex) => (
            <div key={optionIndex} className="checkbox-option">
              <input
                type="checkbox"
                id={`${steps.name}-${optionIndex}`}
                value={option}
                {...register(steps.name, {
                  ...(!steps[currentStep].skip && {
                    required: steps.validation.required,
                  }),
                })}
              />
              <label
                htmlFor={`${steps.name}-${optionIndex}`}
                className="checkbox-label"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors[steps.name] && (
          <p className="error-message">{errors[steps.name].message}</p>
        )}
      </>
    );
  };

  const DateHandlerElement = ({ steps }) => {
    return (
      <>
        {/* <TextField
          variant="filled"
          size="small"
          // value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            // width: isLargeScreen ? "300px" : "280px",
          }}
          label="MM//DD//YY"
        /> */}

        {/* <TextField
          className={`custom-input answer_selection ${
            errors[steps.name] ? "invalid" : ""
          }form_options`}
          type="date"
          {...register(steps.name, {
            ...(!steps[currentStep].skip && {
              required: steps.validation.required,
            }),
          })}
        />
        {errors[steps.name] && (
          <p className="error-message">{errors[steps.name].message}</p>
        )} */}
      </>
    );
  };

  return (
    <div className="container">
      {isLoadingSub ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* <div className="col-lg-4 col-md-4 col-sm-12 xs-12 paddingmob"> */}
            {/* {currentStep !== 0 && currentStep !== 1 && ( */}
            <>
              <div className="progress_bar_section">
                {/* <Progressbar
                  bgcolor="#85BB65"
                  progress={props.progress}
                  height={10}
                /> */}
              </div>
              <div className="separator"></div>
            </>
            {/* )} */}
            <div className="col-lg-12 col-md-12 col-sm-12 xs-12 paddingmob">
              <div key={currentStep} className="form-group form-block-width">
                <div className="form-ques-padding">
                  {/* {steps[currentStep].successName && (
                    <div className="ques_success_massage">
                      <h1>{steps[currentStep].successName}</h1>
                      <p>{steps[currentStep].successMasage}</p>
                    </div>
                  )} */}
                  <label className="ques_head_title">
                    {steps[currentStep].question}
                  </label>

                  {/* {steps[currentStep].subtitle && (
                    <p className="select-subtitle ques_sub_title">
                      {steps[currentStep].subtitle}{" "}
                    </p>
                  )} */}
                </div>

                {steps[currentStep]?.element && (
                  <>
                    {steps[currentStep].element?.map((ele, eleIndex) => (
                      <>
                        {ele?.type === "text" && (
                          <TextHandlerElement steps={ele} />
                        )}
                        {ele?.type === "number" && (
                          <TextHandlerElement steps={ele} />
                        )}
                        {/* {ele.type === "select" && (
                          <SelectHandlerElement steps={ele} />
                        )} */}

                        {ele?.type === "radio" && (
                          <RadioHandlerElement steps={ele} />
                        )}
                        {ele?.type === "checkbox" && (
                          <CheckboxHandlerElement steps={ele} />
                        )}
                        {ele?.type === "date" && (
                          <DateHandlerElement steps={ele} />
                        )}
                      </>
                    ))}
                  </>
                )}

                {steps[currentStep]?.type === "text" && (
                  <TextHandler steps={steps} />
                )}
                {steps[currentStep]?.type === "select" && (
                  <SelectHandler steps={steps} />
                )}

                {steps[currentStep]?.type === "radio" && (
                  <RadioHandler steps={steps} />
                )}
                {steps[currentStep]?.type === "checkbox" && (
                  <CheckboxHandler steps={steps} />
                )}
                {steps[currentStep]?.type === "date" && (
                  <DateHandler steps={steps} />
                )}
              </div>

              <div className="form-action">
                <button
                  className="btn-back"
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <span className="leftArrow">
                    <div>
                      <img src={back} alt="back" />
                    </div>
                    <div>
                      <p>Back</p>
                    </div>
                  </span>
                </button>
                {/* {steps[currentStep].skip && (
                  <button
                    type="submit"
                    onClick={handleNext()}
                    className="btn-back"
                  >
                    <div>
                      {steps[currentStep].skip && (
                        <span className="leftArrow">
                          <p>Skip</p>
                        </span>
                      )}
                    </div>
                  </button>
                )} */}

                <button
                  className="btn-next"
                  // style={{ background: "red" }}
                  type="submit"
                  onClick={handleNext()}
                >
                  <span>{isLastStep ? "Submit" : "Continue"} </span>

                  {/* <span className="rightArrow">
                    <div>
                      <img src={next} alt="back" />
                    </div>
                  </span> */}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalLoanForm;
