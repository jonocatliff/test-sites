
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
            title="London driveway landscaping | We'll Take Care Of Everything" 
            desc="London driveway landscaping: h O"
            canonical={`${props.website}/london-driveway-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London driveway landscaping" //KW
            />
            <Header
            title="London driveway landscaping" //KW
            subtitle="h O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o e"
            image="/window-washing.jpg"
            alt="London driveway landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional London driveway landscaping" //KW
            desc="e   w l"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="t"
            cardDesc3="n"
            />
            <Approach
            title="London driveway landscaping" //KW
            desc="  x , v"
            />
            <Intro
            subtitle="Exceptional London driveway landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        