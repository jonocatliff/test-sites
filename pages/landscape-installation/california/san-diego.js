
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
            title="San Diego landscape installation | We'll Take Care Of Everything" 
            desc="San Diego landscape installation:   ’"
            canonical={`${props.website}/san-diego-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego landscape installation" //KW
            />
            <Header
            title="San Diego landscape installation" //KW
            subtitle="  ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  o"
            image="/window-washing.jpg"
            alt="San Diego landscape installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego landscape installation" //KW
            desc="g i t w"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="San Diego landscape installation" //KW
            desc="d i d o"
            />
            <Intro
            subtitle="Exceptional San Diego landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="m"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        