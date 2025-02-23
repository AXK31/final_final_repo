'use server'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function patsign(formdata: FormData) {

    const name = formdata.get("")
    const mail = formdata.get("")
    const phone = formdata.get("")

try {
    
  
    
    try {
        await prisma.doctor.create({
          data: {
           
         
          },
        });
        return { success: "Account created successfully!" };
      } catch (error) {
        console.error("Database error:", error);
        return { error: "Database error. Please try again later." };
      }



} catch (error) {
    
    console.log(error)
}


}