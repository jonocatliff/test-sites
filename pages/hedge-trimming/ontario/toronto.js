
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
            title="Toronto hedge trimming | We'll Take Care Of Everything" 
            desc="Toronto hedge trimming:   y"
            canonical={`${props.website}/toronto-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto hedge trimming" //KW
            />
            <Header
            title="Toronto hedge trimming" //KW
            subtitle="  y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i m"
            image="/window-washing.jpg"
            alt="Toronto hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Toronto hedge trimming" //KW
            desc="s e   i"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="w"
            cardDesc3="r"
            />
            <Approach
            title="Toronto hedge trimming" //KW
            desc="s t   t"
            />
            <Intro
            subtitle="Exceptional Toronto hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="i"
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
        