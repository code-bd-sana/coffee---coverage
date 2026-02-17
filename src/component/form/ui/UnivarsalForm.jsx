"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiPlus, FiUpload } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import image1 from "../../../../public/form.jpg";
import image2 from "../../../../public/form2.jpg";
import AddressAutocomplete from "./AddressAutocomplete";
import DateTimePicker from "./DateTimePicker";

const UnivarsalForm = ({
  config = [],
  onFormChange,
  onStepChange,
  onSubmit,
}) => {
  // Default 3 steps
  const defaultSteps = [
    { type: "welcome", image: image1 },
    { type: "info", image: image2 },
    { type: "form", image: image2 },
  ];

  // Modal state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentUploadField, setCurrentUploadField] = useState(null);

  const renderField = (field, formData, handleChange) => {
    const { type, name, placeholder, options, label, isButon } = field;

    if (type === "address") {
      return (
        <AddressAutocomplete
          field={field}
          formData={formData}
          handleChange={handleChange}
        />
      );
    }
    if (type === "datetime") {
      return (
        <DateTimePicker
          field={field}
          formData={formData}
          handleChange={handleChange}
        />
      );
    }

    switch (type) {
      case "text":
      case "email":
      case "tel":
      case "password":
      case "number":
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
            />
          </div>
        );

      case "textarea":
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <textarea
              name={name}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors min-h-[120px]'
            />
          </div>
        );

      case "radio":
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <div className='flex gap-6 flex-wrap'>
              {options?.map((opt) => (
                <label
                  key={opt.value}
                  className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='radio'
                    name={name}
                    value={opt.value}
                    checked={formData[name] === opt.value}
                    onChange={(e) => handleChange(name, e.target.value)}
                    className='w-4 h-4 text-[#633826] focus:ring-[#633826]'
                  />
                  <span className='text-gray-700'>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case "select":
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <select
              name={name}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors bg-white'>
              <option value=''>Select {placeholder || "an option"}</option>
              {options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );

      case "date":
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <input
              type='date'
              name={name}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
            />
          </div>
        );

      case "file":
        // If isButon is true, show button style upload
        if (isButon) {
          return (
            <div className='mb-4'>
              {/* {label && (
                <label className='block text-gray-700 font-medium mb-2'>
                  {label}
                </label>
              )} */}
              <div className='relative flex -mt-12 justify-end '>
                <button
                  type='button'
                  onClick={() => {
                    setCurrentUploadField(field);
                    setShowUploadModal(true);
                  }}
                  className=' px-8  py-2 border-2 cursor-pointer  border-[#633826] rounded-lg  text-[#633826] font-medium hover:bg-[#633826]/10 transition-all duration-300 flex items-center justify-end gap-2'>
                  <FiPlus className='text-xl' />
                  <span>Add License</span>
                </button>
              </div>
              {/* Show uploaded file info */}
              {formData[name] && (
                <div className='mt-2 p-3 bg-green-50 border border-green-200 rounded-lg'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <span className='text-green-600'>📎</span>
                      <span className='text-sm text-gray-700 font-medium'>
                        {formData[name].name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleChange(name, null)}
                      className='text-red-500 hover:text-red-700'>
                      <IoClose />
                    </button>
                  </div>
                  <div className='mt-1 flex justify-between text-xs'>
                    <span className='text-gray-500'>
                      Type: {formData[name].type}
                    </span>
                    <span className='text-gray-500'>
                      {(formData[name].size / 1024).toFixed(2)} KB
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        }

        // Regular file input
        return (
          <div className='mb-4'>
            {label && (
              <label className='block text-gray-700 font-medium mb-2'>
                {label}
              </label>
            )}
            <div className='relative'>
              <input
                type='file'
                name={name}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const fileInfo = {
                      name: file.name,
                      size: file.size,
                      type: file.type,
                      lastModified: file.lastModified,
                      data: file,
                    };
                    handleChange(name, fileInfo);

                    const reader = new FileReader();
                    reader.onloadend = () => {
                      handleChange(`${name}_base64`, reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#633826] file:text-white hover:file:bg-[#7a4a2e] cursor-pointer'
                accept='.jpg,.jpeg,.png,.pdf,.doc,.docx'
              />
            </div>
            {formData[name] && (
              <div className='mt-2 p-3 bg-green-50 border border-green-200 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='text-green-600'>📎</span>
                    <span className='text-sm text-gray-700 font-medium'>
                      {formData[name].name}
                    </span>
                  </div>
                  <span className='text-xs text-gray-500'>
                    {(formData[name].size / 1024).toFixed(2)} KB
                  </span>
                </div>
                <div className='mt-1 text-xs text-gray-500'>
                  Type: {formData[name].type}
                </div>
              </div>
            )}
          </div>
        );

      case "checkbox":
        return (
          <div className='mb-4'>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='checkbox'
                name={name}
                checked={formData[name] || false}
                onChange={(e) => handleChange(name, e.target.checked)}
                className='w-5 h-5 text-[#633826] focus:ring-[#633826] rounded'
              />
              <span className='text-gray-700'>{label}</span>
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  const steps = [
    ...defaultSteps,
    ...config.map((item, index) => ({
      type: "dynamic",
      ...item,
      image: image2,
      id: `dynamic-${index}`,
    })),
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (onFormChange) {
      onFormChange(formData);
    }
  }, [formData, onFormChange]);

  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStep);
    }
  }, [currentStep, onStepChange]);

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file) => {
    if (currentUploadField && file) {
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        data: file,
      };
      handleChange(currentUploadField.name, fileInfo);

      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange(`${currentUploadField.name}_base64`, reader.result);
      };
      reader.readAsDataURL(file);

      setShowUploadModal(false);
      setCurrentUploadField(null);
    }
  };

  const stepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <>
      <div className='lg:flex gap-12 min-h-screen bg-white'>
        {/* Left Section */}
        <section className='flex-1 flex justify-center items-center bg-[linear-gradient(160.09deg,#051F25_0%,#2C6573_35.1%,#479EB3_80.29%,#1A5766_100%)] p-8'>
          {stepData.image && (
            <Image
              src={stepData.image}
              alt='form image'
              className='rounded-lg object-cover w-[80%] lg:w-[600px] lg:max-h-[80vh] shadow-2xl'
              priority
            />
          )}
        </section>

        {/* Right Section */}
        <section className='flex-1 mt-12 lg:mt-0 flex flex-col justify-center px-8 lg:px-28 py-12'>
          {/* Step Content */}
          {stepData.type === "welcome" && (
            <div className='text-center lg:text-left'>
              <h1 className='text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight'>
                Welcome to{" "}
                <span className='text-[#633826]'>Coffee & Coverage</span>
              </h1>
              <p className='text-[#6B6B6B] leading-snug text-2xl lg:text-3xl mt-6'>
                Protect What Matters Most Today!
              </p>
            </div>
          )}

          {stepData.type === "info" && (
            <div className='text-left space-y-6'>
              <h1 className='text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight'>
                Save time using our{" "}
                <span className='text-[#633826]'>Shortcut</span>
              </h1>
              <p className='text-[#6B6B6B] leading-relaxed text-xl lg:text-2xl'>
                Let's get a head start. If you have an online account with your
                current insurance, sign in so we can pre-fill what they already
                know.
              </p>

              <div className='space-y-6 mt-8'>
                <div className='flex items-center gap-4'>
                  <FaRegClock className='text-[#633826] text-5xl' />
                  <div>
                    <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                      Quick
                    </h6>
                    <p className='text-base text-[#222222A8]'>
                      Signing in takes seconds.
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <MdLockOutline className='text-[#633826] text-5xl' />
                  <div>
                    <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                      Secure
                    </h6>
                    <p className='text-base text-[#222222A8]'>
                      Your information is encrypted end-to-end.
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <GoEyeClosed className='text-[#633826] text-5xl' />
                  <div>
                    <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                      Private
                    </h6>
                    <p className='text-base text-[#222222A8]'>
                      We won't store or use your credentials for anything else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {stepData.type === "form" && (
            <div className='space-y-6'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-8'>
                Your Information
              </h1>

              {stepData.fields && stepData.fields.length > 0 ? (
                stepData.fields.map((field, index) => (
                  <div key={field.name || index}>
                    {renderField(field, formData, handleChange)}
                  </div>
                ))
              ) : (
                <>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-medium mb-2'>
                      First Name
                    </label>
                    <input
                      type='text'
                      placeholder='First Name'
                      value={formData.firstName || ""}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-medium mb-2'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      placeholder='Last Name'
                      value={formData.lastName || ""}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
                    />
                  </div>
                  <div className='flex gap-4 mt-6'>
                    <input type='checkbox' className='mt-1' />
                    <p className='text-[#222222A8] text-sm'>
                      By checking this box, I consent to receive transactional
                      messages related to my account, orders, or services I have
                      requested.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {stepData.type === "dynamic" && (
            <div className='space-y-6'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4'>
                {stepData.title}
              </h1>
              {stepData.description && (
                <p className='text-[#6B6B6B] text-lg lg:text-xl mb-6'>
                  {stepData.description}
                </p>
              )}
              {stepData.context && (
                <h6 className='text-[#633826] text-lg font-medium mb-4'>
                  {stepData.context}
                </h6>
              )}

              <div className='space-y-4'>
                {stepData.fields?.map((field, index) => (
                  <div key={field.name || index}>
                    {renderField(field, formData, handleChange)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className='mt-10'>
            {!isLastStep ? (
              <button
                onClick={goNext}
                className='px-8 py-3 cursor-pointer bg-[#633826] text-white font-semibold rounded-lg hover:bg-[#7a4a2e] transition-all duration-300 ml-auto block'>
                Next
              </button>
            ) : (
              <button
                onClick={onSubmit}
                className='px-8 py-3 cursor-pointer bg-[#633826] text-white font-semibold rounded-lg hover:bg-[#7a4a2e] transition-all duration-300 ml-auto block'>
                Submit Application
              </button>
            )}
          </div>

          {/* Progress Bar with Back button */}
          <div className='flex items-center gap-4 border-t-3 mt-12 border-[#E8E8E8]'>
            {currentStep > 0 && (
              <button
                onClick={goBack}
                className='px-8 flex items-center mt-8 text-[#633826] font-semibold rounded-lg cursor-pointer transition-all duration-300'>
                <RiArrowRightSLine className='transform rotate-180' />
                <span className='ml-1'>Back</span>
              </button>
            )}
            <div className='mt-8 h-2 w-full bg-gray-200 rounded-full overflow-hidden'>
              <div
                className='h-full rounded-full transition-all duration-500 ease-in-out'
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                  backgroundColor: "#633826",
                }}
              />
            </div>
          </div>

          {/* Step Indicator */}
          <div className='mt-4 text-center text-gray-500'>
            Step {currentStep + 1} of {steps.length}
          </div>
        </section>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 '>
          <div className='bg-white rounded-xl max-w-md w-full p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-semibold text-gray-800'>
                Upload File
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setCurrentUploadField(null);
                }}
                className='text-gray-500 hover:text-gray-700'>
                <IoClose size={24} />
              </button>
            </div>

            <div className='border-2 border-gray-300 rounded-lg p-8 text-center'>
              <input
                type='file'
                id='modal-file-upload'
                className='hidden'
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleFileUpload(file);
                }}
                accept='.jpg,.jpeg,.png,.pdf,.doc,.docx'
              />
              <label
                htmlFor='modal-file-upload'
                className='cursor-pointer block'>
                <FiPlus className='text-4xl text-gray-400 mx-auto mb-3' />
                <p className='text-gray-600 mb-1'>Add License</p>
                <p className='text-sm text-gray-400'>
                  JPG, PNG, PDF, DOC (max 10MB)
                </p>
              </label>
            </div>

            <div className='mt-4 flex justify-end gap-2'>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setCurrentUploadField(null);
                }}
                className='px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnivarsalForm;
