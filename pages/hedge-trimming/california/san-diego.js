
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
            title="San Diego hedge trimming | We'll Take Care Of Everything" 
            desc="San Diego hedge trimming: e o"
            canonical={`${props.website}/san-diego-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego hedge trimming" //KW
            />
            <Header
            title="San Diego hedge trimming" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n a"
            image="/window-installation.jpg"
            alt="San Diego hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Diego hedge trimming" //KW
            desc="    n i"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="i"
            cardDesc3="r"
            />
            <Approach
            title="San Diego hedge trimming" //KW
            desc="l   r e"
            />
            <Intro
            subtitle="Exceptional San Diego hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="o o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="n"
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
        