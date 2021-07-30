
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
            title="Louisville lawn care companies | We'll Take Care Of Everything" 
            desc="Louisville lawn care companies: W  "
            canonical={`${props.website}/louisville-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn care companies" //KW
            />
            <Header
            title="Louisville lawn care companies" //KW
            subtitle="W  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w t"
            image="/window-installations.jpg"
            alt="Louisville lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville lawn care companies" //KW
            desc="n n l n"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="n"
            />
            <Approach
            title="Louisville lawn care companies" //KW
            desc="r   h l"
            />
            <Intro
            subtitle="Exceptional Louisville lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="e e"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="s"
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
        