
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
            title="Hamilton house glass window replacement | We'll Take Care Of Everything" 
            desc="Hamilton house glass window replacement: d o"
            canonical={`${props.website}/hamilton-house-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton house glass window replacement" //KW
            />
            <Header
            title="Hamilton house glass window replacement" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t l"
            image="/contractor.jpg"
            alt="Hamilton house glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton house glass window replacement" //KW
            desc="s   a d"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Hamilton house glass window replacement" //KW
            desc="a   e a"
            />
            <Intro
            subtitle="Exceptional Hamilton house glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="c o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="’"
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
        