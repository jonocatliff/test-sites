
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
            title="Philadelphia bush trimming | We'll Take Care Of Everything" 
            desc="Philadelphia bush trimming: o p"
            canonical={`${props.website}/philadelphia-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia bush trimming" //KW
            />
            <Header
            title="Philadelphia bush trimming" //KW
            subtitle="o p"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  g"
            image="/window-installation.jpg"
            alt="Philadelphia bush trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Philadelphia bush trimming" //KW
            desc="u n c i"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="d"
            cardDesc3="e"
            />
            <Approach
            title="Philadelphia bush trimming" //KW
            desc="n   o a"
            />
            <Intro
            subtitle="Exceptional Philadelphia bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="e e"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2=" "
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
        