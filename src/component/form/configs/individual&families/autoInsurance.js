export const autoConfig = [
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "auto_info", // step identifier
    fields: [
      {
        type: "file",
        name: "uploaded_file",
        label: "Upload your file",
        isButon: true,
      },
      {
        type: "address",
        name: "property_address", // unique name
        placeholder: "Enter your address",
        label: "Property Address",
      },

      {
        type: "date",
        name: "date_of_birth", // unique name
        label: "Date of Birth",
      },
      {
        type: "select",
        name: "services", // unique name
        placeholder: "Services",
        label: "Services *",
        options: [
          {
            label: "Bodily Injury & Property Damage",
            value: "Bodily Injury & Property Damage",
          },
          { label: "Uninsured Motorist", value: "Uninsured Motorist" },
          {
            label: "Personal Injury Protection",
            value: "Personal Injury Protection",
          },
          {
            label: "Medical Payment",
            value: "Medical Payment",
          },
          {
            label: "Comprehensive Deductible",
            value: "Comprehensive Deductible",
          },
          {
            label: "Collision Deductible",
            value: "Collision Deductible",
          },
          {
            label: "Towing/Trip Interruption",
            value: "Towing/Trip Interruption",
          },
          {
            label: "Custom Parts & Equipment",
            value: "Custom Parts & Equipment",
          },
        ],
      },
    ],
  },

  {
    title: "Schedule Your Meeting",
    description: "Please select your preferred date and time for the meeting.",
    context: "Meeting Schedule",
    stepId: "meeting_schedule",
    fields: [
      {
        type: "datetime",
        name: "meeting_schedule", // unique name
        label: "Select Time and Date",
      },
    ],
  },

  {
    title: "Additional Details",
    description: "",
    context: "Enter Details",
    stepId: "additional_info",
    fields: [
      {
        type: "textarea",
        name: "additional_information", // unique name added
        label: "Additional Information",
        placeholder:
          "Is there anything you would like us to know before your appointment?",
      },
      {
        type: "text",
        name: "guest_count", // unique name added
        label: "Add Guest Count",
        placeholder: "Add Guest Count",
      },
    ],
  },
];
