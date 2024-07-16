'use client'
import Detect from "@/components/Detect"
import { cn } from "@/lib/utils"
import { Image, Loader2, MousePointerSquareDashed, Upload } from "lucide-react"
import { useState } from "react"
import Dropzone,{FileRejection} from "react-dropzone"

const Page = () => {
    const [isDragOver ,setIsDragOver] = useState<boolean>(false)
    const onDropRejected = () => {}
    const onDropAccepted = () => {}
    return (
        <> <h1 className="text-2xl font-bold mb-4 text-center">Brain Tumor Detection</h1>
        <div
            className={cn(
                'relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
                {
                    'ring-blue-900/25 bg-blue-900/10': isDragOver,
                }
            )}
        >

            <div className='relative flex flex-1 flex-col items-center justify-center w-full'>

                <Detect></Detect>
            </div>
        </div></>
    )
}

export default Page
