CREATE TABLE "blood_report" (
	"id" serial PRIMARY KEY NOT NULL,
	"lab_name" text,
	"pat_ref" integer,
	"date_of_checkup" date,
	"hemoglobin" integer,
	"rbc_count" integer,
	"wbc_count" integer,
	"plt_count" integer
);
--> statement-breakpoint
CREATE TABLE "doctor_note" (
	"id" serial PRIMARY KEY NOT NULL,
	"pat_ref" integer,
	"note" text,
	"br_ref" integer,
	"sugar_ref" integer,
	"prescrip_ref" integer,
	"urine_ref" integer,
	"ecg_ref" integer,
	"lipid_ref" integer
);
--> statement-breakpoint
CREATE TABLE "Doctor" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"phone_no" text,
	"clinic_address" text,
	"specialization" text,
	CONSTRAINT "Doctor_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "ECG" (
	"id" serial PRIMARY KEY NOT NULL,
	"pat_ref" integer,
	"file_url" text
);
--> statement-breakpoint
CREATE TABLE "Lab" (
	"id" serial PRIMARY KEY NOT NULL,
	"new_report" text,
	"date" date,
	"doc_ref" integer,
	"bill" integer
);
--> statement-breakpoint
CREATE TABLE "lipid" (
	"id" serial PRIMARY KEY NOT NULL,
	"pat_ref" integer,
	"cholesterol" integer,
	"hdl" integer,
	"ldl" integer
);
--> statement-breakpoint
CREATE TABLE "PatientData" (
	"id" serial PRIMARY KEY NOT NULL,
	"phone" text,
	"address" text,
	"age" integer,
	"occupation" text,
	"sex" text,
	"current_checkup_date" date,
	"last_checkup_date" date,
	"diagnosis" text,
	"pat_ref" integer
);
--> statement-breakpoint
CREATE TABLE "Patient" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"doc_ref" integer,
	CONSTRAINT "Patient_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "pharmacy" (
	"id" serial PRIMARY KEY NOT NULL,
	"pres_ref" integer,
	"doc_ref" integer,
	"patient_ref" integer,
	"bill" integer,
	"availability" text
);
--> statement-breakpoint
CREATE TABLE "prescription_data" (
	"id" serial PRIMARY KEY NOT NULL,
	"pat_ref" integer,
	"prescription_data" text
);
--> statement-breakpoint
CREATE TABLE "sugar_report" (
	"id" serial PRIMARY KEY NOT NULL,
	"lab_name" text,
	"glucose" integer,
	"pat_ref" integer,
	"date_of_checkup" date
);
--> statement-breakpoint
CREATE TABLE "urine_test" (
	"id" serial PRIMARY KEY NOT NULL,
	"pat_ref" integer,
	"color" text,
	"ph" integer,
	"blood_presence" text
);
--> statement-breakpoint
ALTER TABLE "blood_report" ADD CONSTRAINT "blood_report_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_br_ref_blood_report_id_fk" FOREIGN KEY ("br_ref") REFERENCES "public"."blood_report"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_sugar_ref_sugar_report_id_fk" FOREIGN KEY ("sugar_ref") REFERENCES "public"."sugar_report"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_urine_ref_urine_test_id_fk" FOREIGN KEY ("urine_ref") REFERENCES "public"."urine_test"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_ecg_ref_ECG_id_fk" FOREIGN KEY ("ecg_ref") REFERENCES "public"."ECG"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doctor_note" ADD CONSTRAINT "doctor_note_lipid_ref_lipid_id_fk" FOREIGN KEY ("lipid_ref") REFERENCES "public"."lipid"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ECG" ADD CONSTRAINT "ECG_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Lab" ADD CONSTRAINT "Lab_doc_ref_Doctor_id_fk" FOREIGN KEY ("doc_ref") REFERENCES "public"."Doctor"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lipid" ADD CONSTRAINT "lipid_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "PatientData" ADD CONSTRAINT "PatientData_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_doc_ref_Doctor_id_fk" FOREIGN KEY ("doc_ref") REFERENCES "public"."Doctor"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pharmacy" ADD CONSTRAINT "pharmacy_doc_ref_Doctor_id_fk" FOREIGN KEY ("doc_ref") REFERENCES "public"."Doctor"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pharmacy" ADD CONSTRAINT "pharmacy_patient_ref_Patient_id_fk" FOREIGN KEY ("patient_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prescription_data" ADD CONSTRAINT "prescription_data_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sugar_report" ADD CONSTRAINT "sugar_report_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "urine_test" ADD CONSTRAINT "urine_test_pat_ref_Patient_id_fk" FOREIGN KEY ("pat_ref") REFERENCES "public"."Patient"("id") ON DELETE cascade ON UPDATE no action;