
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
            title="Winnipeg window replacement and installation | We'll Take Care Of Everything" 
            desc="Winnipeg window replacement and installation:    "
            canonical={`${props.website}/winnipeg-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg window replacement and installation" //KW
            />
            <Header
            title="Winnipeg window replacement and installation" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="l p"
            image="/window-installation.jpg"
            alt="Winnipeg window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Winnipeg window replacement and installation" //KW
            desc="p r r n"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Winnipeg window replacement and installation" //KW
            desc="t r r h"
            />
            <Intro
            subtitle="Exceptional Winnipeg window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="c o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="e"
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
        