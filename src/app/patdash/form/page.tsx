"use client";

import { useState } from "react";
import "@/app/globals.css";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Schema Validation with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.preprocess((val) => Number(val) || 0, z.number().min(0, "Age cannot be negative")),
  gender: z.string().nonempty("Gender is required"),
  bloodType: z.string().nonempty("Blood Type is required"),
  symptoms: z.array(z.string()).optional(),
  medicalHistory: z.string().optional(),
  smoking: z.string().nonempty("Please select an option"),
  alcohol: z.string().nonempty("Please select an option"),
  stressLevel: z.preprocess((val) => Number(val) || 5, z.number().min(1).max(10)),
  lastCheckup: z.union([z.date(),z.null(), z.string().transform((val) => new Date(val)).optional()]),
});

const HealthForm = () => {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0, // Ensure `age` is initialized
      gender: "",
      bloodType: "",
      symptoms: [],
      medicalHistory: "",
      smoking: "",
      alcohol: "",
      stressLevel: 5,
      lastCheckup: null, // Ensure `null` instead of undefined
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  const symptomsList = ["Fever", "Cough", "Fatigue", "Shortness of Breath", "Headache", "Nausea"];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Health Assessment Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="font-semibold">Full Name</label>
              <Input {...register("name")} placeholder="Enter your name" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Age */}
            <div>
              <label className="font-semibold">Age</label>
              <Input 
                type="number" 
                {...register("age", { valueAsNumber: true })} 
                placeholder="Enter your age" 
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className="font-semibold">Gender</label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Other" },
                    ]}
                    placeholder="Select Gender"
                    onChange={(selected) => field.onChange(selected?.value || "")}
                    value={field.value ? { value: field.value, label: field.value } : null}
                  />
                )}
              />
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </div>

            {/* Blood Type */}
            <div>
              <label className="font-semibold">Blood Type</label>
              <Controller
                name="bloodType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "A+", label: "A+" },
                      { value: "A-", label: "A-" },
                      { value: "B+", label: "B+" },
                      { value: "B-", label: "B-" },
                      { value: "O+", label: "O+" },
                      { value: "O-", label: "O-" },
                      { value: "AB+", label: "AB+" },
                      { value: "AB-", label: "AB-" },
                    ]}
                    placeholder="Select Blood Type"
                    onChange={(selected) => field.onChange(selected?.value || "")}
                    value={field.value ? { value: field.value, label: field.value } : null}
                  />
                )}
              />
              {errors.bloodType && <p className="text-red-500 text-sm">{errors.bloodType.message}</p>}
            </div>

            {/* Symptoms */}
            <div>
              <label className="font-semibold">Symptoms</label>
              <div className="grid grid-cols-2 gap-2">
                {symptomsList.map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <Checkbox
                      id={symptom}
                      checked={(watch("symptoms") ?? []).includes(symptom)}
                      onCheckedChange={(checked) => {
                        const currentSymptoms = watch("symptoms") ?? [];
                        if (checked) setValue("symptoms", [...currentSymptoms, symptom]);
                        else setValue("symptoms", currentSymptoms.filter((s) => s !== symptom));
                      }}
                    />
                    <label htmlFor={symptom}>{symptom}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical History */}
            <div>
              <label className="font-semibold">Medical History</label>
              <Textarea {...register("medicalHistory")} placeholder="Describe past illnesses, surgeries, or conditions" />
            </div>

            {/* Last Checkup */}
            <div>
              <label className="font-semibold">Last Medical Checkup</label>
              <Controller
                name="lastCheckup"
                control={control}
                render={({ field }) => (
                  <DatePicker 
                    className="w-full p-2 border rounded" 
                    selected={field.value ? new Date(field.value) : null} 
                    onChange={(date) => field.onChange(date)} 
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white">Submit Form</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthForm;
