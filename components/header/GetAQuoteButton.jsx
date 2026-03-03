import Link from 'next/link';


const GetAQuoteButton = () => {
    return (
        <div className="header-button">
                                    <Link
                                        href="contact"
                                        className="theme-btn bg-2"
                                    >
                                        Get A Quote
                                    </Link>
                                </div>
    );
}

export default GetAQuoteButton;