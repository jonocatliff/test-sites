
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
            title="Montreal flower bed landscaping | We'll Take Care Of Everything" 
            desc="Montreal flower bed landscaping:   l"
            canonical={`${props.website}/montreal-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal flower bed landscaping" //KW
            />
            <Header
            title="Montreal flower bed landscaping" //KW
            subtitle="  l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  n"
            image="/window-washing.jpg"
            alt="Montreal flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Montreal flower bed landscaping" //KW
            desc="l e o  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="b"
            cardDesc3=" "
            />
            <Approach
            title="Montreal flower bed landscaping" //KW
            desc="r w x t"
            />
            <Intro
            subtitle="Exceptional Montreal flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="t o"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="e"
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
        