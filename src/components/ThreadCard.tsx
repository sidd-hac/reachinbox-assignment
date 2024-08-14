import { cn, formatDate, formatDateTime, truncateContent } from "@/lib/utils"
import { useTheme } from "next-themes"


type Props = {
  selectedThread: any
}

const ThreadCard = (props: Props) => {

  const {theme} = useTheme()

  return (
    <div className={cn("bg-gray-900 rounded-xl p-3  shadow-white shadow-sm" , {"bg-slate-100" : theme === "light"})} >
      <div className="flex justify-between" >
        <h2 className="text-md">{truncateContent(props.selectedThread.subject, 50)}</h2>
        <p className="text-xs text-muted-foreground">{formatDateTime(props.selectedThread.sentAt)}</p>
      </div>
      <div className="flex flex-col justify-start gap-3 text-muted-foreground mt-4">
        <div className="flex text-xs gap-2">
          <span>From :</span>
          <p>{props.selectedThread.fromEmail}</p>
        </div>
        <div className="flex text-xs gap-2">
          <span>To :</span>
          <p>{props.selectedThread.toEmail}</p>
        </div>
      </div>
      {/* <div className="text-sm max-w-96 mt-10 leading-loose" >
       {props.selectedThread.body}
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: props.selectedThread.body }}  className="text-sm max-w-96 mt-10 leading-loose"/>

    </div>
  )
}

export default ThreadCard