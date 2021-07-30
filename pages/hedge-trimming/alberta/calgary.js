
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
            title="Calgary hedge trimming | We'll Take Care Of Everything" 
            desc="Calgary hedge trimming: h h"
            canonical={`${props.website}/calgary-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary hedge trimming" //KW
            />
            <Header
            title="Calgary hedge trimming" //KW
            subtitle="h h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l i"
            image="/window-installations.jpg"
            alt="Calgary hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary hedge trimming" //KW
            desc="i s e d"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Calgary hedge trimming" //KW
            desc="r   o m"
            />
            <Intro
            subtitle="Exceptional Calgary hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="y t"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="c"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        