export type GreetingProps = {
  title: string
  message: string
}

export const Greeting = ({ title, message }: GreetingProps) => {
  return (
    <div className='overflow-hidden bg-white rounded-lg shadow-lg sm:max-w-xs lg:max-w-sm xl:max-w-md'>
      <div className='px-6 py-4'>
        <h2 role='title' className='mb-2 text-xl font-bold'>
          {title}
        </h2>
        <p role='message' className='text-base text-gray-700'>
          {message}
        </p>
      </div>
    </div>
  )
}
