import { Mail, MailOpen, Send } from "lucide-react"
import { Separator } from "./ui/separator"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"



type Props = {}

const RightBar = (props: Props) => {

    const {theme} = useTheme()

  return (
    <section className="col-span-3 p-3  border-l border-gray-800 ">
                <div className={cn("bg-gray-800 rounded-md p-2" , {"bg-slate-200" : theme === "light"})} >
                    <h1 className="text-sm font-semibold" >Lead Details</h1>
                </div>
                <div className="flex flex-col  gap-5 mt-3">
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Name</p>
                        <p className="text-sm text-muted-foreground" >Orlando</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Email</p>
                        <p className="text-sm text-muted-foreground" >orlando@gmail.com</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Contact No.</p>
                        <p className="text-sm text-muted-foreground" >+1 123 456 7890</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Linkedin</p>
                        <p className="text-sm text-muted-foreground" >linkedin.com/in/timvadde/</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Company Name</p>
                        <p className="text-sm text-muted-foreground" >Reachinbox</p>
                    </div>
                </div>
                <div className={cn("bg-gray-800 rounded-md p-2 mt-4" , {"bg-slate-200" : theme === "light"})} >
                    <h1 className="text-sm font-semibold" >Activities</h1>
                </div>
                <div className="flex flex-col p-3">
                    <div className="mt-2">
                        <h2 className="text-sm font-semibold" >Campaign Name</h2>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-5">
                        <p className="text-sm">
                            3 Steps
                        </p>
                        <Separator className="h-6 " orientation="vertical" />
                        <p className="text-sm">
                            5 Days in Sequence
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-start items-center gap-4 p-3">
                    <div className={cn("rounded-full border border-slate-500 bg-gray-800 w-fit p-2" , {"bg-slate-200" : theme === "light"})} >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 1: Email</p>
                        <div className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground" >sent <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                    <Separator className="h-12 absolute -bottom-5 left-8 -z-10" orientation="vertical" />
                </div>
                <div className="relative flex justify-start items-center gap-4 p-3">
                    <div className={cn("rounded-full border border-slate-500 bg-gray-800 w-fit p-2" , {"bg-slate-200" : theme === "light"})} >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 2: Email</p>
                        <div className="flex items-center gap-2">
                            <MailOpen className="w-4 h-4 text-yellow-400" />
                            <p className="text-sm text-muted-foreground" >opened <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                    <Separator className="h-12 absolute -bottom-5 left-8 -z-10" orientation="vertical" />
                </div>
                <div className="flex justify-start items-center gap-4 p-3">
                    <div className={cn("rounded-full border border-slate-500 bg-gray-800 w-fit p-2" , {"bg-slate-200" : theme === "light"})}  >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 3: Email</p>
                        <div className="flex items-center gap-2">
                            <MailOpen className="w-4 h-4 text-yellow-400" />
                            <p className="text-sm text-muted-foreground" >opened <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default RightBar