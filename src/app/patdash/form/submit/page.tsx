"use client";
import "@/app/globals.css";


import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const FormSubmitPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [healthScore, setHealthScore] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!searchParams) return;

    const params = Object.fromEntries(searchParams.entries());
    setFormData(params);
    calculateHealthScore(params);
  }, [searchParams]);

  const calculateHealthScore = (data: Record<string, string>) => {
    let score = 100;

    if (data.age && Number(data.age) > 50) score -= 10;
    if (data.smoking === "yes") score -= 20;
    if (data.alcohol === "yes") score -= 10;
    if (data.stressLevel) score -= Number(data.stressLevel);

    const symptoms = data.symptoms ? data.symptoms.split(",") : [];
    score -= symptoms.length * 5;

    setHealthScore(Math.max(score, 0));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-300 to-white p-6">
      <Card className="w-full max-w-xl shadow-xl rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-blue-600 text-white py-6">
          <CardTitle className="text-2xl font-bold">Form Submission Details</CardTitle>
        </CardHeader>
        <CardContent className="text-left p-6">
          <div className="space-y-3 text-gray-800">
            <p><span className="font-semibold">🧑 Name:</span> {formData.name || "Not provided"}</p>
            <p><span className="font-semibold">🎂 Age:</span> {formData.age || "Not specified"}</p>
            <p><span className="font-semibold">⚧ Gender:</span> {formData.gender || "Not mentioned"}</p>
            <p><span className="font-semibold">🩸 Blood Type:</span> {formData.bloodType || "Unknown"}</p>
            <p><span className="font-semibold">🤒 Symptoms:</span> {formData.symptoms || "None reported"}</p>
            <p><span className="font-semibold">📜 Medical History:</span> {formData.medicalHistory || "No history provided"}</p>
            <p><span className="font-semibold">🚬 Smoking:</span> {formData.smoking || "No"}</p>
            <p><span className="font-semibold">🍷 Alcohol Consumption:</span> {formData.alcohol || "No"}</p>
            <p><span className="font-semibold">😰 Stress Level:</span> {formData.stressLevel || "Unknown"}</p>
            <p><span className="font-semibold">📅 Last Checkup:</span> {formData.lastCheckup || "Not specified"}</p>
          </div>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold text-gray-700 text-center">Health Score</h2>
          {healthScore !== null ? (
            <>
              <div className="text-4xl font-extrabold text-green-600 text-center mt-4">{healthScore}</div>
              <div className="w-full mt-4">
                <Progress value={healthScore} />
              </div>
              <p className="mt-4 text-center text-gray-600">
                {healthScore > 80
                  ? "✅ Great! Keep maintaining your health."
                  : healthScore > 50
                  ? "⚠ Moderate condition. Stay cautious!"
                  : "🚨 Low health score! Consider consulting a doctor."}
              </p>
            </>
          ) : (
            <p className="text-gray-600 text-center">Calculating your health score...</p>
          )}

          <Button
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => router.push("/patdash")}
          >
            🔙 Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormSubmitPage;