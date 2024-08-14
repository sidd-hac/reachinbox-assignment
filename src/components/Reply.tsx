import { Code, Eye, Image, Link2, Smile, UserMinus, X } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import axios from "axios"


type Props = {
    threadId: string
    fromEmail: string;
    toEmail: string;
    subject: string;
}

const Reply = (props: Props) => {

    const [isReplyOpen, setIsReplyOpen] = useState(false);
    const [editorContent, setEditorContent] = useState('');
    const { theme } = useTheme()

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'R' || event.key === 'r') {
                setIsReplyOpen(true);
            }
        };

        // Attach the event listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleVariables = (variable : string) => {
        
        setEditorContent(prevContent => prevContent + variable);
    };

    const handleSave = () => {
        localStorage.setItem("savedReplyContent", editorContent)
        alert("Reply saved successfully!")
      }

      const handleSendReply = async () => {
        const token = localStorage.getItem("token");
        const payload = {
            from:props.fromEmail ||"mitrajit2022@gmail.com",
            to: props.toEmail || "chandra.rupam@gmail.com",
            subject :`Re:${ props.subject || "Optimize Your Recruitment Efforts with Expert Support"}`,
            body: editorContent, 
        };

        try {
            const res = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${props.threadId}`, payload, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(res.data);
            
            // Call callback to refresh the thread or give feedback to the user
            setIsReplyOpen(false); // Close the reply popover
        } catch (error) {
            console.error("Error sending reply:", error);
        }
    };

    return (
        <div className="absolute bottom-10 right-5" >
            <Popover open={isReplyOpen} onOpenChange={setIsReplyOpen}>
                <PopoverTrigger className="flex justify-center items-center p-2 px-3 rounded-md gap-2 bg-blue-500">

                    Reply

                </PopoverTrigger>
                <PopoverContent className="rounded-xl" >
                    <div className="rounded-xl" >
                        <div className={cn("flex justify-between p-2 bg-gray-800 rounded-t-xl ", { "bg-slate-200": theme === "light" })}>
                            <h2 className="text-sm ">Reply</h2>
                            <X className="w-5 h-5" onClick={() => setIsReplyOpen(false)} />
                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >To:</h2>
                            <p className="text-sm text-muted-foreground" >{props.toEmail}</p>

                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >From:</h2>
                            <p className="text-sm text-muted-foreground" >{props.fromEmail}</p>

                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >Subject:</h2>
                            <p className="text-sm text-muted-foreground" >{props.subject}</p>

                        </div>
                        <Separator />
                        <div className="w-full h-[200px]" >
                            <Textarea placeholder="hii jenny" value={editorContent} onChange={(e) => setEditorContent(e.target.value)} className="w-full h-full" />


                        </div>
                        <Separator />
                        <div className="flex justify-start items-center gap-3 p-2 ">
                            <Button className="bg-blue-500" variant="secondary" onClick={handleSendReply} >Send</Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="text-sm">variable</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>variables</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() =>handleVariables('{{first_name}}')} >First name</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() =>handleVariables('{{last_name}}')}>last name</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() =>handleVariables('{{email}}')}>email</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Button variant="ghost" onClick={handleSave} className="text-sm text-muted-foreground" >Save</Button>
                            <Button variant="ghost" className="text-xs text-muted-foreground" >preview mail</Button>
                            <span className="text-xs text-muted-foreground ">
                                <Link2 className="w-4 h-4" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Image className="w-4 h-4" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Smile className="w-4 h-4" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <UserMinus className="w-4 h-4" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Code className="w-4 h-4" />
                            </span>

                        </div>


                    </div>

                </PopoverContent>
            </Popover>

        </div>
    )
}

export default Reply