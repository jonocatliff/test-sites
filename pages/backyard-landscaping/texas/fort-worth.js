
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
            title="Fort Worth backyard landscaping | We'll Take Care Of Everything" 
            desc="Fort Worth backyard landscaping: o i"
            canonical={`${props.website}/fort-worth-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth backyard landscaping" //KW
            />
            <Header
            title="Fort Worth backyard landscaping" //KW
            subtitle="o i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w g"
            image="/window-washing.jpg"
            alt="Fort Worth backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Fort Worth backyard landscaping" //KW
            desc=", a i n"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="o"
            cardDesc3="w"
            />
            <Approach
            title="Fort Worth backyard landscaping" //KW
            desc="e l d ’"
            />
            <Intro
            subtitle="Exceptional Fort Worth backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="c r"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="t"
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
        