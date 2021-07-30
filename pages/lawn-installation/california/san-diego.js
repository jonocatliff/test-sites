
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
            title="San Diego lawn installation | We'll Take Care Of Everything" 
            desc="San Diego lawn installation: a a"
            canonical={`${props.website}/san-diego-lawn-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego lawn installation" //KW
            />
            <Header
            title="San Diego lawn installation" //KW
            subtitle="a a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o o"
            image="/window-washing.jpg"
            alt="San Diego lawn installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego lawn installation" //KW
            desc="o   s ."
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="l"
            cardDesc3="o"
            />
            <Approach
            title="San Diego lawn installation" //KW
            desc="s e   a"
            />
            <Intro
            subtitle="Exceptional San Diego lawn installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2=". o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="r"
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
        