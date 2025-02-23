'use client'
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { patsign } from "@/utils/patsign";

export function SigninFormPat({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
 
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to patient Signup</CardTitle>
          <CardDescription>
            Enter your name and email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form  action={patsign}>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="patname"
                  placeholder="abc"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="patmail"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  
                </div>
                <Input id="password" type="password" required name="entered_pass"/>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                  
                </div>
                <Input id="password" type="password" required name="confirm_pass"/>
              </div>
            
              <Button type="submit"  className="w-full">
                Signup
              </Button>
              <Button variant="outline" className="w-full">
                Signup with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/patient/patlogin" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}