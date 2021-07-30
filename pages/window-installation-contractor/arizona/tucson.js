
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
            title="Tucson window installation contractor | We'll Take Care Of Everything" 
            desc="Tucson window installation contractor: a  "
            canonical={`${props.website}/tucson-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson window installation contractor" //KW
            />
            <Header
            title="Tucson window installation contractor" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d o"
            image="/window-installation.jpg"
            alt="Tucson window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Tucson window installation contractor" //KW
            desc="  a o  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Tucson window installation contractor" //KW
            desc="r   y h"
            />
            <Intro
            subtitle="Exceptional Tucson window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="e t"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
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
        