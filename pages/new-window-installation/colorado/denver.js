
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
            title="Denver new window installation | We'll Take Care Of Everything" 
            desc="Denver new window installation: l o"
            canonical={`${props.website}/denver-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver new window installation" //KW
            />
            <Header
            title="Denver new window installation" //KW
            subtitle="l o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="m v"
            image="/window-installations.jpg"
            alt="Denver new window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Denver new window installation" //KW
            desc="a i e  "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="o"
            cardDesc3="g"
            />
            <Approach
            title="Denver new window installation" //KW
            desc="d h a  "
            />
            <Intro
            subtitle="Exceptional Denver new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v e"
            cardDesc3="n"
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
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        