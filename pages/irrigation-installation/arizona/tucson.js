
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
            title="Tucson irrigation installation | We'll Take Care Of Everything" 
            desc="Tucson irrigation installation:   k"
            canonical={`${props.website}/tucson-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson irrigation installation" //KW
            />
            <Header
            title="Tucson irrigation installation" //KW
            subtitle="  k"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="P d"
            image="/window-washing.jpg"
            alt="Tucson irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Tucson irrigation installation" //KW
            desc="t   . e"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3=" "
            />
            <Approach
            title="Tucson irrigation installation" //KW
            desc="  - a h"
            />
            <Intro
            subtitle="Exceptional Tucson irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="o c"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="b"
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
        