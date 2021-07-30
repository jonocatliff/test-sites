
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
            title="San Francisco landscape architect | We'll Take Care Of Everything" 
            desc="San Francisco landscape architect: i a"
            canonical={`${props.website}/san-francisco-landscape-architect`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco landscape architect" //KW
            />
            <Header
            title="San Francisco landscape architect" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="f W"
            image="/window-installations.jpg"
            alt="San Francisco landscape architect"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco landscape architect" //KW
            desc="p w i m"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="c"
            cardDesc3=","
            />
            <Approach
            title="San Francisco landscape architect" //KW
            desc="s l o u"
            />
            <Intro
            subtitle="Exceptional San Francisco landscape architect" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="i s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="n"
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
        