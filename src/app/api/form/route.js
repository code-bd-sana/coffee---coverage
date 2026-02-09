import { NextResponse } from "next/server";
import { z } from "zod";

const formDataSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  dob: z
    .string()
    .min(1, "Date of Birth is required")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Date of Birth must be a valid date",
    }),
});

const GHL_TOKEN = "pit-4e275702-ee73-44cb-af67-a0bc655286fb";
const LOCATION_ID = "zig8GGW6htg7JIwZ9rYk"; // <-- এখানে location ID বসাও

export const POST = async (req) => {
  const data = await req.json();

  // Validate form data
  const parsedData = formDataSchema.parse(data);
  const contactRes = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_TOKEN}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      firstName: parsedData.firstName,
      lastName: parsedData.lastName,
      email: parsedData.email,
      phone: parsedData.address,
      locationId: LOCATION_ID,
    }),
  });

  console.log(contactRes, "contact res is here");
  try {
    // 1️⃣ Create Contact

    const contactData = await contactRes.json();
    const contactId = contactData.contact.id; // contact id

    // 2️⃣ Create Opportunity
    const opportunityRes = await fetch(
      "https://rest.gohighlevel.com/v1/opportunities/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_TOKEN}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          title: `Lead: ${parsedData.firstName} ${parsedData.lastName}`,
          status: "open",
          pipelineId: "zig8GGW6htg7JIwZ9rYk", // pipeline ID বসাও
          pipelineStageId: "zig8GGW6htg7JIwZ9rYk", // stage ID বসাও
          contactId: contactId,
          monetaryValue: 0, // optional
          source: "Website Form",
        }),
      },
    );

    console.log(opportunityData, "ami holam ooppriuie ");

    const opportunityData = await opportunityRes.json();

    return NextResponse.json(
      {
        message: "Success",
        contact: contactData,
        opportunity: opportunityData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error, "kire amdari marka error");
    if (error instanceof z.ZodError) {
      const fieldErrors = error.issues.reduce((acc, curr) => {
        const fieldName = curr.path[0];
        acc[fieldName] = curr.message;
        return acc;
      }, {});

      return NextResponse.json(
        { message: "Validation failed", error, errors: fieldErrors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: error.message, error },
      { status: 500 },
    );
  }
};
