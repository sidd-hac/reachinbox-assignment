"use client"
import { Send } from "lucide-react"
import { Separator } from "./ui/separator"
import { useTheme } from "next-themes"
import { cn, formatDate, truncateContent } from "@/lib/utils"


type Props = {
    email : any
    onClick: (threadId: string) => void;
}

const MailCard = (props: Props) => {

    const { theme} = useTheme()


    const handleClick = () => {
        props.onClick(props.email.threadId); 
    }

  return (
    <div className="p-2 space-y-2 hover:cursor-pointer" onClick={handleClick}>
        <Separator className="mt-3"/>
        <div className="flex justify-between items-center mt-3" >
            <h2 className="text-md ">{truncateContent(props.email.fromEmail, 15)}</h2>
            <span className="text-xs text-muted-foreground" >{formatDate(props.email.sentAt)}</span>
        </div>
        <div>
            <p className="text-sm ">{truncateContent(props.email.subject , 30)}</p>
        </div>
        <div className="flex justify-between items-center" >
            <div className={cn("rounded-lg p-1 px-2 flex justify-center items-center gap-1 bg-gray-800 w-fit" , 
                {"bg-gray-100" : theme === "light"}
            )} >

                <span className="rounded-full bg-green-400 w-3 h-3" />
                <span className="text-green-400 text-xs">Interested</span>
            </div>
            <div className={cn("rounded-lg p-1 px-2 flex justify-center items-center gap-1 bg-gray-800 w-fit" , 
                {"bg-gray-100" : theme === "light"}
            )}>

                <Send className="w-3 h-3" />
                <span className=" text-xs">Campaign Name</span>
            </div>
        </div>
    </div>
  )
}

export default MailCard