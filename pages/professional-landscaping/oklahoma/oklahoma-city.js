
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
            title="Oklahoma City professional landscaping | We'll Take Care Of Everything" 
            desc="Oklahoma City professional landscaping: s o"
            canonical={`${props.website}/oklahoma-city-professional-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City professional landscaping" //KW
            />
            <Header
            title="Oklahoma City professional landscaping" //KW
            subtitle="s o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  n"
            image="/window-washing.jpg"
            alt="Oklahoma City professional landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City professional landscaping" //KW
            desc="n e m undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="w"
            cardDesc3="l"
            />
            <Approach
            title="Oklahoma City professional landscaping" //KW
            desc="  c a o"
            />
            <Intro
            subtitle="Exceptional Oklahoma City professional landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="r undefined"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="e"
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
        