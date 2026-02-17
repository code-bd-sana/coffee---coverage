"use client";
import { autoConfig } from "@/component/form/configs/individual&families/autoInsurance";
import { boatConfig } from "@/component/form/configs/individual&families/boatInsurance";
import { condosConfig } from "@/component/form/configs/individual&families/condos";
import { propertyConfig } from "@/component/form/configs/individual&families/propertyInsurance";
import UnivarsalForm from "@/component/form/ui/UnivarsalForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [itemType, setItemType] = useState("general");
  const [formConfig, setFormConfig] = useState(propertyConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      let item = "general";

      if (params?.item) {
        item = Array.isArray(params.item) ? params.item[0] : params.item;
        setItemType(item);
      }

      console.log("Current item from params:", item);

      console.log("Auto config available:", autoConfig ? "Yes" : "No");

      switch (item) {
        case "property":
        case "property-insurance":
          console.log("Loading property config");
          setFormConfig(propertyConfig);
          break;
        case "business":
        case "business-insurance":
          console.log("Loading business config");
          setFormConfig(propertyConfig);
          break;
        case "boat":
        case "boat-insurance":
          console.log("Loading business config");
          setFormConfig(boatConfig);
          break;
        case "condos":
        case "condos-insurance":
          console.log("Loading business config");
          setFormConfig(condosConfig);
          break;
        case "auto":
        case "auto-insurance":
          console.log("Loading auto config");
          if (autoConfig) {
            setFormConfig(autoConfig);
            console.log("Auto config loaded:", autoConfig.length, "steps");
          } else {
            console.error("Auto config is undefined!");
            setFormConfig(propertyConfig); // fallback
          }
          break;
        default:
          console.log("Loading default property config");
          setFormConfig(propertyConfig);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error loading config:", error);
      setFormConfig(propertyConfig);
      setLoading(false);
    }
  }, [params]);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    const payload = {
      ...formData,
      metadata: {
        item_type: itemType,
        submitted_at: new Date().toISOString(),
        form_version: "1.0.0",
        total_steps: formConfig.length + 3,
        completed_steps: currentStep + 1,
        timestamp: Date.now(),
      },
    };

    console.log("\n" + "=".repeat(50));
    console.log("📦 FORM SUBMISSION PAYLOAD");
    console.log("=".repeat(50));
    console.log(JSON.stringify(payload, null, 2));
    console.log("=".repeat(50) + "\n");
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-[#633826] border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <UnivarsalForm
        config={formConfig}
        onFormChange={handleFormChange}
        onStepChange={handleStepChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Page;
