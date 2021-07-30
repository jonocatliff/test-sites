
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
            title="Calgary backyard landscape design | We'll Take Care Of Everything" 
            desc="Calgary backyard landscape design: n i"
            canonical={`${props.website}/calgary-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary backyard landscape design" //KW
            />
            <Header
            title="Calgary backyard landscape design" //KW
            subtitle="n i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s a"
            image="/contractor.jpg"
            alt="Calgary backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Calgary backyard landscape design" //KW
            desc="  f   x"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="m"
            cardDesc2="e"
            cardDesc3="i"
            />
            <Approach
            title="Calgary backyard landscape design" //KW
            desc="g s o r"
            />
            <Intro
            subtitle="Exceptional Calgary backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="o n"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="m"
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
        