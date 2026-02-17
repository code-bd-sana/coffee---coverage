export const propertyConfig = [
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "property_info", // step identifier
    fields: [
      {
        type: "address",
        name: "property_address", // unique name
        placeholder: "Enter your address",
        label: "Property Address",
      },
      {
        type: "email",
        name: "mailing_address", // unique name (fixed spelling)
        placeholder: "Email",
        label: "Mailing Address*",
      },
      {
        type: "date",
        name: "date_of_birth", // unique name
        label: "Date of Birth",
      },
    ],
  },

  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    stepId: "contact_info",
    fields: [
      {
        type: "email",
        name: "email_address", // unique name
        placeholder: "Enter your Email....",
        label: "Email",
      },
      {
        type: "tel",
        name: "phone_number", // unique name
        placeholder: "Enter your phone number....",
        label: "Phone Number",
      },
    ],
  },

  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "closing_time_info",
    fields: [
      {
        type: "email",
        name: "estimated_closing_time", // unique name (fixed spelling)
        placeholder: "Select Your Time",
        label: "Estimated Closing Time",
      },
      {
        type: "address",
        name: "current_address", // unique name (fixed spelling)
        placeholder: "Search Address",
        label: "Current Address",
      },
    ],
  },

  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "occupancy_info",
    fields: [
      {
        type: "select",
        name: "occupancy_type", // unique name
        placeholder: "Select Occupancy Type",
        label: "Occupancy",
        options: [
          { label: "Annual", value: "annual" },
          { label: "Monthly", value: "monthly" },
          { label: "Daily", value: "daily" },
        ],
      },
    ],
  },

  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "rental_info",
    fields: [
      {
        type: "select",
        name: "rental_length", // unique name
        placeholder: "Select",
        label: "Rental Length",
        options: [
          { label: "Annual", value: "annual" },
          { label: "Monthly", value: "monthly" },
          { label: "Daily", value: "daily" },
        ],
      },
    ],
  },

  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "document_upload",
    fields: [
      {
        type: "file",
        name: "uploaded_file", // unique name
        placeholder: "Select file",
        label: "Upload your file",
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
