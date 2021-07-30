
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
            title="Fort Worth grass cutting companies | We'll Take Care Of Everything" 
            desc="Fort Worth grass cutting companies: s  "
            canonical={`${props.website}/fort-worth-grass-cutting-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth grass cutting companies" //KW
            />
            <Header
            title="Fort Worth grass cutting companies" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a i"
            image="/contractor.jpg"
            alt="Fort Worth grass cutting companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth grass cutting companies" //KW
            desc="d f i s"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="d"
            cardDesc3="n"
            />
            <Approach
            title="Fort Worth grass cutting companies" //KW
            desc="a d x n"
            />
            <Intro
            subtitle="Exceptional Fort Worth grass cutting companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i f"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2=" "
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
        