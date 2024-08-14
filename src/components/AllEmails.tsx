
import axios from 'axios'
import MailCard from './MailCard'
import { Loader2 } from 'lucide-react'


type Props = {
    token: string | null
    emails: object[]
    loading: boolean
    onMailCardClick: (threadId: string) => void; 
}

const AllEmails = (props: Props) => {



    return (
        <div  >
            {props.loading ? <Loader2  className='w-6 h-6 mt-10 text-center text-blue-500 animate-spin'/> :

                (
                    props.emails.map((email, index) => (
                        <MailCard key={index} email={email} onClick={props.onMailCardClick}/>
                    ))
                )
            }

        </div>
    )
}

export default AllEmails