
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
            title="Charlotte grass mowing service | We'll Take Care Of Everything" 
            desc="Charlotte grass mowing service: p c"
            canonical={`${props.website}/charlotte-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte grass mowing service" //KW
            />
            <Header
            title="Charlotte grass mowing service" //KW
            subtitle="p c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r n"
            image="/window-washing.jpg"
            alt="Charlotte grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte grass mowing service" //KW
            desc="d   r e"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="P"
            cardDesc3="s"
            />
            <Approach
            title="Charlotte grass mowing service" //KW
            desc="r f d r"
            />
            <Intro
            subtitle="Exceptional Charlotte grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="w e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
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
        