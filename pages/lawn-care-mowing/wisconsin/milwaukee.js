
    import About from '../../../components/About';
    import Approach from '../../../components/Approach';
    import FAQ from '../../../components/FAQ';
    import Header from '../../../components/Header';
    import Intro from '../../../components/Intro';
    import Navigationbar from '../../../components/Navigationbar';
    import Savings from '../../../components/Savings';
    import Services from '../../../components/Services';
    import Testimonial from '../../../components/Testimonial';
    import Link from 'next/link';
    import CTABottom from '../../../components/CTABottom';
    import Footer from '../../../components/Footer';
    import Meta from '../../../partials/seo';
    
    
    export default function Home(props) {
        return (
        <div>
            <Meta 
            title="Milwaukee lawn care mowing | We'll Take Care Of Everything" 
            desc="Milwaukee lawn care mowing: a o"
            canonical={`${props.website}/milwaukee-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn care mowing" //KW
            />
            <Header
            title="Milwaukee lawn care mowing" //KW
            subtitle="a o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s i"
            image="/window-installation.jpg"
            alt="Milwaukee lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Milwaukee lawn care mowing" //KW
            desc="y e o u"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="c"
            cardDesc3="W"
            />
            <Approach
            title="Milwaukee lawn care mowing" //KW
            desc="n c   s"
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="h F"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="h"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        