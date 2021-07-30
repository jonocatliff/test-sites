
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
            title="Milwaukee landscape contractors | We'll Take Care Of Everything" 
            desc="Milwaukee landscape contractors: a g"
            canonical={`${props.website}/milwaukee-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee landscape contractors" //KW
            />
            <Header
            title="Milwaukee landscape contractors" //KW
            subtitle="a g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e y"
            image="/window-washing.jpg"
            alt="Milwaukee landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Milwaukee landscape contractors" //KW
            desc="a a t a"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="u"
            cardDesc3="k"
            />
            <Approach
            title="Milwaukee landscape contractors" //KW
            desc="  c f r"
            />
            <Intro
            subtitle="Exceptional Milwaukee landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="i o"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        