import Image from 'next/image';

const Question = ({ children }) => {
    return (
        <div className="flex w-full mt-2 space-x-3 max-w-lg">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white-300">
              <Image className="rounded-full" src="/persona.png" alt="robot" width={40} height={40} />
            </div>
            <div>
              <div className="bg-gray-200 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm text-black">{children}</p>
              </div>
            </div>
         </div>
    )
}

export default Question;