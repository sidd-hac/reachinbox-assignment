
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes"

type Props = {
    lable: string
}

const WorkspaceDropdown = (props: Props) => {

    const {theme} = useTheme();

    return (
        <Select>
            <SelectTrigger className="w-fit gap-1">
                <SelectValue placeholder={props.lable} className={cn({"text-gray-700 font-bold" : theme === 'light'})} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{props.lable}</SelectLabel>
                    <SelectItem value="Project 1">Project 1</SelectItem>
                    <SelectItem value="Project 2">Project 2</SelectItem>
                    <SelectItem value="Project 3">Project 3</SelectItem>
                  
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default WorkspaceDropdown



