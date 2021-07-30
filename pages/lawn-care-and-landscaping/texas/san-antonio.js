
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
            title="San Antonio lawn care and landscaping | We'll Take Care Of Everything" 
            desc="San Antonio lawn care and landscaping: n ,"
            canonical={`${props.website}/san-antonio-lawn-care-and-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio lawn care and landscaping" //KW
            />
            <Header
            title="San Antonio lawn care and landscaping" //KW
            subtitle="n ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="t y"
            image="/window-washing.jpg"
            alt="San Antonio lawn care and landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Antonio lawn care and landscaping" //KW
            desc="r l e o"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="n"
            cardDesc3="a"
            />
            <Approach
            title="San Antonio lawn care and landscaping" //KW
            desc="r s l m"
            />
            <Intro
            subtitle="Exceptional San Antonio lawn care and landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="i n"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="c"
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
        