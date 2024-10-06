/* eslint-disable react/prop-types */


const FooterLinks = ({ links }) => {
    return (
        <>
            {
                links.map((link) => (
                    <li
                        key={link.id}
                        className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:text-primary"
                    >
                        <a href="#">{link.name}</a>
                    </li>
                ))
            }
        </>
    );
}

export default FooterLinks;
