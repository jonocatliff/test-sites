
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
            title="Oklahoma City home window replacement companies | We'll Take Care Of Everything" 
            desc="Oklahoma City home window replacement companies: o r"
            canonical={`${props.website}/oklahoma-city-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City home window replacement companies" //KW
            />
            <Header
            title="Oklahoma City home window replacement companies" //KW
            subtitle="o r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="   "
            image="/contractor.jpg"
            alt="Oklahoma City home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oklahoma City home window replacement companies" //KW
            desc="o t r  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="a"
            cardDesc3="s"
            />
            <Approach
            title="Oklahoma City home window replacement companies" //KW
            desc="e   r n"
            />
            <Intro
            subtitle="Exceptional Oklahoma City home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c e"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="b"
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
        