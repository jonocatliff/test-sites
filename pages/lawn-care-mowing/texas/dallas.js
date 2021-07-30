
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
            title="Dallas lawn care mowing | We'll Take Care Of Everything" 
            desc="Dallas lawn care mowing: e l"
            canonical={`${props.website}/dallas-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas lawn care mowing" //KW
            />
            <Header
            title="Dallas lawn care mowing" //KW
            subtitle="e l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r e"
            image="/window-washing.jpg"
            alt="Dallas lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Dallas lawn care mowing" //KW
            desc="w e r t"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="g"
            cardDesc3="w"
            />
            <Approach
            title="Dallas lawn care mowing" //KW
            desc="o e a c"
            />
            <Intro
            subtitle="Exceptional Dallas lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  n"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2=" "
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
        