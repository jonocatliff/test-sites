
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
            title="Kitchener front yard landscaping | We'll Take Care Of Everything" 
            desc="Kitchener front yard landscaping:   a"
            canonical={`${props.website}/kitchener-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener front yard landscaping" //KW
            />
            <Header
            title="Kitchener front yard landscaping" //KW
            subtitle="  a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d m"
            image="/window-installations.jpg"
            alt="Kitchener front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Kitchener front yard landscaping" //KW
            desc="  i   y"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="i"
            cardDesc3="r"
            />
            <Approach
            title="Kitchener front yard landscaping" //KW
            desc="  n   d"
            />
            <Intro
            subtitle="Exceptional Kitchener front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="c"
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
        