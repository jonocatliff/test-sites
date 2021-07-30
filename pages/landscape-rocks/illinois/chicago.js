
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
            title="Chicago landscape rocks | We'll Take Care Of Everything" 
            desc="Chicago landscape rocks: l a"
            canonical={`${props.website}/chicago-landscape-rocks`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago landscape rocks" //KW
            />
            <Header
            title="Chicago landscape rocks" //KW
            subtitle="l a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="b i"
            image="/window-installations.jpg"
            alt="Chicago landscape rocks"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Chicago landscape rocks" //KW
            desc="n   n m"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="m"
            cardDesc3="s"
            />
            <Approach
            title="Chicago landscape rocks" //KW
            desc="d o i w"
            />
            <Intro
            subtitle="Exceptional Chicago landscape rocks" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e f"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="e"
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
        