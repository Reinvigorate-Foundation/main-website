import Wrapper from "/src/components/Wrapper"
import Logo from "/src/components/Logo"

import { Link } from "react-router-dom"

function Footer() {
    const contactLinks = [
	{
	    text: "+919650085432",
	    href: "tel:+919650085432",
	    icon: "/images/other/phone.svg"
	},
	{
	    text: "team@reinvigoratefoundation.org",
	    href: "mailto:team@reinvigoratefoundation.org",
	    icon: "/images/other/mail.svg"
	},
	{
	    text: "Reinvigorate Foundation",
	    href: "https://www.instagram.com/reinvigoratefoundation/",
	    icon: "/images/other/instagram.svg"
	},
	{
	    text: "Express To Liberate",
	    href: "https://www.instagram.com/expresstoliberate/",
	    icon: "/images/other/instagram.svg"
	}
    ]

    return (
	<footer className="py-10 bg-secondary mt-10">
	    <Wrapper className="text-center flex flex-col gap-8 md:flex-row md:text-left md:gap-14 mb-10">
		<section className="w-full items-center flex flex-col md:items-start">
		    <Logo className="h-10 block mb-4"/>
		    <p>An organization which aims to build a sustained healthy and happy environment - physical, psychological, and economic - for all to have improved surroundings and a respectable standard of living.</p>
		</section>
		<section className="w-full">
		    <h3 className="text-xl font-display mb-4">Contact Us</h3>
		    <div className="flex flex-col gap-2 md:flex-wrap">
			{
			    contactLinks.map((link, id) => (
				<a key={id} className="flex justify-center md:justify-start" target="_blank" href={link.href}>
				    <img className="h-5 mr-3 inline" alt="" src={link.icon}/>
				    {link.text}
				</a>
			    ))
			}
		    </div>
		</section>
	    </Wrapper>
	    <Wrapper className="text-center">
		<hr className="w-full mx-auto opacity-30 mb-4"/>
		&copy; {new Date().getFullYear()} Reinvigorate Foundation. All Rights Reserved.
	    </Wrapper>
	</footer>
    )
}

export default Footer;
