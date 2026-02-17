export const condosConfig = [
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "boat_info", // step identifier
    fields: [
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
    ],
  },
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "How can I find you?",
    stepId: "boat_info", // step identifier
    fields: [
      {
        type: "email",
        name: "email", // unique name
        placeholder: "Enter your Email....",
        label: "Email",
      },

      {
        type: "tel",
        name: "phoneNumber", // unique name
        label: "Phone Number",
        placeholder: "Enter your phone number....",
      },
    ],
  },
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "Driver Information",
    stepId: "boat_info", // step identifier

    fields: [
      {
        type: "number",
        name: "licenseNumber", // unique name
        placeholder: "Add Number",
        label: "Driver License Number",
      },
    ],
  },
  {
    title: "Hi There!",
    description: "Let's get to know you, so we can find the best solution.",
    context: "Vehicle Information",
    stepId: "boat_info", // step identifier

    fields: [
      {
        type: "file",
        name: "uploaded_file",
        label: "Upload your file",
        isButon: true,
      },
      {
        type: "text",
        name: "hullId", // unique name
        placeholder: "Enter Your Hull Id",
        label: "Hull Id",
      },
      {
        type: "text",
        name: "carModel", // unique name
        placeholder: "Enter Your Car Model",
        label: "Car Model",
      },
      {
        type: "date",
        name: "year", // unique name
        placeholder: "Enter Year",
        label: "Year",
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
