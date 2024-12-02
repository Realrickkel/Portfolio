import { footerLinks } from '../Constants'

const Footer = () => {

  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray text-xs text-center sm:text-left'>Meer over mij weten? Bekijk dan mijn socials!</p>
                <div className='flex sm:flex-row flex-col text-center my-1'>
                    {footerLinks.map((link, i) => (
                        <a key={link.name} href={link.link} target='_blank' className='font-semibold flex justify-center items-center flex-row text-gray text-xs my-1 sm:my-0'>
                            {i === 0 && (
                                <img src={link.img} alt={link.name} className='footer-img-used mx-2 ml-0'/>
                            )}
                            {i !== 0 && (
                                <img src={link.img} alt={link.name} className='footer-img-used mx-2'/>
                            )}
                            {link.name} {' '}
                            {i !== footerLinks.length - 1 && (
                                <span className='mx-2 sm:inline hidden'> | </span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer