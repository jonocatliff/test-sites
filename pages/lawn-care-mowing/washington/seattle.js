
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
            title="Seattle lawn care mowing | We'll Take Care Of Everything" 
            desc="Seattle lawn care mowing: b e"
            canonical={`${props.website}/seattle-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle lawn care mowing" //KW
            />
            <Header
            title="Seattle lawn care mowing" //KW
            subtitle="b e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d o"
            image="/window-installation.jpg"
            alt="Seattle lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Seattle lawn care mowing" //KW
            desc="p s e l"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="u"
            cardDesc3="y"
            />
            <Approach
            title="Seattle lawn care mowing" //KW
            desc="d o l  "
            />
            <Intro
            subtitle="Exceptional Seattle lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="  a"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="b"
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
        