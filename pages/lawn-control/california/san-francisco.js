
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
            title="San Francisco lawn control | We'll Take Care Of Everything" 
            desc="San Francisco lawn control: o i"
            canonical={`${props.website}/san-francisco-lawn-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco lawn control" //KW
            />
            <Header
            title="San Francisco lawn control" //KW
            subtitle="o i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  e"
            image="/window-installation.jpg"
            alt="San Francisco lawn control"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Francisco lawn control" //KW
            desc="m r o  "
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="San Francisco lawn control" //KW
            desc="r   u n"
            />
            <Intro
            subtitle="Exceptional San Francisco lawn control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="o s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2=" "
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
        