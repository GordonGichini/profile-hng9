import { ExternalLink } from 'react-external-link';

const links = ({links}) => {
  return (
    <div>
    {/* <div className='w-[100%]'> */}
    {links.map((link) => (
    // <div key={link.id} className='w-[90%] max-lg:w-[85%] h-[76px] text-center mx-[auto] bg-gray-fade hover:bg-gray-bold hover:text-neutral-400 mb-[1.5%] leading-[76px] rounded-[8px]  max-sm:mb-[5%]  max-[425px]:h-[65px] max-[425px]:leading-[65px]  max-sm:w-[90%]'>
    <div key={link.id} className='pt-[2%] w-[90%] max-lg:w-[85%] h-[100px]  text-center mx-[auto] bg-gray-fade hover:bg-gray-bold hover:text-neutral-400 mb-[1.5%]  rounded-[8px]  max-sm:mb-[5%]  max-[425px]:h-[65px] max-[425px]:leading-[65px]  max-sm:w-[90%] max-sm:pt-[0]'>
        <ExternalLink href={link.page}>
          <h2 className=' text-[18px] max-sm:text-[16px] text-[#101828] hover:text-white-teal font-semibold'>{link.name}</h2>
          <p className=' text-[16px] max-sm:text-[14px] max-sm:hidden'>{link.text}</p>
        </ExternalLink>
    </div>
    ))}
    </div>
  )
}
