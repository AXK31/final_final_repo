import { pgTable, serial, text, integer, date, primaryKey } from 'drizzle-orm/pg-core';


export const patients = pgTable('Patient', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  doc_ref: integer().references(() => doctors.id, { onDelete: 'cascade' })
});


export const doctors = pgTable('Doctor', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  phoneNo: text('phone_no'),
  clinicAddress: text('clinic_address'),
  specialization: text('specialization')
});


export const patientData = pgTable('PatientData', {
  id: serial('id').primaryKey(),
  phone: text('phone'),
  address: text('address'),
  age: integer('age'),
  occupation: text('occupation'),
  sex: text('sex'),
  currentCheckupDate: date('current_checkup_date'),
  lastCheckupDate: date('last_checkup_date'),
  diagnosis: text('diagnosis'),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' })
});

export const bloodReport = pgTable('blood_report', {
  id: serial('id').primaryKey(),
  labName: text('lab_name'),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  dateOfCheckup: date('date_of_checkup'),
  hemoglobin: integer('hemoglobin'),
  rbcCount: integer('rbc_count'),
  wbcCount: integer('wbc_count'),
  pltCount: integer('plt_count')
});


export const urineTest = pgTable('urine_test', {
  id: serial('id').primaryKey(),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  color: text('color'),
  ph: integer('ph'),
  bloodPresence: text('blood_presence')
});


export const sugarReport = pgTable('sugar_report', {
  id: serial('id').primaryKey(),
  labName: text('lab_name'),
  glucose: integer('glucose'),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  dateOfCheckup: date('date_of_checkup')
});

export const lipid = pgTable('lipid', {
  id: serial('id').primaryKey(),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  cholesterol: integer('cholesterol'),
  hdl: integer('hdl'),
  ldl: integer('ldl')
});

export const ecg = pgTable('ECG', {
  id: serial('id').primaryKey(),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  fileUrl: text('file_url')
});


export const doctorNote = pgTable('doctor_note', {
  id: serial('id').primaryKey(),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  note: text('note'),
  br_ref: integer().references(() => bloodReport.id, { onDelete: 'cascade' }),
  sugar_ref: integer().references(() => sugarReport.id, { onDelete: 'cascade' }),
  prescrip_ref: integer(),
  urine_ref: integer().references(() => urineTest.id, { onDelete: 'cascade' }),
  ecg_ref: integer().references(() => ecg.id, { onDelete: 'cascade' }),
  lipid_ref: integer().references(() => lipid.id, { onDelete: 'cascade' }),

});


export const pharmacy = pgTable('pharmacy', {
  id: serial('id').primaryKey(),
  pres_ref: integer(),
  doc_ref: integer().references(() => doctors.id, { onDelete: 'cascade' }),
  patient_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  bill: integer('bill'),
  availability: text('availability')
});


export const prescriptionData = pgTable('prescription_data', {
  id: serial('id').primaryKey(),
  pat_ref: integer().references(() => patients.id, { onDelete: 'cascade' }),
  prescription_data: text()
});

export const lab = pgTable('Lab', {
  id: serial('id').primaryKey(),
  newReport: text('new_report'),
  date: date('date'),
  doc_ref: integer().references(() => doctors.id, { onDelete: 'cascade' }),
  bill: integer('bill')
});
