"use client";
import { propertyConfig } from "@/component/form/configs/individual&families/propertyInsurance";
import UnivarsalForm from "@/component/form/ui/UnivarsalForm";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const item = params.item;
  console.log(item, "eita ekta item");

  const config = [
    {
      title: "Contact Details",
      description: "Fill in your contact info",
      fields: [
        { type: "text", name: "email", placeholder: "Email" },
        { type: "text", name: "phone", placeholder: "Phone Number" },
        {
          type: "radio",
          name: "gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        {
          type: "select",
          name: "country",
          placeholder: "Country",
          options: [
            { label: "USA", value: "usa" },
            { label: "UK", value: "uk" },
            { label: "Bangladesh", value: "bd" },
          ],
        },
        { type: "date", name: "dob" },
        { type: "file", name: "resume" },
      ],
    },
    {
      title: "Contact Details",
      description: "Fill in your contact info",
      fields: [
        { type: "text", name: "email", placeholder: "Email" },
        { type: "text", name: "phone", placeholder: "Phone Number" },
        {
          type: "radio",
          name: "gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        {
          type: "select",
          name: "country",
          placeholder: "Country",
          options: [
            { label: "USA", value: "usa" },
            { label: "UK", value: "uk" },
            { label: "Bangladesh", value: "bd" },
          ],
        },
        { type: "date", name: "dob" },
        { type: "file", name: "resume" },
      ],
    },
    {
      title: "Contact Details",
      description: "Fill in your contact info",
      fields: [
        { type: "text", name: "email", placeholder: "Email" },
        { type: "text", name: "phone", placeholder: "Phone Number" },
        {
          type: "radio",
          name: "gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        {
          type: "select",
          name: "country",
          placeholder: "Country",
          options: [
            { label: "USA", value: "usa" },
            { label: "UK", value: "uk" },
            { label: "Bangladesh", value: "bd" },
          ],
        },
        { type: "date", name: "dob" },
        { type: "file", name: "resume" },
      ],
    },
  ];

  return (
    <div>
      <h1>
        <UnivarsalForm config={propertyConfig} />
      </h1>
    </div>
  );
};

export default page;
