
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
            title="San Francisco bush trimming | We'll Take Care Of Everything" 
            desc="San Francisco bush trimming: o a"
            canonical={`${props.website}/san-francisco-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco bush trimming" //KW
            />
            <Header
            title="San Francisco bush trimming" //KW
            subtitle="o a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o c"
            image="/window-installations.jpg"
            alt="San Francisco bush trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Francisco bush trimming" //KW
            desc="p v u p"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="San Francisco bush trimming" //KW
            desc="d   d i"
            />
            <Intro
            subtitle="Exceptional San Francisco bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="d  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        