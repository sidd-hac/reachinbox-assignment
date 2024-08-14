import { cn, formatDate } from "@/lib/utils"
import { useTheme } from "next-themes"


type Props = {
    thread:any
}

const Timeline = (props: Props) => {

    const {theme} = useTheme()

    return (
        <div className="relative flex items-center justify-center w-full  mb-5">
            {/* Left Line */}
            <div className="absolute left-0 h-[1px] bg-slate-500 w-1/2"></div>
            {/* Right Line */}
            <div className="absolute right-0 h-[1px] bg-slate-500 w-1/2"></div>
            {/* Today Label */}
            <span className={cn("relative z-10 bg-gray-800 text-xs text-muted-foreground p-2 rounded-lg", { "bg-slate-200": theme === "light" })}>{formatDate(props.thread.sentAt)}</span>
        </div>
    )
}

export default Timeline