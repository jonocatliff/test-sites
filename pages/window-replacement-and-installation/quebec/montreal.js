
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
            title="Montreal window replacement and installation | We'll Take Care Of Everything" 
            desc="Montreal window replacement and installation: x l"
            canonical={`${props.website}/montreal-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal window replacement and installation" //KW
            />
            <Header
            title="Montreal window replacement and installation" //KW
            subtitle="x l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r  "
            image="/window-washing.jpg"
            alt="Montreal window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Montreal window replacement and installation" //KW
            desc="r   r  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="Montreal window replacement and installation" //KW
            desc="    t ’"
            />
            <Intro
            subtitle="Exceptional Montreal window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="s r"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="o"
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
        