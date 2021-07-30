
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
            title="Louisville grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Louisville grass treatment for weeds: l  "
            canonical={`${props.website}/louisville-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville grass treatment for weeds" //KW
            />
            <Header
            title="Louisville grass treatment for weeds" //KW
            subtitle="l  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o o"
            image="/window-washing.jpg"
            alt="Louisville grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville grass treatment for weeds" //KW
            desc="l f .  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="i"
            cardDesc3="o"
            />
            <Approach
            title="Louisville grass treatment for weeds" //KW
            desc="g y s o"
            />
            <Intro
            subtitle="Exceptional Louisville grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c  "
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=" "
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
        