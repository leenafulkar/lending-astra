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
import { AutoLoanData } from "./JsonData.js";

const AutoLoanForm = (props) => {
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

  const steps = AutoLoanData;

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
        setIsLoadingSub(false);

        // window.location.href = "submited";

        // alert(JSON.stringify(data));
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
                  // onClick={navigate("/form-personal-loan")}
                >
                  <span>{isLastStep ? "Final Submit" : "Continue"} </span>

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

export default AutoLoanForm;
