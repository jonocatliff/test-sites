
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
            title="San Diego swimming pool landscaping | We'll Take Care Of Everything" 
            desc="San Diego swimming pool landscaping: u a"
            canonical={`${props.website}/san-diego-swimming-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego swimming pool landscaping" //KW
            />
            <Header
            title="San Diego swimming pool landscaping" //KW
            subtitle="u a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="A o"
            image="/contractor.jpg"
            alt="San Diego swimming pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego swimming pool landscaping" //KW
            desc="n e i undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="."
            cardDesc3="y"
            />
            <Approach
            title="San Diego swimming pool landscaping" //KW
            desc="l a n a"
            />
            <Intro
            subtitle="Exceptional San Diego swimming pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o undefined"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        