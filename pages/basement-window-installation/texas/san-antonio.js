
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
            title="San Antonio basement window installation | We'll Take Care Of Everything" 
            desc="San Antonio basement window installation: i ’"
            canonical={`${props.website}/san-antonio-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio basement window installation" //KW
            />
            <Header
            title="San Antonio basement window installation" //KW
            subtitle="i ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e i"
            image="/window-installation.jpg"
            alt="San Antonio basement window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Antonio basement window installation" //KW
            desc="r   r w"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="San Antonio basement window installation" //KW
            desc="    w i"
            />
            <Intro
            subtitle="Exceptional San Antonio basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v  "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="g"
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
        