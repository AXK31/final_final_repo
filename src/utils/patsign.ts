'use server'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function patsign(formdata: FormData) {

try {
    
    const name =   await formdata.get("patname") as string
    const mail =   await formdata.get("patmail") as string
    const pass =   await formdata.get("confirm_pass") as string
    console.log(name,mail,pass)
    const hashedPassword = await bcrypt.hash(pass, 10);
    
    try {
        await prisma.patient.create({
          data: {
            name: name,
            email: mail,
            password: hashedPassword,
            doc_ref:12
         
          },
        });
        redirect("@/app/patient/patlogin")
        return { success: "Account created successfully!" };
      } catch (error) {
        console.error("Database error:", error);
        return { error: "Database error. Please try again later." };
      }



} catch (error) {
    
    console.log(error)
}


}