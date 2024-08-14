"use client"

import { ArrowBigDown, ChevronDown, Ellipsis, Loader2, Mail, MailOpen, RotateCw, Search, Send } from "lucide-react"
import AllEmails from "./AllEmails"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import WorkspaceDropdown from "./WorkspaceDropdown"
import { useTheme } from "next-themes"
import { cn, formatDate } from "@/lib/utils"
import { Separator } from "./ui/separator"
import Image from "next/image"
import Reply from "./Reply"
import { useEffect, useState } from "react"
import axios from "axios"
import ThreadCard from "./ThreadCard"
import RightBar from "./RightBar"
import Timeline from "./Timeline"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"


type Props = {}

interface Email {
    threadId: string;
    fromEmail: string;
    toEmail: string;
    subject: string;
    // Add other fields as necessary
}

const EmailWorkspace = (props: Props) => {

    const { theme } = useTheme()
    const token = localStorage.getItem("token")
    const [emails, setEmails] = useState<Email[]>([])
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [IsDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedThread, setSelectedThread] = useState([]);

    useEffect(() => {

        const getEmails = async () => {

            setLoading(true);
            try {
                const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setEmails(response.data.data);


            } catch (error) {
                console.error("Error fetching emails:", error);
            } finally {
                setLoading(false);
            }
        }
        getEmails()
    }, [token])


    const handleMailCardClick = async (threadId: string) => {
        setFetching(true);
        try {
            const response = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSelectedThread(response.data.data);
            console.log(response.data);

        } catch (error) {
            console.error("Error fetching email thread:", error);
        } finally {
            setFetching(false);
        }
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'D' || event.key === 'd') {
                setIsDialogOpen(true);
            }
        };

        // Attach the event listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="grid grid-cols-12 w-full h-full" >
            {/* col1 */}
            <div className="col-span-3  h-full p-3 border-r border-gray-800">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2" >
                        <h1 className="flex justify-center items-center  gap-2 text-xl font-bold text-blue-500" >All Inbox(s) <ChevronDown /> </h1>
                        <div className="flex items-center gap-1" >
                            <span className="font-bold" >25/25</span>
                            <span className="text-sm text-muted-foreground" >Inboxes selected</span>
                        </div>
                    </div>
                    <div>
                        <Button variant="ghost" className={cn("p-2 bg-slate-800",
                            { "bg-gray-200": theme === "light" }
                        )}><RotateCw className="w-5 h-5" /></Button>
                    </div>

                </div>
                <div className="mt-5">
                    <div>
                        <Input placeholder="Search" />
                    </div>
                    <div className="flex justify-between items-center mt-2" >
                        <div className="flex justify-center items-center gap-2" >
                            <span className={cn(`text-blue-600 bg-slate-800 rounded-full text-sm font-bold p-1 px-2`, { "bg-slate-300": theme === "light" })} >26</span>
                            <p className="text-sm font-bold" >New Replies</p>
                        </div>
                        <div>
                            <WorkspaceDropdown lable="Newest" />

                        </div>
                    </div>
                </div>
                <AllEmails token={token} emails={emails} loading={loading} onMailCardClick={handleMailCardClick} />
            </div>
            <section className=" relative col-span-6">
                <div className="flex justify-between items-center p-2" >
                    <div className="flex flex-col p-2 gap-1">
                        <h2 className="text-md font-semibold" >Orlando</h2>
                        <p className="text-xs text-muted-foreground" >orlando@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center gap-2" >
                        <div className={cn("bg-gray-800 px-1 rounded-lg flex justify-center items-center ", { "bg-slate-200": theme === "light" })} >
                            <span className="rounded-full bg-yellow-400 w-3 h-3" />
                            <WorkspaceDropdown lable="Meeting Completed" />
                        </div>
                        <div className={cn("bg-gray-800 px-1 rounded-lg flex justify-center items-center ", { "bg-slate-200": theme === "light" })} >
                            <WorkspaceDropdown lable="Move" />
                        </div>
                        <div className={cn("bg-gray-800 py-1 px-2 rounded-lg flex justify-center items-center ", { "bg-slate-200": theme === 'light' })} >
                            <Dialog open={IsDialogOpen} onOpenChange={setIsDialogOpen} >
                                <DialogTrigger>
                                     <Ellipsis className="w-5 h-5" />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                        Your selected email will be deleted.
                                        </DialogDescription>
                                        <div className="mt-4" >
                                             <Button variant="secondary" className="mr-3" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                             <Button variant="ghost" className="bg-red-500 hover:bg-red-600" onClick={() => setIsDialogOpen(false)}>Delete </Button>
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>
                    </div>
                </div>
                <Reply
                    threadId={emails[0]?.threadId || " "}
                    fromEmail={emails[0]?.fromEmail || " "}
                    toEmail={emails[0]?.toEmail || " "}
                    subject={emails[0]?.subject || " "}
                />
                <Separator />


                {fetching ? (<div className="w-full h-full flex justify-center items-center" >
                    <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
                </div>) : selectedThread.length > 0 ? (

                    selectedThread.map((thread, index) => (
                        <div key={index} className="p-5" >
                            <Timeline thread={thread} />
                            <ThreadCard selectedThread={thread} />
                        </div>
                    ))
                ) : (
                    <div className="w-full flex justify-center items-center mt-10">
                        <p className="text-muted-foreground">Select an email to view its contents</p>
                    </div>
                )}
            </section>
            <RightBar />

        </div>
    )
}

export default EmailWorkspace