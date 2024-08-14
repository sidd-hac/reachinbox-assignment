import Image from "next/image"


type Props = {}

const EpmtyWorkspace = (props: Props) => {
    return (
        <div className="flex justify-center items-center w-full h-full mt-20" >
            <div className="flex flex-col justify-center items-center space-y-5" >
                <Image src="/empty.svg" alt="Empty Workspace" width={300} height={300} quality={100} />
                <h2 className="text-xl font-bold " >It’s the beginning of a legendary sales pipeline</h2>
                <p className="text-sm text-muted-foreground text-center " >When you have inbound E-mails <br/> you’ll see them here</p>
            </div>

        </div>
    )
}

export default EpmtyWorkspace