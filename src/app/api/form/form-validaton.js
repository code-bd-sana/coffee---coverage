const { default: z } = require("zod");

export const formDataSchema = z.object({
  firstName: z.string({ message: "Name must be a string" }),
  lastName: z.string({ message: "Last Name Must be String" }),
  adress: z.string({ message: "Adress must be srting" }),
  email: z.email({ message: "Email Is must be Type of Email" }),
  dob: z.date({ message: "Date of Birth must be a date" }),
});
