import { cn } from "@/lib/utils"
import Link from "next/link";
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

export function LoginFormPharm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Pharmacy Login</CardTitle>
          <CardDescription>
            Enter your name and number below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="abc"
                  required
                />
              </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Mobile number</Label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="1234567890"
                  required
                />
         
              </div>
              <Link href="/docdash">
              <Button type="submit" className="w-full">
                Login
              </Button></Link>
              <Button variant="outline" className="w-full">
                Send OTP
              </Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
