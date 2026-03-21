import { Helmet } from "@/compat/react-helmet-async";

interface MedicalConditionSchemaProps {
  name: string;
  alternateName?: string[];
  description: string;
  code?: {
    codingSystem: string;
    codeValue: string;
  };
  associatedAnatomy?: string[];
  possibleTreatment?: Array<{
    name: string;
    description: string;
  }>;
  riskFactor?: string[];
  signOrSymptom?: string[];
}

export const MedicalConditionSchema = ({
  name,
  alternateName,
  description,
  code,
  associatedAnatomy,
  possibleTreatment,
  riskFactor,
  signOrSymptom
}: MedicalConditionSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": name,
    "description": description,
    ...(alternateName && { "alternateName": alternateName }),
    ...(code && {
      "code": {
        "@type": "MedicalCode",
        "codingSystem": code.codingSystem,
        "codeValue": code.codeValue
      }
    }),
    ...(associatedAnatomy && {
      "associatedAnatomy": associatedAnatomy.map(anatomy => ({
        "@type": "AnatomicalStructure",
        "name": anatomy
      }))
    }),
    ...(possibleTreatment && {
      "possibleTreatment": possibleTreatment.map(treatment => ({
        "@type": "MedicalTherapy",
        "name": treatment.name,
        "description": treatment.description
      }))
    }),
    ...(riskFactor && { "riskFactor": riskFactor }),
    ...(signOrSymptom && {
      "signOrSymptom": signOrSymptom.map(symptom => ({
        "@type": "MedicalSignOrSymptom",
        "name": symptom
      }))
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
