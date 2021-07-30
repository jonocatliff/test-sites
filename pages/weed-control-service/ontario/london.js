
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
            title="London weed control service | We'll Take Care Of Everything" 
            desc="London weed control service: d n"
            canonical={`${props.website}/london-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London weed control service" //KW
            />
            <Header
            title="London weed control service" //KW
            subtitle="d n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  b"
            image="/contractor.jpg"
            alt="London weed control service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional London weed control service" //KW
            desc="  p s undefined"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="London weed control service" //KW
            desc="o p a  "
            />
            <Intro
            subtitle="Exceptional London weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        