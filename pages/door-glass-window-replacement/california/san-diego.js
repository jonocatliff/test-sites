
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
            title="San Diego door glass window replacement | We'll Take Care Of Everything" 
            desc="San Diego door glass window replacement: s  "
            canonical={`${props.website}/san-diego-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego door glass window replacement" //KW
            />
            <Header
            title="San Diego door glass window replacement" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o  "
            image="/window-installation.jpg"
            alt="San Diego door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego door glass window replacement" //KW
            desc="  w d e"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="San Diego door glass window replacement" //KW
            desc="g     h"
            />
            <Intro
            subtitle="Exceptional San Diego door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="c o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        